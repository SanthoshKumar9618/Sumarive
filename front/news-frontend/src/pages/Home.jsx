import { useEffect, useState } from "react";
import api from "../api/axios";
import NewsCard from "../components/NewsCard";
import "./Home.css";

export default function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    api.get("/news")
      .then((res) => {
        setNews(res.data.articles || []);
      })
      .catch(err => console.error("API ERROR:", err));
  }, []);

  if (news.length === 0) return <p>Loading...</p>;

  const mainNews = news[0];          // 1st news
  const smallNews = news.slice(1, 4); // next 3 news
  const otherNews = news.slice(4);    // remaining news

  return (
    <div className="home-container">

      {/* BIG MAIN NEWS */}
      <div className="main-news">
      <img src={mainNews.urlToImage} className="main-news-img" alt={mainNews.title} />
        <div className="main-news-content">
          <h1>{mainNews.title}</h1>
          <p>{mainNews.description}</p>
        </div>
      </div>

      {/* 3 SMALL NEWS */}
      <div className="small-news-row">
        {smallNews.map((n, i) => (
          <div className="small-card-wrapper" key={i}>
            <NewsCard news={n} />
          </div>
        ))}
      </div>

      {/* ALL OTHER NEWS BELOW */}
      <div className="news-grid">
        {otherNews.map((n, i) => (
          <NewsCard key={i} news={n} />
        ))}
      </div>

    </div>
  );
}
