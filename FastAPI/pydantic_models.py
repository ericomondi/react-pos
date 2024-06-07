from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import List


class CreateUserRequest(BaseModel):
    username: str 
    email: str
    password: str
    

class LoginUserRequest(BaseModel):
    email: str 
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

class ForgotPasswordRequest(BaseModel):
    email: EmailStr

class ResetPasswordRequest(BaseModel):
    new_password: str
    
class TokenVerificationResponse(BaseModel):
    username: str
    tokenverification: str