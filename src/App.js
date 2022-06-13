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

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* private routes  */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin-profile" element={<AdminProfile />} />
          <Route path="/categories" element={<Categories />}></Route>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegistrationPage />}></Route>
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
