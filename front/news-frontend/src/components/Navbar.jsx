import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const user = true; // remove this after adding real auth

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="logo">
          📰 SUMARIVE
        </Link>
      </div>

      <div className="nav-right">
        {user && (
          <>
            <Link to="/add-news" className="nav-link">
              ➕ Add News
            </Link>

            <Link to="/my-news" className="nav-link">
              📘 My News
            </Link>
          </>
        )}

        <button className="icon-btn">🔍</button>
        <button className="icon-btn">🔖</button>
        <button className="icon-btn">👤</button>
      </div>
    </nav>
  );
}
