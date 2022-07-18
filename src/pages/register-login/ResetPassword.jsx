import React from "react";
import { useSelector } from "react-redux";
import DefaultLayout from "../../components/pages/layouts/DefaultLayout";
import { ResetPassForm } from "../../components/reset-form/ResetPassForm";
import { ResetPasswordOTPForm } from "../../components/reset-form/ResetPasswordOTPForm";

const ResetPassword = () => {
  const { showForm } = useSelector((state) => state.admin);
  const form = {
    otp: <ResetPassForm />,
    password: <ResetPasswordOTPForm />,
  };
  return <DefaultLayout>{form[showForm]}</DefaultLayout>;
};

export default ResetPassword;
