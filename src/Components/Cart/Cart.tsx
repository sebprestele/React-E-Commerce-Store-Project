import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { retrieveCart, clearCart } from "Redux/Actions/cartActions";
import { RootState } from "Redux/Reducers/rootReducer";
import Footer from "Components/Footer/Footer";
import Navigation from "Components/Navigation/Navigation";
import "./cart.css";
import { Button } from "@mui/material";
import CartTableBody from "./CartTableBody";

function Cart() {
  const { cart } = useSelector((state: RootState) => state.cartReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(retrieveCart());
  }, [dispatch]);

  return (
    <div className="page-wrapper">
      <Navigation />
      <div className="cart-container">
        <h1>Your shopping cart</h1>
        {cart.line_items.length ? (
          <table className="cart-table">
            <thead>
              <tr>
                <th></th>
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <CartTableBody />
          </table>
        ) : (
          <>
            <p>Your cart is empty</p>
            <Button variant="contained" onClick={() => navigate("/shop")}>
              Add some products
            </Button>
          </>
        )}
        {cart.line_items.length > 0 && (
          <div className="cart-button-container">
            <button className="btn" onClick={() => dispatch(clearCart())}>
              Clear Cart
            </button>
            <Link to="/checkout" className="btn btn--primary">
              Checkout
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
