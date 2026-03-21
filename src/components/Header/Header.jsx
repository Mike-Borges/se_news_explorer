import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import logoutWhite from "../../assets/logout_light.svg";
import logoutDark from "../../assets/logout_dark.svg";

export default function Header({ onLoginClick, onLogout, currentUser }) {
  const location = useLocation();
  const isSavedNews = location.pathname === "/saved-news";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          className={`header__button ${isSavedNews ? "header__button_dark" : ""} ${currentUser ? "header__button_loggedin" : "header__button_loggedout"}`}
          onClick={currentUser ? onLogout : onLoginClick}
        >
          {currentUser ? currentUser.username : "Sign In"}
          {currentUser && (
            <img
              src={isSavedNews ? logoutDark : logoutWhite}
              alt="logout"
              className="header__logout-icon"
            />
          )}
        </button>

        <button
          className={`header__menu-btn ${isSavedNews ? "header__menu-btn_dark" : ""}`}
          onClick={() => setIsMenuOpen(true)}
        >
          <span className="header__menu-icon"></span>
          <span className="header__menu-icon"></span>
        </button>
      </div>

      {isMenuOpen && (
        <div className="header__overlay" onClick={() => setIsMenuOpen(false)} />
      )}

      <div
        className={`header__mobile-menu ${isMenuOpen ? "header__mobile-menu_open" : ""}`}
      >
        <div className="header__mobile-top">
          <span className="header__mobile-logo">NewsExplorer</span>
          <button
            className="header__menu-close"
            onClick={() => setIsMenuOpen(false)}
          >
            ✕
          </button>
        </div>
        <nav className="header__mobile-nav">
          <Link to="/" className="header__mobile-link">
            Home
          </Link>
          {currentUser && (
            <Link to="/saved-news" className="header__mobile-link">
              Saved Articles
            </Link>
          )}
          <button
            className="header__mobile-signin"
            onClick={currentUser ? onLogout : onLoginClick}
          >
            {currentUser ? currentUser.username : "Sign In"}
          </button>
        </nav>
      </div>
    </header>
  );
}
