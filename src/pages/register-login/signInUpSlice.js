import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  response: {
    status: "",
    message: "",
  },
};
const signInUpslice = createSlice({
  name: "signInUp",
  initialState,
  reducers: {
    isPending: (state) => {
      state.isLoading = true;
    },
    responseResolved: (state, { payload }) => {
      state.isLoading = false;
      state.response = payload;
    },
  },
});

const { reducer, actions } = signInUpslice;

export const { isPending, responseResolved } = actions;
export default reducer;
