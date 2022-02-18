import { useSelector, useDispatch } from "react-redux";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import { RootState } from "Redux/Reducers/rootReducer";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "Redux/Actions/cartActions";

function CartTableBody() {
  const { cart } = useSelector((state: RootState) => state.cartReducer);
  const dispatch = useDispatch();

  return (
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
  );
}

export default CartTableBody;
