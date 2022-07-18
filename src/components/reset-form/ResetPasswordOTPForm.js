import React, { useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { resetPassAction } from "../../pages/admin-profile/AdminProfileAction";
import "./resetPassForm.css";

export const ResetPasswordOTPForm = () => {
  //pull data from redux store
  const dispatch = useDispatch();
  const { passResetResponse } = useSelector((state) => state.admin);
  const { passResettingEmail } = useSelector((state) => state.admin);
  const [form, setForm] = useState();
  const [error, setError] = useState();
  const [disable, setDisable] = useState(true);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setError("");
    !disable && setDisable(true);
    setForm({
      ...form,
      [name]: value,
    });
    if (name === "confirmPassword") {
      !form.password && setError("New password must be provided");
      const { password } = form;
      password !== value && setError("Password donot match");
      password.length < 6 &&
        setError("Password must be longer than 6 characters");

      !/[a-z]/.test(password) && setError("Password must contain");
      !/[A-Z]/.test(password) && setError("Password must contain UpperCase");
      !/[0-9]/.test(password) && setError("Password must contain Number");

      !form.password && setError("New password must be provided.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    const { confirmPassword, ...rest } = form;
    if (confirmPassword !== rest.password) {
      return alert("Passwords donot match");
    }
    rest.email = passResettingEmail;
    dispatch(resetPassAction(rest));
    console.log(form);
  };
  const disableButton = () => {
    !error && setDisable(false);
  };

  return (
    <div>
      <Container>
        <div className="form-content mt-5 mb-5">
          <h1>Reset Password</h1>
          <hr />
          {passResetResponse.message && (
            <Alert
              variant={
                passResetResponse.status === "success" ? "success" : "danger"
              }
            >
              {passResetResponse.message}
            </Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>OTP</Form.Label>
              <Form.Control
                name="otp"
                onChange={handleOnChange}
                placeholder="Enter OTP"
                type="number"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                name="password"
                onChange={handleOnChange}
                type="password"
                placeholder="Enter password"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>ConfirmPassword</Form.Label>
              <Form.Control
                name="confirmPassword"
                onChange={handleOnChange}
                type="password"
                placeholder="Re-enter password"
                required
                onBlur={disableButton}
              />
              <Form.Text>
                Password must contain Uppercase, Lowercase, Number and at Least
                6 character long.
              </Form.Text>
              <div className="text-danger">{error}</div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Button type="submit" disabled={disable}>
                update password
              </Button>
            </Form.Group>
          </Form>
        </div>
      </Container>
    </div>
  );
};
