import React, { useRef } from "react";
import { Button, Container, Form, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { postLoginAction } from "../../pages/register-login/signInUpAction";
import "./loginform.css";

const initialState = {
  email: "sam@gmail.com",
  password: "123456",
};
export const LoginForm = () => {
  const dispatch = useDispatch();

  //pull data from redux store
  const { isLoading } = useSelector((state) => state.signInUp);

  const emailRef = useRef();
  const passRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;
    if (!email || !password) {
      return alert("Both input field must be filled");
    }
    console.log(email, password);
    //call api, thru action.
    dispatch(postLoginAction({ email, password }));
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
                ref={emailRef}
                name="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label> Password</Form.Label>
              <Form.Control
                ref={passRef}
                type="password"
                name="password"
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
