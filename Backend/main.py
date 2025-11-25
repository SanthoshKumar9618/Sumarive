from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from database import SessionLocal
from routes import news, auth
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import text


app = FastAPI()

# CORS (important for React)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Database Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

app.include_router(news.router)
app.include_router(auth.router)

@app.get("/")
def home():
    return {"message": "News API is running!"}

@app.get("/db-test")
def test_database(db: Session = Depends(get_db)):
    try:
        db.execute(text("SELECT 1"))
        return {"status": "success", "message": "MySQL connection is working!"}
    except Exception as e:
        return {"status": "error", "message": str(e)}
