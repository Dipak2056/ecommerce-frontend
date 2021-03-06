import { configureStore } from "@reduxjs/toolkit";

import signInUpReducer from "./pages/register-login/signInUpSlice";
import systemReducer from "./system-state/systemSlice";
import adminReducer from "./pages/admin-profile/AdminProfileSlice";
import categoryReducer from "./pages/categories/categorySlice";
import productReducer from "./pages/product/productSlice";
import paymentMethodSlice from "./pages/payment-method/paymentMethodSlice";
import customerReducer from "./pages/customer/customerSlice";
import reviewReducer from "./pages/productreview/productreview.slice";
import orderReducer from "./pages/orders/orderSlice";

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
    reviews: reviewReducer,
    orders: orderReducer,
  },
});

export default store;
