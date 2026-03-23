import { NavLink } from "react-router-dom";
import "./Navigation.css";

export default function Navigation({ currentUser, isSavedNews }) {
  return (
    <nav className="navigation">
      <NavLink
        className={({ isActive }) =>
          `navigation__link ${isActive ? "navigation__link_active" : ""} ${isSavedNews ? "navigation__link_dark" : ""}`
        }
        to="/"
      >
        Home
      </NavLink>
      {currentUser && (
        <NavLink
          className={({ isActive }) =>
            `navigation__link ${isActive ? "navigation__link_active" : ""} ${isSavedNews ? "navigation__link_dark" : ""}`
          }
          to="/saved-news"
        >
          Saved Articles
        </NavLink>
      )}
    </nav>
  );
}
