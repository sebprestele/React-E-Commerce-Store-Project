import { Dispatch } from "redux";

import commerce from "assets/lib/commerce";
import { SET_CHECKOUT_TOKEN } from "./actionConsts";

export const getCheckOutToken = (response: string) => {
  return {
    type: SET_CHECKOUT_TOKEN,
    payload: response,
  };
};

export const initiateCheckout = () => {
  return (dispatch: Dispatch) =>
    commerce.checkout
      .generateTokenFrom("cart", commerce.cart.id())
      .then((response) => dispatch(getCheckOutToken(response.id)));
};
