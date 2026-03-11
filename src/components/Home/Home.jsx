import "./Home.css";
import homePhoto from "../../assets/home_photo.jpg";

export default function Home() {
  return (
    <div className="home">
      <section className="home__hero">
        <h1 className="home__hero-title">Welcome to the Home Page!</h1>
        <p className="home__hero-description">
          This is the main landing page of our application.
        </p>
        <form action="" className="home__search">
          <input type="text" className="home__search-input" />
          <button className="home__search-btn">Search</button>
        </form>
      </section>
      <section className="home__content">
        <img
          src={homePhoto}
          alt="Photo of Michael Borges"
          className="home__content-image"
        />
        <div className="home__content-info">
          <h2 className="home__content-title">About the author </h2>
          <p className="home__content-description">
            Hi, I'm Michael Borges, a full-stack developer currently completing
            the Software Engineering program at TripleTen. I build responsive,
            user-friendly web applications using React, Node.js, Express, and
            MongoDB. Through TripleTen I've developed hands-on experience with
            REST APIs, JWT authentication, deployment on Google Cloud, and
            modern JavaScript best practices. Whether you need a sleek frontend
            or a robust backend, I'm here to help bring your ideas to life.
          </p>
        </div>
      </section>
    </div>
  );
}
