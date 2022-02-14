import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import { removeFromCart, retrieveCart } from "Redux/Actions/cartActions";
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
    <>
      <Navigation />
      <h1>Cart</h1>
      <div className="cart-container">
        {cart.id ? (
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
                    <img className="cart-image" src={item.image.url} alt="" />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price.formatted_with_symbol}</td>
                  <td>
                    <div className="cart-item-quantity">
                      <span>
                        <IoIosArrowUp
                          onClick={() => dispatch(increaseQuantity(item.id))}
                        />
                      </span>
                      {item.quantity}{" "}
                      <span>
                        <IoIosArrowDown
                          onClick={() => dispatch(decreaseQuantity(item.id))}
                        />
                      </span>
                    </div>
                  </td>
                  <td>€{item.price.raw * item.quantity}</td>
                  <td>
                    <RiDeleteBin6Fill
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
                <td>Total</td>
                <td>{cart.subtotal.formatted_with_symbol}</td>
              </tr>
            </tbody>
          </table>
        ) : (
          "Cart is empty"
        )}
      </div>

      <Footer />
    </>
  );
}

export default Cart;
