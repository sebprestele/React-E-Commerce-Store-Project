import { Dispatch } from "redux";
import commerce from "assets/lib/commerce";
import Commerce from "@chec/commerce.js";

import { ActionTypes } from "Redux/actionTypes";
import { Product } from "types";
import { GET_PRODUCTS } from "./actionConsts";

export const getProducts = (products: any): ActionTypes => {
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
