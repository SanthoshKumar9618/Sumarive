import "./NewsCard.css";

export default function NewsCard({ news }) {
  return (
    <div className="card">
      
      {/* Image */}
      {news.urlToImage && (
        <img 
          src={news.urlToImage} 
          alt={news.title} 
          className="card-image"
        />
      )}

      {/* Content */}
      <div className="card-content">

        <span className="card-tag">
          {news.source?.name || "News"}
        </span>

        <h2 className="card-title">
          {news.title}
        </h2>

        <p className="card-description">
          {news.description?.slice(0, 100)}...
        </p>

        <a 
          href={news.url}
          target="_blank"
          className="card-link"
        >
          Read more →
        </a>
      </div>
    </div>
  );
}
