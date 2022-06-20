import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    //here we have state and action but we are destructring payload from action
    setProducts: (state, { payload }) => {
      state.products = payload;
    },
  },
});

const { reducer, actions } = productSlice;
export const { setProducts } = actions;
export default reducer;
