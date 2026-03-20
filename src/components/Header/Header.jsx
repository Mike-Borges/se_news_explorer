import { useLocation } from "react-router-dom";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import logoutWhite from "../../assets/logout_light.svg";
import logoutDark from "../../assets/logout_dark.svg";

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
      </div>
    </header>
  );
}
