import { Link } from "react-router-dom";
import "./hero.css";

function Hero() {
  return (
    <div className="hero">
      <video loop autoPlay muted className="background-video">
        <source
          src="https://thefinarts.com/wp-content/uploads/2021/02/cropped.mp4 "
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="hero__content">
        <h1 className="home-main-headline">
          <span className="highlight">Painting a future </span>
          for sharks!
        </h1>
        <p>Get your unique piece of art and support shark conservation!</p>
        <Link to="shop" className="btn btn--primary">
          Check out our art
        </Link>
      </div>
      <img className="hero-image" src="images/3rd-Eye8-large.png" alt="" />
    </div>
  );
}

export default Hero;
