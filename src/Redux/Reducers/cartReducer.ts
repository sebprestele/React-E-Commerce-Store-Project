const intialState = {
  cart: [],
};

const cartReducer = (state = intialState, action: any) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
