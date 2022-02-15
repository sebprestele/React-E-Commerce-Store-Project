import { Product } from "@chec/commerce.js/types/product";
import {
  GET_PRODUCTS,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
} from "Redux/Actions/actionConsts";
import { ActionTypes } from "Redux/actionTypes";
//import { Product } from "types";

type DefaultState = {
  products: Product[];
  wishList: Product[];
};

const initalState: DefaultState = {
  products: [],
  wishList: [],
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

    default:
      return { ...state };
  }
};

export default productsReducer;
