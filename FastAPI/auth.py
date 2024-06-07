from datetime import timedelta, datetime
from typing import Annotated
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from starlette import status
from database import SessionLocal
from models import Users
from fastapi.security import OAuth2PasswordRequestForm, OAuth2PasswordBearer
from jose import jwt, JWTError
from database import db_dependency
from pydantic_models import (
    CreateUserRequest,
    Token,
    TokenVerifyRequest,
    LoginUserRequest,
    ForgotPasswordRequest,
    ResetPasswordRequest,
    TokenVerificationResponse
)
from passlib.context import CryptContext
from fastapi_mail import FastMail, MessageSchema, ConnectionConfig



router = APIRouter(prefix="/auth", tags=["auth"])
SECRETKEY_KEY = "7bc621fbc40de68f79b84a3922992194655724e9df7e2b8d684e01073395104f"
ALGORITHM = "HS256"
bycrypt_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_bearer = OAuth2PasswordBearer(tokenUrl="auth/login")

conf = ConnectionConfig(
    MAIL_USERNAME="ericoochieng456@gmail.com",
    MAIL_PASSWORD="dhqf lxgw zlaw bwdj",
    MAIL_FROM="ericoochieng456@gmail.com",
    MAIL_PORT=587,
    MAIL_SERVER="smtp.gmail.com",
    MAIL_STARTTLS=True,
    MAIL_SSL_TLS=False,
    USE_CREDENTIALS=True,
    VALIDATE_CERTS=True,
)

@router.post("/register", status_code=status.HTTP_201_CREATED)
async def register(db: db_dependency, create_user_request: CreateUserRequest):
    print("kucreate user", create_user_request)
    create_user_model = Users(
        username=create_user_request.username,
        email=create_user_request.email,
        hashed_password=bycrypt_context.hash(create_user_request.password),
    )
    db.add(create_user_model)
    db.commit()
    db.refresh(create_user_model)
    return {"message": "User created successfully "}


def authenticate_user(email: str, password: str, db):
    user = db.query(Users).filter(Users.email == email).first()
    if not user:
        raise HTTPException(status_code=404, detail="User does not exist.......")
    if not bycrypt_context.verify(password, user.hashed_password):
        raise HTTPException(status_code=401, detail="Invalid password or username.")
    return user


def create_access_token(username: str, user_id: int, expires_delta: timedelta):
    encode = {"sub": username, "id": user_id}
    expires = datetime.utcnow() + expires_delta
    encode.update({"exp": expires})
    return jwt.encode(encode, SECRETKEY_KEY, algorithm=ALGORITHM)



@router.post("/login", response_model=Token)
async def login(form_data: LoginUserRequest, db: db_dependency):
    user = authenticate_user(form_data.email, form_data.password, db)
    if not user:
        print("akilogin pale kwa error", user)
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, detail="Could not validate user."
        )
    token = create_access_token(user.username, user.id, timedelta(hours=1))

    return {"access_token": token, "token_type": "bearer"}


async def get_active_user(token: Annotated[str, Depends(oauth2_bearer)]):
    try:
        payload = jwt.decode(token, SECRETKEY_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        user_id: int = payload.get("id")
        if username is None or user_id is None:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Could not validate user.",
            )
        else:
            return {"username": username, "id": user_id}

    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token has expired")
    except jwt.JWTError:
        raise HTTPException(status_code=401, detail="Invalid token")


@router.post("/verify-token", response_model=TokenVerificationResponse, status_code=status.HTTP_200_OK)
async def verify_token(request_body: TokenVerifyRequest):
    try:
        # Decode the token
        payload = jwt.decode(request_body.token, SECRETKEY_KEY, algorithms=[ALGORITHM])

        # Convert exp to a datetime object
        exp_timestamp = float(payload["exp"])
        exp_datetime = datetime.fromtimestamp(exp_timestamp)

        #get username
        username = payload["sub"]

        # Check if the token has expired
        current_time = datetime.utcnow()
        if exp_datetime < current_time:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED, detail="Token expired"
            )

        # Token is valid, return a success message
        return {"username": username, "tokenverification": "success"}

    except JWTError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token"
        )




@router.post("/forgot-password", status_code=status.HTTP_200_OK)
async def forgot_password(
    forgot_password_request: ForgotPasswordRequest, db: db_dependency
):
    email = forgot_password_request.email
    user = db.query(Users).filter(Users.email == email).first()
    if not user:
        raise HTTPException(status_code=404, detail="User does not exist.")

    token_expires = timedelta(hours=1)
    reset_token = create_access_token(user.username, user.id, token_expires)

    # Send email
    message = MessageSchema(
        subject="Password Reset Request",
        recipients=[email],
        body=f"Please use the following link to reset your password: "
        f"http://http://localhost:3000/reset-password?token={reset_token}",
        subtype="html",
    )
    fm = FastMail(conf)
    await fm.send_message(message)

    return {"message": "Password reset email sent."}



@router.post("/reset-password/{token}", status_code=status.HTTP_200_OK)
async def reset_password( token, 
    reset_password_request: ResetPasswordRequest, db: db_dependency
):
    # token = reset_password_request.token
    new_password = reset_password_request.new_password
    try:
        payload = jwt.decode(token, SECRETKEY_KEY, algorithms=[ALGORITHM])
        user_id: int = payload.get("id")
        if user_id is None:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid token or token has expired.",
            )

        user = db.query(Users).filter(Users.id == user_id).first()
        if not user:
            raise HTTPException(status_code=404, detail="User does not exist.")

        # Update the user's password
        user.hashed_password = bycrypt_context.hash(new_password)
        db.add(user)
        db.commit()
        db.refresh(user)

        return {"message": "Password has been reset successfully."}

    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token has expired.")
    except jwt.JWTError:
        raise HTTPException(status_code=401, detail="Invalid token.")
    

 