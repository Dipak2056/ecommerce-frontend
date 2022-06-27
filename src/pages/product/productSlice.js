import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
  selectedProduct: {},
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    //here we have state and action but we are destructring payload from action
    setProducts: (state, { payload }) => {
      state.products = payload;
    },
    setSelectedProduct: (state, { payload }) => {
      state.selectedProduct = payload;
    },
  },
});

const { reducer, actions } = productSlice;
export const { setProducts, setSelectedProduct } = actions;
export default reducer;
