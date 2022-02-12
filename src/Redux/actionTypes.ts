import { Product } from "types";
import { GET_PRODUCTS } from "Redux/Actions/actionConsts";

//Fetch Products

type GetProductsAction = {
  type: typeof GET_PRODUCTS;
  payload: { products: Product[] };
};

export type ActionTypes = GetProductsAction;
