import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useSelector((state) => state.admin);
  return user._id ? children : <Navigate to="/" />;
};

export default PrivateRoute;