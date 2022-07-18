import React, { useEffect, useRef } from "react";
import { Button, Container, Form, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { postLoginAction } from "../../pages/register-login/signInUpAction";
import "./loginform.css";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const origin =
    (location.state && location.state.from.pathname) || "/dashboard";

  //pull data from redux store
  const { isLoading } = useSelector((state) => state.signInUp);
  const { user } = useSelector((state) => state.admin);

  const emailRef = useRef();
  const passRef = useRef();

  useEffect(() => {
    user._id && navigate(origin);
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;
    if (!email || !password) {
      return alert("Both input field must be filled");
    }
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
          <div className="text-end">
            Forgot password? <a href="/forgot-password">Reset Password</a>
          </div>
        </div>
      </Container>
    </div>
  );
};
