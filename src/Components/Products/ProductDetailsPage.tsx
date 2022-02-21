import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { GrNext, GrPrevious } from "react-icons/gr";

import Button from "@mui/material/Button";

import { RootState } from "Redux/Reducers/rootReducer";
import { addToCart } from "Redux/Actions/cartActions";
import Navigation from "Components/Navigation/Navigation";
import Footer from "Components/Footer/Footer";
import "./product-details.css";
import { useState } from "react";

function ProductDetailsPage() {
  const { products } = useSelector((state: RootState) => state.productsReducer);
  const dispatch = useDispatch();
  const { name } = useParams();
  const [imageIndex, setImageIndex] = useState(0);

  const singleProduct = products.filter(
    (product) => product.permalink === name
  );

  const images = singleProduct.map((product) => product.assets);

  const nextImage = () => {
    if (imageIndex <= images.length) {
      setImageIndex((prevImageIndex) => prevImageIndex + 1);
    }
    if (imageIndex > images.length) {
      setImageIndex(0);
    }
  };

  const prevImage = () => {
    if (imageIndex > 0) {
      setImageIndex((prevImageIndex) => prevImageIndex - 1);
    }
    if (imageIndex === 0) {
      setImageIndex(images.length);
    }
  };

  return (
    <div className="page-wrapper">
      <Navigation />
      <div className="single-product-wrapper">
        {singleProduct.map((product) => (
          <div className="single-product-container" key={product.id}>
            <div className="single-product-image-container">
              <div className="single-product-image-carousel">
                <button className="image-slider-btn" onClick={prevImage}>
                  <GrPrevious />
                </button>
                <div className="single-product-main-image">
                  <img src={product.assets[imageIndex].url} alt="" />
                </div>
                <button className="image-slider-btn" onClick={nextImage}>
                  <GrNext />
                </button>
              </div>
              <div className="product-image-thumbnail-container">
                {product.assets.map((image) => (
                  <img
                    src={image.url}
                    className={
                      image.url === product.assets[imageIndex].url
                        ? "product-image-thumbnail active"
                        : "product-image-thumbnail"
                    }
                    alt=""
                  />
                ))}
              </div>
            </div>
            <div className="single-product-details">
              <h1>{product.name}</h1>
              <p className="rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </p>
              <hr />
              <p>
                <b>Price: </b> from {product.price.formatted_with_symbol}
              </p>
              {product.inventory.managed && (
                <p>In stock: {product.inventory.available}</p>
              )}
              <p>{product.description.replace(/(<([^>]+)>)/gi, "")}</p>
              {!product.conditionals.is_sold_out ? (
                <Button
                  onClick={() => dispatch(addToCart(product.id, 1))}
                  variant="contained"
                >
                  Add to Cart
                </Button>
              ) : (
                <button disabled className="btn--disabled">
                  out of stock
                </button>
              )}
            </div>
          </div>
        ))}

        <section className="product-details-detailed-information">
          <h3>Product Description</h3>

          {singleProduct.map((product) => (
            <p className="product-details-detailed-description">
              {product.description.replace(/(<([^>]+)>)/gi, "")}
            </p>
          ))}
        </section>

        <section>
          <h3>Related products area -- to be done </h3>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetailsPage;
