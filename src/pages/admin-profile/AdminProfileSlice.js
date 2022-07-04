import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: {},
  passResetResponse: {},
  passResettingEmail: "",
  showForm: "otp",
};
const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    setPassResetResponse: (state, { payload }) => {
      state.passResetResponse = payload;
      state.showForm = payload.status === "success" ? "password" : "otp";
    },
    setPassResettingEmail: (state, { payload }) => {
      state.passResettingEmail = payload;
    },
  },
});

const { reducer, actions } = userSlice;
export const { setUser, setPassResetResponse, setPassResettingEmail } = actions;

export default reducer;
