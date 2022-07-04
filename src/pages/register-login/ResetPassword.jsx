import React, { useState } from "react";
import DefaultLayout from "../../components/pages/layouts/DefaultLayout";
import { ResetPassForm } from "../../components/reset-form/ResetPassForm";
import { ResetPasswordOTPForm } from "../../components/reset-form/ResetPasswordOTPForm";

const ResetPassword = () => {
  const [showForm, setShowForm] = useState("password"); // password;
  const form = {
    otp: <ResetPassForm />,
    password: <ResetPasswordOTPForm />,
  };
  return <DefaultLayout>{form[showForm]}</DefaultLayout>;
};

export default ResetPassword;
