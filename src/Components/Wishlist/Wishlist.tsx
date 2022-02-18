import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa";

import { fetchProducts } from "Redux/Actions/productActions";
import { removeFromWishList } from "Redux/Actions/wishlistActions";
import { addToCart } from "Redux/Actions/cartActions";
import { RootState } from "Redux/Reducers/rootReducer";
import Navigation from "Components/Navigation/Navigation";
import Footer from "Components/Footer/Footer";
import "../Shop/shop.css";

import "./wishlist.css";

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
    <div className="page-wrapper">
      <Navigation />
      <div className="wishlist">
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

                <div className="product-card-buttons">
                  <button
                    onClick={() => dispatch(addToCart(product.id, 1))}
                    className="btn--add-to-cart"
                  >
                    Add to Cart
                  </button>
                  <Link
                    to={`/products/${product.permalink}`}
                    className="btn--secondary"
                  >
                    More Details
                  </Link>
                </div>
              </div>
            ))}
      </div>
      <Footer />
    </div>
  );
}

export default WishList;
