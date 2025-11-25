import { useEffect, useState } from "react";
import api from "../api/axios";

export default function MyNews() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    api.get("/my-news").then((res) => setNews(res.data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl mb-4">My News</h1>
      {news.map((n) => (
        <div key={n.id} className="border p-4 mb-4">
          <h2>{n.title}</h2>
          <p>{n.content}</p>
        </div>
      ))}
    </div>
  );
}
