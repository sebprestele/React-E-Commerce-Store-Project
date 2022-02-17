import { Link } from "react-router-dom";

function Main() {
  return (
    <section className="main-content">
      <div className="main-image-container top">
        <img
          className="image-main"
          src="
        images/hammer.jpg"
          alt=""
        />
      </div>
      <div className="main-content-container top">
        <h2>Sharks look amazing everywhere!</h2>
        <p>They are not only a fascinating eye-catcher. </p>
        <p>
          Sharks play a fundamental role in creating a balance in marine
          ecosystems across all oceans.
        </p>
        <p>
          Unfortunately, these beautiful creatures are endangered by human
          activity – around 100 million sharks are killed yearly!{" "}
        </p>
        <p>
          Get your shark sculpture now, to make a statement for this facinating
          creature and to support shark conservation world wide!
        </p>
        <Link to="shop" className="btn btn--primary">
          Check out our art
        </Link>
      </div>
    </section>
  );
}

export default Main;
