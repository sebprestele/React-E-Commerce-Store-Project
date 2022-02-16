//import { Cart } from "@chec/commerce.js/types/cart";
import { SET_CHECKOUT_TOKEN } from "Redux/Actions/actionConsts";
import { ActionTypes } from "Redux/actionTypes";

type defaultState = {
  checkoutToken: null | string;
};

const intialState: defaultState = {
  checkoutToken: null,
};

const checkoutReducer = (
  state = intialState,
  action: ActionTypes
): defaultState => {
  switch (action.type) {
    case SET_CHECKOUT_TOKEN:
      return {
        ...state,
        checkoutToken: action.payload,
      };

    default:
      return state;
  }
};

export default checkoutReducer;
