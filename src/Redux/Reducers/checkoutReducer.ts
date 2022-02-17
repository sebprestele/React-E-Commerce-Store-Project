import { CheckoutToken } from "@chec/commerce.js/types/checkout-token";
import { SET_CHECKOUT_TOKEN } from "Redux/Actions/actionConsts";
import { ActionTypes } from "Redux/actionTypes";

type defaultState = {
  checkoutToken: CheckoutToken;
};

const intialState: defaultState = {
  checkoutToken: {},
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
