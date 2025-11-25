from fastapi import APIRouter, Depends
import requests
from database import SessionLocal
from models import Favorite

router = APIRouter()
NEWS_API_KEY = "c9205d43c471424da5f1ffb994d5b121"

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/news")
def get_news():
    url = f"https://newsapi.org/v2/everything?q=india&sortBy=publishedAt&language=en&apiKey={NEWS_API_KEY}"
    response = requests.get(url)
    return response.json()


@router.post("/save")
def save_favorite(title: str, url: str, user: str, db=Depends(get_db)):
    fav = Favorite(title=title, url=url, user=user)
    db.add(fav)
    db.commit()
    return {"message": "Saved successfully"}
