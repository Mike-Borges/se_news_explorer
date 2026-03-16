import { useLocation } from "react-router-dom";
import "./Header.css";
import Navigation from "../Navigation/Navigation";

export default function Header({ onLoginClick, onLogout, currentUser }) {
  const location = useLocation();
  const isSavedNews = location.pathname === "/saved-news";

  return (
    <header className={`header ${isSavedNews ? "header_dark" : ""}`}>
      <div className="header__inner">
        <div
          className={`header__logo ${isSavedNews ? "header__logo_dark" : ""}`}
        >
          <span>News Explorer</span>
        </div>
        <Navigation currentUser={currentUser} isSavedNews={isSavedNews} />
        <button
          className={`header__button ${isSavedNews ? "header__button_dark" : ""}`}
          onClick={currentUser ? onLogout : onLoginClick}
        >
          {currentUser ? currentUser.username : "Sign In"}
        </button>
      </div>
    </header>
  );
}
