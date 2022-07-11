import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import AdminLayout from "../../components/pages/layouts/AdminLayout";
import { CustomInput } from "../../components/custom-input/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  updateAdminProfileAction,
  updatePassAction,
} from "./AdminProfileAction";
const passInititalState = {
  currentPass: "",
  password: "",
  confirmPassword: "",
};
const AdminProfile = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({});
  const [passUpdate, setPassUpdate] = useState(passInititalState);
  const [error, setError] = useState("");
  const [disableBtn, setDisableBtn] = useState(true);

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

  const handleOnPasswordChange = (e) => {
    const { name, value } = e.target;
    (name === "password" || name === "confirmPassword") && setError("");
    !disableBtn && setDisableBtn(true);
    setPassUpdate({
      ...passUpdate,
      [name]: value,
    });
    if (name === "confirmPassword") {
      const { password } = passUpdate;
      password !== value && setError("password donot match");
      password.length < 6 &&
        setError("passwod must be longer than 6 character.");
      !/[a-z]/.test(password) && setError("password must contain lowercase");
      !/[A-Z]/.test(password) && setError("password must contain uppercase");
      !/[0-9]/.test(password) && setError("password must contain number");

      !passUpdate.password && setError("new password must be provided");
    }
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
  const handleOnPasswordSubmit = (e) => {
    e.preventDefault();
    const { currentPass, confirmPassword, password } = passUpdate;
    if (confirmPassword !== password) {
      return alert("passwords dont match");
    }
    const obj = {
      password,
      currentPass,
      email: user.email,
    };
    console.log(obj);

    dispatch(updatePassAction(obj));
  };
  const disableButton = () => {
    !error && setDisableBtn(false);
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
  const resetPassField = [
    {
      label: "Current Password",
      name: "currentPass",
      type: "password",
      value: passUpdate.currentPass,
      required: true,
    },
    {
      label: "New Password",
      name: "password",
      type: "password",
      value: passUpdate.password,
      required: true,
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      value: passUpdate.confirmPassword,
      required: true,
      onBlur: disableButton,
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
          <Form onSubmit={handleOnPasswordSubmit}>
            {resetPassField.map((item, i) => (
              <CustomInput
                key={i}
                {...item}
                onChange={handleOnPasswordChange}
              />
            ))}
            <Form.Text>
              Password must contain Uppercase, Lowercase, Number and at Least 6
              character long.
            </Form.Text>
            <div className="text-danger">{error}</div>
            <Button type="submit" disable={disableBtn}>
              update Password
            </Button>
          </Form>
        </div>
      </AdminLayout>
    </div>
  );
};

export default AdminProfile;
