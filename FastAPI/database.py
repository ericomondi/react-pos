from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from typing import Annotated
from fastapi import Depends
from sqlalchemy.orm import Session


# SQLite database URL (for an in-memory database, use ':memory:')
# URL_DATABASE = 'sqlite:///dukaapp.db'
# engine = create_engine(URL_DATABASE)


# URL_DATABASE = 'postgresql://postgres:12345@172.17.0.1:5432/mydatabase'
# engine = create_engine(URL_DATABASE)



password = 'dmore#2020'
URL_DATABASE = f'mysql+pymysql://root:{password}@localhost:3306/dukaapp'
engine = create_engine(URL_DATABASE)



# # DigitalOcean MySQL connection string
# username = "doadmin"
# password = "AVNS_ujQbMOy8ujIMwNPUz8e"
# host = "dbaas-db-4002324-do-user-16851886-0.c.db.ondigitalocean.com"
# port = "25060"
# database = "dukaapp"
# sslmode = "REQUIRED"

# URL_DATABASE = f'mysql+pymysql://{username}:{password}@{host}:{port}/{database}'



# # SSL parameters
# ssl_args = {
#     "ssl": {
#         "ssl_ca": "/path/to/ca-cert.pem",
#         "ssl_cert": "/path/to/client-cert.pem",
#         "ssl_key": "/path/to/client-key.pem",
#     }
# }


# # Create the engine with SSL parameters
# engine = create_engine(URL_DATABASE, connect_args=ssl_args)



SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()



def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

db_dependency = Annotated [Session, Depends(get_db)]