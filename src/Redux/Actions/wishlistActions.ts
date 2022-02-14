import { Product } from "types";
import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "./actionConsts";

export const addToWishList = (product: Product) => {
  return {
    type: ADD_TO_WISHLIST,
    payload: product,
  };
};

export const removeFromWishList = (product: Product) => {
  return {
    type: REMOVE_FROM_WISHLIST,
    payload: product,
  };
};
