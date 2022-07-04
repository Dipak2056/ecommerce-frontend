import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: {},
  passResetResponse: {},
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
    },
  },
});

const { reducer, actions } = userSlice;
export const { setUser, setPassResetResponse } = actions;

export default reducer;
