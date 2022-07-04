import React, { useEffect, useRef } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { requestPassResetOTP } from "../../pages/admin-profile/AdminProfileAction";
import { postLoginAction } from "../../pages/register-login/signInUpAction";
import "./resetPassForm.css";

export const ResetPassForm = () => {
  //pull data from redux store
  const dispatch = useDispatch();
  const { passResetResponse } = useSelector((state) => state.admin);

  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    console.log(email);
    dispatch(requestPassResetOTP({ email }));
  };
  return (
    <div>
      <Container>
        <div className="form-content mt-5 mb-5">
          <h1>Request Your password change</h1>
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
              <Form.Label>Email</Form.Label>
              <Form.Control
                ref={emailRef}
                name="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Button type="submit">Request OTP</Button>
            </Form.Group>
          </Form>
        </div>
      </Container>
    </div>
  );
};
