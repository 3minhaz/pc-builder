import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/api";
import productReducer from "./features/product/productSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
