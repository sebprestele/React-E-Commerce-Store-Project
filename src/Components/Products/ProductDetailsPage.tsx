import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Button from "@mui/material/Button";

import { RootState } from "Redux/Reducers/rootReducer";
import { addToCart } from "Redux/Actions/cartActions";
import Navigation from "Components/Navigation/Navigation";
import Footer from "Components/Footer/Footer";
import "./product-details.css";

function ProductDetailsPage() {
  const dispatch = useDispatch();
  const { name } = useParams();
  const { products } = useSelector((state: RootState) => state.productsReducer);

  const singleProduct = products.filter(
    (product) => product.permalink === name
  );

  return (
    <div className="page-wrapper">
      <Navigation />
      <div className="single-product-wrapper">
        {singleProduct.map((product) => (
          <div className="single-product-container">
            <div className="single-product-image-carousel">
              <div className="single-product-images-container">
                <img src={product.image!.url} alt="" />
                <div>
                  <button>Prev</button>
                  <button>Next</button>
                </div>
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
