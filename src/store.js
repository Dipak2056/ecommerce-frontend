import { configureStore } from "@reduxjs/toolkit";

import signInUpReducer from "./pages/register-login/signInUpSlice";
import systemReducer from "./system-state/systemSlice";
import adminReducer from "./pages/admin-profile/AdminProfileSlice";
import categoryReducer from "./pages/categories/categorySlice";
import productReducer from "./pages/product/productSlice";
import paymentMethodSlice from "./pages/payment-method/paymentMethodSlice";
import customerReducer from "./pages/customer/customerSlice";

const store = configureStore({
  reducer: {
    //reducer
    signInUp: signInUpReducer,
    system: systemReducer,
    admin: adminReducer,
    category: categoryReducer,
    products: productReducer,
    paymentMethods: paymentMethodSlice,
    customers: customerReducer,
  },
});

export default store;
