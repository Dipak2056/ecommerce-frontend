import { configureStore } from "@reduxjs/toolkit";

import signInUpReducer from "./pages/register-login/signInUpSlice";
import systemReducer from "./system-state/systemSlice";

const store = configureStore({
  reducer: {
    //reducer
    signInUp: signInUpReducer,
    system: systemReducer,
  },
});

export default store;
