import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import ProductSlice from "./ProductSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const reducer = combineReducers({
  cart: CartSlice,
  product: ProductSlice,
});
const persistedReducer = persistReducer(persistConfig, reducer);
const Store = configureStore({
  reducer: persistedReducer,
});
export default Store;
