import { Product } from "@chec/commerce.js/types/product";
import {
  GET_PRODUCTS,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  SORT_BY_PRICE,
  TOGGLE_PRICE_HANDLER,
  TOGGLE_SOLD_OUT_HANDLER,
  HIDE_SOLD_OUT,
  PRODUCTS_LOADING,
  PRODUCTS_LOADED,
} from "Redux/Actions/actionConsts";
import { ActionTypes } from "Redux/actionTypes";

type DefaultState = {
  products: Product[];
  filteredProducts: Product[];
  wishList: Product[];
  togglePrice: Boolean;
  toggleSoldOut: Boolean;
  isLoading: Boolean;
};

const initalState: DefaultState = {
  products: [],
  filteredProducts: [],
  wishList: [],
  togglePrice: false,
  toggleSoldOut: false,
  isLoading: false,
};

const productsReducer = (
  state = initalState,
  action: ActionTypes
): DefaultState => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload.products,
        filteredProducts: action.payload.products,
      };
    case ADD_TO_WISHLIST:
      const wishlistItem = state.wishList.map((product) => product.name);
      return {
        ...state,
        wishList: wishlistItem.includes(action.payload.name)
          ? state.wishList
          : [...state.wishList, action.payload],
      };
    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishList: state.wishList.filter((item) => item !== action.payload),
      };
    case SORT_BY_PRICE:
      return {
        ...state,
        filteredProducts: state.togglePrice
          ? [...state.products].sort((a, b) => a.price.raw - b.price.raw)
          : [...state.products].sort((a, b) => b.price.raw - a.price.raw),
      };
    case TOGGLE_PRICE_HANDLER:
      return {
        ...state,
        togglePrice: !state.togglePrice,
      };
    case HIDE_SOLD_OUT:
      return {
        ...state,
        filteredProducts: state.toggleSoldOut
          ? state.products.filter(
              (product) => product.conditionals.is_sold_out === false
            )
          : state.products,
      };

    case TOGGLE_SOLD_OUT_HANDLER:
      return {
        ...state,
        toggleSoldOut: !state.toggleSoldOut,
      };

    case PRODUCTS_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case PRODUCTS_LOADED:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return { ...state };
  }
};

export default productsReducer;
