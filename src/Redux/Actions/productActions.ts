import { Dispatch } from "redux";
import commerce from "assets/lib/commerce";

import { ActionTypes } from "Redux/actionTypes";
import {
  GET_PRODUCTS,
  HIDE_SOLD_OUT,
  SORT_BY_PRICE,
  TOGGLE_PRICE_HANDLER,
  TOGGLE_SOLD_OUT_HANDLER,
} from "./actionConsts";
import { Product } from "@chec/commerce.js/types/product";

export const getProducts = (products: Product[]): ActionTypes => {
  return {
    type: GET_PRODUCTS,
    payload: { products },
  };
};

export const fetchProducts = () => {
  return (dispatch: Dispatch) =>
    commerce.products
      .list()
      .then((products) => {
        dispatch(getProducts(products.data));
      })
      .catch((error) => {
        console.log("There was an error fetching the products", error);
      });
};

export const sortByPrice = (isToggled: Boolean) => {
  return {
    type: SORT_BY_PRICE,
    payload: isToggled,
  };
};

export const togglePriceHandler = () => {
  return {
    type: TOGGLE_PRICE_HANDLER,
  };
};

export const hideSoldOut = (isSoldOut: Boolean) => {
  return {
    type: HIDE_SOLD_OUT,
    payload: isSoldOut,
  };
};

export const toggleSoldOutHandler = () => {
  return {
    type: TOGGLE_SOLD_OUT_HANDLER,
  };
};
