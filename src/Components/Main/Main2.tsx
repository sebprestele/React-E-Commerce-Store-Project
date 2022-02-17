import { Link } from "react-router-dom";

function Main2() {
  return (
    <section className="main-content">
      <div className="main-content-container">
        <h2>Meet the Big Boy!</h2>
        <p>
          The pride in our repertoire – the big boys, our 150cm shark
          sculptures.{" "}
        </p>

        <p>
          With this unique piece of art, you will make a statement for your love
          of sharks and the urgency to protect them.
        </p>
        <p>Contact us for Your custom painted design!</p>
        <Link to="shop" className="btn btn--primary">
          Order Now!
        </Link>
      </div>
      <div className="main-image-container">
        <img className="image-main" src="images/shark-gallery.jpeg" alt="" />
      </div>
    </section>
  );
}

export default Main2;
