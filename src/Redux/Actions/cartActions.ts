import { Product } from "types";
import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionConsts";

export const addToCart = (product: Product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (item: Product) => {
  return {
    type: REMOVE_FROM_CART,
    payload: item,
  };
};
