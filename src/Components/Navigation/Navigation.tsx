import { Link } from "react-router-dom";
import "./navigation.css";

const Navigation = () => {
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
        <Link className="nav-item" to="/shop">
          Shop
        </Link>
        <Link className="nav-item" to="/about">
          About
        </Link>
        <Link className="nav-item" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
};
export default Navigation;
