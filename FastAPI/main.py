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




app = FastAPI()
app.include_router(auth.router)
models.Base.metadata.create_all(bind=engine)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000","http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
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
async def fetch_products(db: db_dependency, user:user_dependency):
    id = user.get('id')
    try:
        products = (
            db.query(models.Products)
            .filter(models.Products.user_id == id)
            .all()
        )
        return products
    except SQLAlchemyError:
        raise HTTPException(
            status_code=500, detail="Error fetching products from the db"
        )

@app.post('/create_order', status_code=status.HTTP_201_CREATED)
async def create_order(db: db_dependency, user:user_dependency, order_payload: CartPayload):
    cart_items = order_payload.cartItems

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
                total_price=product.price * item.quantity
            )
            total_cost += order_detail.total_price
            db.add(order_detail)

    new_order_instance.total = total_cost
    new_order_instance.user_id = user.get("id")
    db.commit()

    return {"message": "Order created successfully", "order_id": new_order_instance.order_id}



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

@app.get("/sentry-debug")
async def trigger_error():
    division_by_zero = 1 / 0