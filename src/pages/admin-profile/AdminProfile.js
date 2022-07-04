import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import AdminLayout from "../../components/pages/layouts/AdminLayout";
import { CustomInput } from "../../components/custom-input/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { updateAdminProfileAction } from "./AdminProfileAction";

const AdminProfile = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({});
  const { user } = useSelector((state) => state.admin);

  useEffect(() => {
    setForm(user);
  }, [user]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    console.log(form);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const {
      createdAt,
      updatedAt,
      emailValidationCode,
      __v,
      status,
      ...rest
    } = form;

    console.log(rest, "to do submit");
    dispatch(updateAdminProfileAction(rest));
  };
  const inputField = [
    {
      label: "First Name",
      name: "fName",
      type: "text",
      value: form.fName,
      required: true,
    },
    {
      label: "Last Name",
      name: "lName",
      type: "text",
      value: form.lName,
      required: true,
    },
    {
      label: "Email",
      name: "email",
      type: "text",
      value: form.email,
      required: true,
      disabled: true,
    },
    {
      label: "Phone",
      name: "phone",
      type: "text",
      value: form.phone,
    },
    {
      label: "Address",
      name: "address",
      type: "text",
      value: form.address,
    },
    {
      label: "DOB",
      name: "dob",
      type: "date",
      value: form.dob ? form.dob.substr(0, 10) : undefined,
    },
    {
      label: "Current Password",
      name: "password",
      type: "password",
      required: true,
    },
  ];
  return (
    <div>
      <AdminLayout>
        <div className="update-info mt-3">
          <h3>Your Profile</h3>
          <Form onSubmit={handleOnSubmit}>
            {inputField.map((item, i) => (
              <CustomInput key={i} {...item} onChange={handleOnChange} />
            ))}
            <Button type="submit">update Profile</Button>
          </Form>
        </div>
        <hr />
        <div className="update-password">
          <h3>password update</h3>
        </div>
      </AdminLayout>
    </div>
  );
};

export default AdminProfile;
