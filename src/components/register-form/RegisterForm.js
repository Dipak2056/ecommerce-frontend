import React, { useState } from "react";
import { Alert, Button, Container, Form, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { postUserAction } from "../../pages/register-login/signInUpAction";
import "./registerForm.css";

const initialState = {
  fName: "sam",
  lName: "smith",
  email: "sam@gmail.com",
  phone: "0452450087",
  password: "123456",
  confirmPassword: "123456",
  address: "123 martin street",
};
export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialState);
  const [error, setError] = useState(false);

  //pull data from redux store
  const { isLoading, response } = useSelector((state) => state.signInUp);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      return setError(true);
    }
    setError(false);
    const { confirmPassword, ...rest } = form;
    dispatch(postUserAction(rest));
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
                value={form.fName}
                required
                placeholder="Enter First Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="lName"
                value={form.lName}
                required
                placeholder="Enter Last Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="phone"
                value={form.phone}
                required
                placeholder="Enter phone number"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Address</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="address"
                value={form.address}
                placeholder="Enter Your Address"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>DoB</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="date"
                type="date"
                value={form.dob}
                placeholder="Enter Your DOB"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="email"
                value={form.email}
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
                value={form.password}
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
                value={form.confirmPassword}
                placeholder="ConfirmPassword"
                required
              />
              <Alert variant="danger" show={error}>
                password donot match
              </Alert>
            </Form.Group>
            <Form.Group>
              {response.message && (
                <Alert
                  variant={response.status === "success" ? "success" : "danger"}
                >
                  {response.message}
                </Alert>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Button type="submit">
                {isLoading ? (
                  <Spinner
                    variant="primary"
                    animation="border"
                    size="sm"
                  ></Spinner>
                ) : (
                  "signUp"
                )}
              </Button>
            </Form.Group>
          </Form>
        </div>
      </Container>
    </div>
  );
};
