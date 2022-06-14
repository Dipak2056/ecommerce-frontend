import { configureStore } from "@reduxjs/toolkit";

import signInUpReducer from "./pages/register-login/signInUpSlice";
import systemReducer from "./system-state/systemSlice";
import adminReducer from "./pages/admin-profile/AdminProfileSlice";
import categoryReducer from "./pages/categories/categorySlice";

const store = configureStore({
  reducer: {
    //reducer
    signInUp: signInUpReducer,
    system: systemReducer,
    admin: adminReducer,
    category: categoryReducer,
  },
});

export default store;
