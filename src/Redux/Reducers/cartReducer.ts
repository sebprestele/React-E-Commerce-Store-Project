import { Cart } from "@chec/commerce.js/types/cart";
import { REMOVE_FROM_CART, SET_CART } from "Redux/Actions/actionConsts";
import { ActionTypes } from "Redux/actionTypes";
//import { Cart } from "types";

type defaultState = {
  cart: Cart;
  checkoutToken: null | string;
};

const intialState: defaultState = {
  cart: {},
  checkoutToken: null,
};

const cartReducer = (
  state = intialState,
  action: ActionTypes
): defaultState => {
  switch (action.type) {
    case SET_CART:
      return {
        ...state,
        cart: action.payload,
      };

    case "SET_CHECKOUT_TOKEN":
      return {
        ...state,
        checkoutToken: action.payload,
      };

    /*   case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item !== action.payload),
      }; */
    default:
      return state;
  }
};

export default cartReducer;
