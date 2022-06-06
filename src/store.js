import { configureStore } from "@reduxjs/toolkit";
import signInUpReducer from "./pages/register-login/signInUpSlice";

const store = configureStore({
  reducer: {
    //reducer
    signInUp: signInUpReducer,
  },
});

export default store;
