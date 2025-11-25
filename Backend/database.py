
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

# Example: MySQL database URL
# mysql+pymysql://USERNAME:PASSWORD@HOST:PORT/DATABASE_NAME
DATABASE_URL = "mysql+pymysql://root:root@localhost:3306/newsdb"

engine = create_engine(
    DATABASE_URL,
    echo=True,           # optional: prints SQL queries
    pool_pre_ping=True   # prevents MySQL connection timeout issues
)

SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)

Base = declarative_base()
