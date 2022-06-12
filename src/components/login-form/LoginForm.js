import React, { useState } from "react";
import { Alert, Button, Container, Form, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { postUserAction } from "../../pages/register-login/signInUpAction";
import "./loginform.css";

const initialState = {
  email: "sam@gmail.com",
  password: "123456",
};
export const LoginForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialState);
  const [error, setError] = useState(false);

  //pull data from redux store
  const { isLoading } = useSelector((state) => state.signInUp);

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
          <h1>Welcome Back!</h1>
          <hr />
          <Form onSubmit={handleSubmit}>
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

            <Form.Group className="mb-3">
              <Button type="submit">
                {isLoading ? (
                  <Spinner
                    variant="primary"
                    animation="border"
                    size="sm"
                  ></Spinner>
                ) : (
                  "Log In"
                )}
              </Button>
            </Form.Group>
          </Form>
        </div>
      </Container>
    </div>
  );
};
