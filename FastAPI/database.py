from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from typing import Annotated
from fastapi import Depends
from sqlalchemy.orm import Session



# password = 'dmore#2020'
# URL_DATABASE = f'mysql+pymysql://root:{password}@localhost:3306/dukaapp'


# DigitalOcean MySQL connection string
password = 'AVNS_M8ZtofRr9rgsSrwbYlU'
host = 'dbaas-db-4002324-do-user-16851886-0.c.db.ondigitalocean.com'
port = '25060'
database = 'dukaapp'
username = 'doadmin'

URL_DATABASE = f'mysql+pymysql://{username}:{password}@{host}:{port}/{database}'

# SSL parameters
ssl_args = {
    "ssl": {
        "ssl_ca": "/path/to/ca-cert.pem",
        "ssl_cert": "/path/to/client-cert.pem",
        "ssl_key": "/path/to/client-key.pem",
    }
}

# Create the engine with SSL parameters
engine = create_engine(URL_DATABASE, connect_args=ssl_args)


SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()



def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

db_dependency = Annotated [Session, Depends(get_db)]