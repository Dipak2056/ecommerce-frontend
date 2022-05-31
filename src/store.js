import { configureStore } from "@reduxjs/toolkit";
import SignInUpReducer from "./pages/register-login/signInUpSlice";

const store = configureStore({
  reducer: {
    //reducer
    SignInUpReducer,
  },
});

export default store;
