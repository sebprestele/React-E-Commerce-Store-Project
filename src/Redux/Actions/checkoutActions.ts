import { Dispatch } from "redux";

import commerce from "assets/lib/commerce";
import { SET_CHECKOUT_TOKEN } from "./actionConsts";
import { CheckoutToken } from "@chec/commerce.js/types/checkout-token";

export const getCheckOutToken = (response: CheckoutToken) => {
  return {
    type: SET_CHECKOUT_TOKEN,
    payload: response,
  };
};

export const initiateCheckout = () => {
  return (dispatch: Dispatch) =>
    commerce.checkout
      .generateTokenFrom("cart", commerce.cart.id() ?? "Something went wrong")
      .then((response) => dispatch(getCheckOutToken(response)));
};

/* const export newOrder = (incomingOrder) => {
  return {
    type: "SET_NEW_ORDER",
    payload: incomingOrder,
  };
}; */
