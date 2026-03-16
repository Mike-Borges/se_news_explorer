import { Link } from "react-router-dom";
import "./Navigation.css";

export default function Navigation({ currentUser, isSavedNews }) {
  return (
    <nav className="navigation">
      <Link
        className={`navigation__link ${isSavedNews ? "navigation__link_dark" : ""}`}
        to="/"
      >
        Home
      </Link>
      {currentUser && (
        <Link
          className={`navigation__link ${isSavedNews ? "navigation__link_dark" : ""}`}
          to="/saved-news"
        >
          Saved Articles
        </Link>
      )}
    </nav>
  );
}
