import { Dispatch } from "redux";

import commerce from "assets/lib/commerce";
import { SET_CART } from "./actionConsts";

import { Cart } from "@chec/commerce.js/types/cart";

export const setCart = (cart: Cart) => {
  return {
    type: SET_CART,
    payload: cart,
  };
};

export const retrieveCart = () => {
  return (dispatch: Dispatch) =>
    commerce.cart.retrieve().then((cart) => dispatch(setCart(cart)));
};

export const addToCart = (productId: string, quantity: number) => {
  return (dispatch: Dispatch) =>
    commerce.cart
      .add(productId, quantity)
      .then((response) => dispatch(setCart(response.cart)));
};

export const removeFromCart = (lineItemId: string) => {
  return (dispatch: Dispatch) =>
    commerce.cart
      .remove(lineItemId)
      .then((response) => dispatch(setCart(response.cart)));
};

export const increaseQuantity = (
  lineItemId: string,
  { quantity: newQuantity }: { quantity: number }
) => {
  return (dispatch: Dispatch) =>
    commerce.cart
      .update(lineItemId, { quantity: newQuantity })
      .then((response) => dispatch(setCart(response.cart)));
};

export const decreaseQuantity = (
  lineItemId: string,
  { quantity: newQuantity }: { quantity: number }
) => {
  return (dispatch: Dispatch) =>
    commerce.cart
      .update(lineItemId, { quantity: newQuantity })
      .then((response) => dispatch(setCart(response.cart)));
};

export const clearCart = () => {
  return (dispatch: Dispatch) =>
    commerce.cart.empty().then((response) => dispatch(setCart(response.cart)));
};

export const getCheckOutToken = (response) => {
  return {
    type: "SET_CHECKOUT_TOKEN",
    payload: response,
  };
};

export const initiateCheckout = () => {
  return (dispatch: Dispatch) =>
    commerce.checkout
      .generateTokenFrom("cart", commerce.cart.id())
      .then((response) => dispatch(getCheckOutToken(response.id)));
};
