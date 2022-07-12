import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginForm } from "../../components/login-form/LoginForm";
import DefaultLayout from "../../components/pages/layouts/DefaultLayout";
import { autoAdminLogin } from "./signInUpAction";

const LoginPage = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.admin);
  useEffect(() => {
    !user._id && dispatch(autoAdminLogin());
  }, [user._id]);

  return (
    <DefaultLayout>
      <LoginForm />
    </DefaultLayout>
  );
};

export default LoginPage;
