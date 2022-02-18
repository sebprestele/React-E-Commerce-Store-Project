import { SET_CHECKOUT_TOKEN } from "Redux/Actions/actionConsts";
import { ActionTypes } from "Redux/actionTypes";

const intialState = {
  checkoutToken: {},
};

const checkoutReducer = (state = intialState, action: ActionTypes) => {
  switch (action.type) {
    case SET_CHECKOUT_TOKEN:
      return {
        ...state,
        checkoutToken: action.payload,
      };

    default:
      return state;
  }
};

export default checkoutReducer;
