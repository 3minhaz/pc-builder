import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  buildPcComponents: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addMotherboard: (state, action) => {
      // if (state.buildPcComponents.length > 0) {
      const exist = state.buildPcComponents?.find(
        (elem) => elem.category === action.payload.category
      );
      if (!exist) {
        state.buildPcComponents.push(action.payload);
      } else {
        toast.error("Already added product");
      }
    },
    removeProduct: (state, action) => {
      state.buildPcComponents = state.buildPcComponents.filter(
        (product) => product._id.toString() !== action.payload._id.toString()
      );
    },
  },
});

export const { addMotherboard, removeProduct } = productSlice.actions;

export default productSlice.reducer;
