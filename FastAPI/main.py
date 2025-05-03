from fastapi import FastAPI, HTTPException, Depends, status
from pydantic_models import ProductsBase, CartPayload, CartItem
from typing import Annotated
import models
from database import engine, SessionLocal, db_dependency
from sqlalchemy.orm import Session
from sqlalchemy.exc import SQLAlchemyError
import auth
from auth import get_active_user
from fastapi.middleware.cors import CORSMiddleware
import sentry_sdk
from sqlalchemy import func, cast, Date
from datetime import datetime, timedelta

app = FastAPI()
app.include_router(auth.router)
models.Base.metadata.create_all(bind=engine)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allows all headers
)

user_dependency = Annotated[dict, Depends(get_active_user)]


@app.get("/", status_code=status.HTTP_200_OK)
async def user(user: user_dependency, db: db_dependency):
    if user is None:
        raise HTTPException(status_code=401, detail="Authentication Failed!")
    return {"user": user}


@app.post("/products", status_code=status.HTTP_201_CREATED)
async def add_product(
    user: user_dependency, db: db_dependency, create_product: ProductsBase
):
    try:
        add_product = models.Products(
            name=create_product.name,
            price=create_product.price,
            cost=create_product.cost,
            img_url=create_product.img_url,
            stock_quantity=create_product.stock_quantity,
            barcode=create_product.barcode,
            user_id=user.get("id"),
        )
        db.add(add_product)
        db.commit()
        db.refresh(add_product)
        return {"message": "Product added successfully"}
    except SQLAlchemyError as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/products", status_code=status.HTTP_200_OK)
async def fetch_products(db: db_dependency, user: user_dependency):
    # id = user.get("id")
    try:
        # products = db.query(models.Products).filter(models.Products.user_id == id).all()
        products = db.query(models.Products).all()
        print("PRoducts........" , products)
        return products
    except SQLAlchemyError:
        raise HTTPException(
            status_code=500, detail="Error fetching products from the db"
        )


@app.post("/create_order", status_code=status.HTTP_201_CREATED)
async def create_order(
    db: db_dependency, user: user_dependency, order_payload: CartPayload
):
    cart_items = order_payload.cart
    print("cart items", cart_items)

    try:
        new_order_instance = models.Orders()  # Create an instance of the Orders model
        db.add(new_order_instance)
        db.commit()
    except SQLAlchemyError as e:
        db.rollback()
        raise HTTPException(
            status_code=500,
            detail=f"Failed to initiate the order: {str(e)}",
        )

    total_cost = 0

    for item in cart_items:
        print("Item id----", item.id)
        product = db.query(models.Products).filter_by(id=item.id).first()
        if product:
            order_detail = models.OrderDetails(
                order_id=new_order_instance.order_id,
                product_id=product.id,
                quantity=item.quantity,
                total_price=product.price * item.quantity,
            )
            total_cost += order_detail.total_price
            db.add(order_detail)

    new_order_instance.total = total_cost
    new_order_instance.user_id = user.get("id")
    db.commit()

    return {
        "message": "Order created successfully",
        "order_id": new_order_instance.order_id,
    }

@app.get("/orders", status_code=status.HTTP_200_OK)
async def fetch_orders(db: db_dependency, user: user_dependency):
    try:
        topSalesPerUser = db.query(models.Orders).filter(models.Orders.user_id == user.get("id")).all()
        orders = db.query(models.Orders).all()
        print("Orders:", orders)
        return orders
    except SQLAlchemyError:
        raise HTTPException(
            status_code=500, detail="Error fetching orders from the db"
        )



from fastapi.responses import JSONResponse

@app.get("/dashboard", response_class=JSONResponse)
def dashboard(db: db_dependency, user: user_dependency):
    id = user.get("id")
    
    # Get today's and yesterday's dates
    today = datetime.utcnow().date()
    yesterday = today - timedelta(days=1)

    # Total sales
    total_sales = db.query(func.sum(models.Orders.total)).scalar() or 0

    # Total products
    total_products = db.query(func.count(models.Products.id)).scalar() or 0

    # Sales per user
    sales_per_user = (
        db.query(
            models.Orders.user_id, func.sum(models.Orders.total).label("total_sales")
        )
        .filter(models.Orders.user_id == id)
        .group_by(models.Orders.user_id)
        .all()
    )

    user_sale = {user_id: float(total_sales) for user_id, total_sales in sales_per_user}.get(id, 0)

    # Query sales for today (all users)
    sales_today = (
        db.query(
            models.Orders.user_id,
            func.sum(models.Orders.total).label("total_revenue"),
            func.count(models.Orders.order_id).label("total_sales")
        )
        .filter(func.date(models.Orders.datetime) == today)
        .group_by(models.Orders.user_id)
        .all()
    )

    # Query today's sales for the logged-in user
    today_sale_per_user = (
        db.query(func.sum(models.Orders.total).label("total_revenue"))
        .filter(models.Orders.user_id == id, func.date(models.Orders.datetime) == today)
        .scalar() or 0
    )

    # Query sales for yesterday
    sales_yesterday = (
        db.query(
            models.Orders.user_id,
            func.sum(models.Orders.total).label("total_revenue")
        )
        .filter(func.date(models.Orders.datetime) == yesterday)
        .group_by(models.Orders.user_id)
        .all()
    )

    # Convert yesterday's sales into a dictionary for easy lookup
    yesterday_sales_dict = {s.user_id: s.total_revenue for s in sales_yesterday}

    # Prepare user sales data
    sales_data = []
    for sale in sales_today:
        previous_revenue = yesterday_sales_dict.get(sale.user_id, 0)
        percentage_change = (
            ((sale.total_revenue - previous_revenue) / previous_revenue) * 100
            if previous_revenue > 0
            else 0
        )

        sales_data.append({
            "user_id": sale.user_id,
            "total_revenue": sale.total_revenue,
            "number_of_sales": sale.total_sales,
            "percentage_change": round(percentage_change, 2),
            "change_type": "increase" if percentage_change > 0 else "decrease" if percentage_change < 0 else "neutral"
        })

    # Sort by total revenue and return top 5 users
    top_salesmen = sorted(sales_data, key=lambda x: x["total_revenue"], reverse=True)[:5]

    return {
        "total_sales": total_sales,
        "total_products": total_products,
        "sales_per_user": user_sale,
        "top_salesmen": top_salesmen,
        "todaySalePerUser": today_sale_per_user,  # Logged-in user's sales for today
    }


sentry_sdk.init(
    dsn="https://916b3a8a09ad77b34d76539db1ea7276@o4507367433568256.ingest.de.sentry.io/4507367467909200",
    # Set traces_sample_rate to 1.0 to capture 100%
    # of transactions for performance monitoring.
    traces_sample_rate=1.0,
    # Set profiles_sample_rate to 1.0 to profile 100%
    # of sampled transactions.
    # We recommend adjusting this value in production.
    profiles_sample_rate=1.0,
)


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
