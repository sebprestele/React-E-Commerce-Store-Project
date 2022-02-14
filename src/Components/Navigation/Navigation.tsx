import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart, FaUserAlt, FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";

import { RootState } from "Redux/Reducers/rootReducer";

import "./navigation.css";

const Navigation = () => {
  const { cart } = useSelector((state: RootState) => state.cartReducer);
  const { wishList } = useSelector((state: RootState) => state.productsReducer);

  return (
    <div className="navigation-container">
      <img
        className="logo"
        src="https://thefinarts.com/wp-content/uploads/2021/02/Logo-website-2020-cropped.svg"
        alt="Logo"
      />
      <div className="navigation-items">
        <Link className="nav-item" to="/">
          Home
        </Link>
        <Link className="nav-item" to="/about">
          About
        </Link>
        <Link className="nav-item" to="/contact">
          Contact
        </Link>
        <Link className="nav-item shop" to="/shop">
          Shop
        </Link>
      </div>
      <div className="navigation-icons">
        <Link to="/account">
          <FaUserAlt className="user-icon" />
        </Link>
        <Link to="/wishlist">
          <FaHeart />
          <span className="icon-count">
            {wishList.length > 0 && wishList.length}
          </span>
        </Link>

        <Link to="/cart">
          <FaShoppingCart className="cart-icon" />
          <span className="icon-count">
            {cart.total_items > 0 && cart.total_items}
          </span>
        </Link>
      </div>
    </div>
  );
};
export default Navigation;
