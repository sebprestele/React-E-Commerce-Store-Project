import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import {
  removeFromCart,
  retrieveCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from "Redux/Actions/cartActions";
import { RootState } from "Redux/Reducers/rootReducer";

import Footer from "Components/Footer/Footer";
import Navigation from "Components/Navigation/Navigation";

import "./cart.css";

function Cart() {
  const { cart } = useSelector((state: RootState) => state.cartReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveCart());
  }, [dispatch]);

  console.log(cart);

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

            <tbody>
              {cart.line_items.map((item) => (
                <tr key={item.id}>
                  <td>
                    {item.image && (
                      <img className="cart-image" src={item.image.url} alt="" />
                    )}
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price.formatted_with_symbol}</td>
                  <td>
                    <div className="cart-item-quantity">
                      <span>
                        <IoIosArrowUp
                          className="arrow"
                          onClick={() =>
                            dispatch(
                              increaseQuantity(item.id, {
                                quantity: item.quantity + 1,
                              })
                            )
                          }
                        />
                      </span>
                      {item.quantity}
                      <span>
                        <IoIosArrowDown
                          className="arrow"
                          onClick={() =>
                            dispatch(
                              decreaseQuantity(item.id, {
                                quantity: item.quantity - 1,
                              })
                            )
                          }
                        />
                      </span>
                    </div>
                  </td>
                  <td>€{item.price.raw * item.quantity}</td>
                  <td>
                    <RiDeleteBin6Fill
                      className="delete-btn"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    />
                  </td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <b>Total</b>
                </td>
                <td>
                  <b>{cart.subtotal.formatted_with_symbol}</b>
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          "Cart is empty"
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
