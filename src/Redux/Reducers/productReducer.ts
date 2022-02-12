import { GET_PRODUCTS } from "Redux/Actions/actionConsts";
import { ActionTypes } from "Redux/actionTypes";
import { Product } from "types";

type DefaultState = {
  products: Product[];
};

const initalState: DefaultState = {
  products: [],
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
    default:
      return { ...state };
  }
};

export default productsReducer;
