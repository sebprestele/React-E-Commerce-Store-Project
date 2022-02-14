import { ADD_TO_CART, REMOVE_FROM_CART } from "Redux/Actions/actionConsts";
import { ActionTypes } from "Redux/actionTypes";
import { Product } from "types";

type DefaultState = {
  cart: Product[];
};

const intialState: DefaultState = {
  cart: [],
};

const cartReducer = (
  state = intialState,
  action: ActionTypes
): DefaultState => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item !== action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
