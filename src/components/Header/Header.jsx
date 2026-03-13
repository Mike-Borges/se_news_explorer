import "./Header.css";

export default function Header({ onLoginClick }) {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__logo">
          <span>News Explorer</span>
        </div>
        <nav className="header__nav">
          <a className="header__link">Home</a>
        </nav>
        <button className="header__button" onClick={onLoginClick}>
          Sign In
        </button>
      </div>
    </header>
  );
}
