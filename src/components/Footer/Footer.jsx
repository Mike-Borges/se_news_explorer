import "./Footer.css";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">© 2024 Supersite, Powered by News API</p>
      <div className="footer__links">
        <a className="footer__link" href="https://practicum.com/">
          Home
        </a>
        <a className="footer__link" href="https://hub.tripleten.com/u/1803040f">
          TripleTen
        </a>
        <a className="footer__link" href="https://github.com/Mike-Borges">
          <img src={github} alt="GitHub" className="footer__icon" />
        </a>
        <a
          className="footer__link"
          href="https://www.linkedin.com/in/michael-borges-689667288/"
        >
          <img src={linkedin} alt="LinkedIn" className="footer__icon" />
        </a>
      </div>
    </footer>
  );
}
