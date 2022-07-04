import React, { useEffect, useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postLoginAction } from "../../pages/register-login/signInUpAction";
import "./resetPassForm.css";

export const ResetPassForm = () => {
  //pull data from redux store

  const emailRef = useRef();

  useEffect(() => {}, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    console.log(email);
  };
  return (
    <div>
      <Container>
        <div className="form-content mt-5 mb-5">
          <h1>Request Your password change</h1>
          <hr />
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
