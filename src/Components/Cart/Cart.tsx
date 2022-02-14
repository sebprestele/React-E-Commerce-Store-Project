import { useSelector, useDispatch } from "react-redux";
import { RiDeleteBin6Fill } from "react-icons/ri";

import { removeFromCart } from "Redux/Actions/cartActions";
import { RootState } from "Redux/Reducers/rootReducer";

import Footer from "Components/Footer/Footer";
import Navigation from "Components/Navigation/Navigation";

import "./cart.css";

const Cart = () => {
  const { cart } = useSelector((state: RootState) => state.cartReducer);

  const dispatch = useDispatch();

  console.log(cart);

  return (
    <>
      <Navigation />
      <h1>Cart</h1>
      <div className="cart-container">
        {cart.length ? (
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

            {cart.map((item) => (
              <tbody>
                <tr key={item.id}>
                  <td>
                    <img className="cart-image" src={item.image.url} alt="" />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price.formatted_with_symbol}</td>
                  <td>{cart.length}</td>
                  <td>€{item.price.raw * cart.length}</td>
                  <td>
                    <RiDeleteBin6Fill
                      onClick={() => dispatch(removeFromCart(item))}
                    />
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        ) : (
          "Cart is empty"
        )}
      </div>

      <Footer />
    </>
  );
};

export default Cart;
