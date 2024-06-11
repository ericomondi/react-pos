from sqlalchemy import Boolean, Column, Integer, String,func, DateTime, DECIMAL, ForeignKey, Numeric
from database import Base
from sqlalchemy.orm import relationship


class Users(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(50), unique=True)
    email = Column(String(200), unique=True)
    hashed_password = Column(String(256))
    created_at = Column(DateTime, default=func.now())

    # Relationship to Orders
    orders = relationship("Orders", back_populates="user")

     # Relationship to Products
    products = relationship("Products", back_populates="user")

class Products(Base):
    __tablename__ = 'products'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), unique=True, nullable=False, index=True)
    cost = Column(Numeric(precision=14, scale=2), nullable=False)
    price = Column(Numeric(precision=14, scale=2), nullable=False)
    img_url = Column(String(100), nullable=True)
    stock_quantity = Column(Numeric(precision=14, scale=2), nullable=False)
    created_at = Column(DateTime, default=func.now())
    user_id = Column(Integer, ForeignKey('users.id'))


    # Relationship to Users
    user = relationship("Users", back_populates="products")

    # Relationship to OrderDetails
    order_details = relationship("OrderDetails", back_populates="product")

class Orders(Base):
    __tablename__ = "orders"
    order_id = Column(Integer, primary_key=True)
    total = Column(Numeric(precision=14, scale=2))
    datetime = Column(DateTime, default=func.current_timestamp())

    # Relationship to OrderDetails
    order_details = relationship("OrderDetails", back_populates="order")

    # Relationship to User
    user_id = Column(Integer, ForeignKey('users.id'))
    user = relationship("Users", back_populates="orders")

class OrderDetails(Base):
    __tablename__ = "order_details"
    order_detail_id = Column(Integer, primary_key=True)
    order_id = Column(Integer, ForeignKey("orders.order_id"))
    product_id = Column(Integer, ForeignKey("products.id"))
    quantity = Column(Numeric(precision=15, scale=2))
    total_price = Column(Numeric(precision=15, scale=2))

    # Relationships
    product = relationship("Products", back_populates="order_details")
    order = relationship("Orders", back_populates="order_details")
