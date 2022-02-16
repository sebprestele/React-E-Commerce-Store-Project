import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

import { fetchProducts } from "Redux/Actions/productActions";
import {
  addToWishList,
  removeFromWishList,
} from "Redux/Actions/wishlistActions";
import { addToCart } from "Redux/Actions/cartActions";
import { RootState } from "Redux/Reducers/rootReducer";

import "../Shop/shop.css";
import Navigation from "Components/Navigation/Navigation";
import Footer from "Components/Footer/Footer";

function WishList() {
  const dispatch = useDispatch();
  const { /* products, */ wishList } = useSelector(
    (state: RootState) => state.productsReducer
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  //const wishlistItem = wishList.map((product) => product.name);

  return (
    <>
      <Navigation />
      {!wishList.length
        ? "Your wishlist is empty. Add some products in the shop"
        : wishList.map((product) => (
            <div className="product-card" key={product.id}>
              <Link to={`/products/${product.permalink}`}>
                <img
                  className="product-card-image"
                  src={product.image?.url}
                  alt={product.name}
                />
              </Link>
              <h2>{product.name}</h2>
              <div className="product-card-price-container">
                <FaHeart
                  onClick={() => {
                    dispatch(removeFromWishList(product));
                  }}
                />

                <p className="product-card-price">
                  Price: from {product.price.formatted_with_symbol}
                </p>
              </div>

              <div className="product-card-icons">
                <button onClick={() => dispatch(addToCart(product.id, 1))}>
                  Add to Cart
                </button>
                <Link to={`/products/${product.permalink}`}>More Details</Link>
              </div>
            </div>
          ))}
      <Footer />
    </>
  );
}

export default WishList;
