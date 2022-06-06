import React from "react";
import "./App.css";
import RegistrationPage from "./pages/register-login/Registration";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/register-login/LoginPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<RegistrationPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="*" element={<h1>404 page not found</h1>}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default App;
