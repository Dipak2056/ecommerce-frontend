import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  paymentMethods: [],
  selectedPaymentMethod: {},
};

const paymentMethodSlice = createSlice({
  name: "paymentMethod",
  initialState,
  reducers: {
    setPaymentMethods: (state, { payload = [] }) => {
      state.paymentMethods = payload;
    },
    setSelectedSelectedPaymentMethods: (state, { payload = {} }) => {
      state.paymentMethods = payload;
    },
  },
});
const { reducer, actions } = paymentMethodSlice;
export const { setPaymentMethods, setSelectedSelectedPaymentMethods } = actions;
export default reducer;
