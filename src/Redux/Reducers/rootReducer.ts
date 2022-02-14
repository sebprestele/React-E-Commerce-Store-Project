import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import productsReducer from "./productsReducer";
export const rootReducer = combineReducers({ productsReducer, cartReducer });

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
