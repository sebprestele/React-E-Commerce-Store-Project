import { REMOVE_FROM_CART, SET_CART } from "Redux/Actions/actionConsts";
import { ActionTypes } from "Redux/actionTypes";

const intialState = {
  cart: [],
};

const cartReducer = (state = intialState, action: ActionTypes) => {
  switch (action.type) {
    case SET_CART:
      return {
        ...state,
        cart: action.payload,
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
