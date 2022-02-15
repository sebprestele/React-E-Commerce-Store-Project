import {
  GET_PRODUCTS,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_CART,
  SET_CHECKOUT_TOKEN,
} from "Redux/Actions/actionConsts";
import { Cart } from "@chec/commerce.js/types/cart";
import { Product } from "@chec/commerce.js/types/product";

//Fetch Products

type GetProductsAction = {
  type: typeof GET_PRODUCTS;
  payload: { products: Product[] };
};

//Cart Actions

type setCartAction = {
  type: typeof SET_CART;
  payload: Cart;
};

type AddToCartAction = {
  type: typeof ADD_TO_CART;
  payload: Product;
};

type RemoveFromCartAction = {
  type: typeof REMOVE_FROM_CART;
  payload: Product;
};

type SetCheckoutTokenAction = {
  type: typeof SET_CHECKOUT_TOKEN;
  payload: string;
};

//Wishlist Actions

type AddToWishlistAction = {
  type: typeof ADD_TO_WISHLIST;
  payload: Product;
};

type RemoveFromWishListAction = {
  type: typeof REMOVE_FROM_WISHLIST;
  payload: Product;
};

export type ActionTypes =
  | GetProductsAction
  | setCartAction
  | SetCheckoutTokenAction
  | AddToCartAction
  | RemoveFromCartAction
  | AddToWishlistAction
  | RemoveFromWishListAction;
