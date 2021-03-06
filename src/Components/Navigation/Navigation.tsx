import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaShoppingCart, FaUserAlt, FaHeart } from "react-icons/fa";
import Badge from "@mui/material/Badge";

import { RootState } from "Redux/Reducers/rootReducer";
import { retrieveCart } from "Redux/Actions/cartActions";
import "./navigation.css";

const Navigation = () => {
  const { cart } = useSelector((state: RootState) => state.cartReducer);
  const { wishList } = useSelector((state: RootState) => state.productsReducer);
  const [stickyClass, setStickClass] = useState(false);
  const dispatch = useDispatch();
  const pathname = window.location.pathname;

  useEffect(() => {
    dispatch(retrieveCart());
  }, [dispatch]);

  useEffect(() => {
    window.onscroll = function () {
      window.scrollY > 120 ? setStickClass(true) : setStickClass(false);
    };
  }, []);

  return (
    <div
      className={
        pathname === "/" && !stickyClass
          ? "home"
          : pathname !== "/" && !stickyClass
          ? "navigation-container"
          : "fixed"
      }
    >
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
      <div className="navigation-icons-container">
        <Link to="/account">
          <FaUserAlt className="user-icon" />
        </Link>
        <Link to="/wishlist">
          <Badge badgeContent={wishList.length} color="primary">
            <FaHeart className="navigation-icon " />
          </Badge>
        </Link>
        <Link to="/cart">
          <Badge
            badgeContent={cart.line_items && cart.total_items}
            color="primary"
          >
            <FaShoppingCart className="navigation-icon" />
          </Badge>
        </Link>
      </div>
    </div>
  );
};
export default Navigation;
