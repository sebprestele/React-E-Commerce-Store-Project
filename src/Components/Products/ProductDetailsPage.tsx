import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "Redux/Reducers/rootReducer";
import { addToCart } from "Redux/Actions/cartActions";

import Navigation from "Components/Navigation/Navigation";
import "./product-details.css";
import Footer from "Components/Footer/Footer";
import ImageBanner from "Components/FullWidthImage/ImageBanner";

import { Product } from "types";

function ProductDetailsPage() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { name } = useParams();
  const { products } = useSelector((state: RootState) => state.productsReducer);

  const singleProduct = products.filter(
    (product) => product.permalink === name
  );

  const productAssets = singleProduct.map((product: Product) => product.assets);

  const [index, setIndex] = useState(0);

  /*  const changeImage = () => {
    if (index > productAssets.length - 1) {
      index = 0;
    } else if (index < 0) {
      index = productAssets.length - 1;
    }
  }; */

  /*   const nextImage = () => {
    console.log("click next ", index);
    if (index < productAssets.length - 1) {
      setIndex((prevIndex) => prevIndex++);
    }
  };


  const prevImage = () => {
    console.log("click prev", index);
    if (index > 0) {
      setIndex((prevIndex) => prevIndex--);
    }
  }; */

  return (
    <>
      <Navigation />
      <p>{location.pathname}</p>

      <div className="single-product-wrapper">
        {singleProduct.map((product) => (
          <div className="single-product-container">
            <div className="single-product-image-carousel">
              <div className="single-product-images-container">
                <img src={product.image.url} alt="" />

                <div>
                  <button>Prev</button>
                  <button>Next</button>
                </div>
              </div>
            </div>
            <div className="single-product-details">
              <h1>{product.name}</h1>
              <p>Rating</p>
              <hr />
              <p>
                <b>Price: </b> from {product.price.formatted_with_symbol}
              </p>
              <p>{product.description.replace(/(<([^>]+)>)/gi, "")}</p>
              <p>Choose your size</p>
              <button onClick={() => dispatch(addToCart(product))}>
                Add to Cart
              </button>
            </div>

            <div>
              <h3>Product Description</h3>
            </div>
          </div>
        ))}
      </div>

      <ImageBanner />
      <Footer />
    </>
  );
}

export default ProductDetailsPage;
