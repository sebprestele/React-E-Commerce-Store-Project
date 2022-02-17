import {
  GET_PRODUCTS,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_CART,
  SET_CHECKOUT_TOKEN,
  GET_FIRSTNAME,
  GET_LASTNAME,
  GET_ADDRESS,
  GET_CITY,
  GET_EMAIL,
  GET_POSTCODE,
  GET_REGION,
  GET_COUNTRY,
  SORT_BY_PRICE,
  TOGGLE_PRICE_HANDLER,
  TOGGLE_SOLD_OUT_HANDLER,
  HIDE_SOLD_OUT,
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

type GetFirstNameAction = {
  type: typeof GET_FIRSTNAME;
  payload: string;
};

type GetLastNameAction = {
  type: typeof GET_LASTNAME;
  payload: string;
};

type GetEmailAction = {
  type: typeof GET_EMAIL;
  payload: string;
};

type GetAddressAction = {
  type: typeof GET_ADDRESS;
  payload: string;
};

type GetPostcodeAction = {
  type: typeof GET_POSTCODE;
  payload: string;
};

type GetCityAction = {
  type: typeof GET_CITY;
  payload: string;
};

type GetRegionAction = {
  type: typeof GET_REGION;
  payload: string;
};

type GetCountryAction = {
  type: typeof GET_COUNTRY;
  payload: string;
};

type SortByPriceAction = {
  type: typeof SORT_BY_PRICE;
  payload: Boolean;
};

type Toggle_Price_Handler = {
  type: typeof TOGGLE_PRICE_HANDLER;
};

type HideSoldOutAction = {
  type: typeof HIDE_SOLD_OUT;
  payload: Boolean;
};

type Toggle_Sold_Out_Handler = {
  type: typeof TOGGLE_SOLD_OUT_HANDLER;
};

export type ActionTypes =
  | GetProductsAction
  | setCartAction
  | SetCheckoutTokenAction
  | AddToCartAction
  | RemoveFromCartAction
  | AddToWishlistAction
  | RemoveFromWishListAction
  | GetFirstNameAction
  | GetLastNameAction
  | GetEmailAction
  | GetAddressAction
  | GetPostcodeAction
  | GetCityAction
  | GetRegionAction
  | GetCountryAction
  | SortByPriceAction
  | Toggle_Price_Handler
  | Toggle_Sold_Out_Handler
  | HideSoldOutAction;
