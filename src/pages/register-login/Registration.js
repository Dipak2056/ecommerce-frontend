import React from "react";
import DefaultLayout from "../../components/pages/layouts/DefaultLayout";
import { RegisterForm } from "../../components/register-form/RegisterForm";

const Registration = () => {
  return (
    <DefaultLayout>
      <RegisterForm />
    </DefaultLayout>
  );
};

export default Registration;
