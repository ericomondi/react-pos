from pydantic import BaseModel
from datetime import datetime
from typing import List

class CreateUserRequest(BaseModel):
    username: str
    password: str


class Token(BaseModel):
    access_token: str
    token_type: str


class ProductsBase(BaseModel):
    name: str
    cost: int
    price: int
    img_url: str
    stock_quantity: int

class CartItem(BaseModel):
    id: int
    quantity: int


class CartPayload(BaseModel):
    cartItems: List[CartItem]    



class TokenVerifyRequest(BaseModel):
    token: str

