import React from "react";
import "./App.css";
import RegistrationPage from "./pages/register-login/Registration";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/register-login/LoginPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { EmailVerification } from "./pages/register-login/EmailVerification";
import Dashboard from "./pages/dashboard/Dashboard";
import AdminProfile from "./pages/admin-profile/AdminProfile";
import Categories from "./pages/categories/Categories";
import Product from "./pages/product/Product";
import PaymentMethod from "./pages/payment-method/PaymentMethod";
import ResetPassword from "./pages/register-login/ResetPassword";
import PrivateRoute from "./components/Private-route/PrivateRoute";
import Setting from "./pages/setting/Setting";
import { Customers } from "./pages/customer/Customers";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* private routes  */}

          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin-profile"
            element={
              <PrivateRoute>
                <AdminProfile />
              </PrivateRoute>
            }
          />

          <Route
            path="/categories"
            element={
              <PrivateRoute>
                <Categories />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/customers"
            element={
              <PrivateRoute>
                <Customers />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/setting"
            element={
              <PrivateRoute>
                <Setting />
              </PrivateRoute>
            }
          ></Route>

          <Route
            path="/products"
            element={
              <PrivateRoute>
                <Product />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/product/new"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/product/edit/:_id"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          ></Route>

          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/forgot-password" element={<ResetPassword />}></Route>
          <Route path="/register" element={<RegistrationPage />}></Route>
          <Route
            path="/payments"
            element={
              <PrivateRoute>
                <PaymentMethod />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/verify-email"
            element={<EmailVerification />}
          ></Route>
          <Route path="*" element={<h1>404 page not found</h1>}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default App;
