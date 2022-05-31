import React, { useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { postUserAction } from "../../pages/register-login/signInUpAction";
import "./registerForm.css";

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { password, confirmPassword } = form;

    if (password !== confirmPassword) {
      return setError(true);
    }
    setError(false);
    dispatch(postUserAction());
  };
  return (
    <div>
      <Container>
        <div className="form-content mt-5 mb-5">
          <h1>Register Form</h1>
          <hr />
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="fName"
                required
                placeholder="Enter First Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="lName"
                required
                placeholder="Enter Last Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Address</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="address"
                placeholder="Enter Your Address"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>DoB</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="date"
                type="date"
                placeholder="Enter Your DOB"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label> Password</Form.Label>
              <Form.Control
                onChange={handleChange}
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label> Confirm Password</Form.Label>
              <Form.Control
                onChange={handleChange}
                type="password"
                name="confirmPassword"
                placeholder="ConfirmPassword"
                required
              />
              <Alert variant="danger" show={error}>
                password donot match
              </Alert>
            </Form.Group>

            <Form.Group className="mb-3">
              <Button type="submit">Sign Up</Button>
            </Form.Group>
          </Form>
        </div>
      </Container>
    </div>
  );
};
