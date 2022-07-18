import React from "react";
import AdminLayout from "../../components/pages/layouts/AdminLayout";
import { RegisterForm } from "../../components/register-form/RegisterForm";

const Registration = () => {
  return (
    <AdminLayout>
      <RegisterForm />
    </AdminLayout>
  );
};

export default Registration;
