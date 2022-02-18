import { Cart } from "@chec/commerce.js/types/cart";
import { SET_CART } from "Redux/Actions/actionConsts";
import { ActionTypes } from "Redux/actionTypes";

type defaultState = {
  cart: Cart;
};

const intialState: defaultState = {
  // @ts-ignore
  cart: {},
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

    default:
      return state;
  }
};

export default cartReducer;
