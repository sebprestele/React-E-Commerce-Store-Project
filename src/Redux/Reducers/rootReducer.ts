import { combineReducers } from "redux";

import cartReducer from "./cartReducer";
import productsReducer from "./productsReducer";
import userDataReducer from "./userDataReducer";
import checkoutReducer from "./checkoutReducer";

export const rootReducer = combineReducers({
  productsReducer,
  cartReducer,
  userDataReducer,
  checkoutReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
