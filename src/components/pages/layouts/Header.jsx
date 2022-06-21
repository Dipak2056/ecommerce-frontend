import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../../system-state/systemSlice";

export const Header = () => {
  const dispatch = useDispatch();
  return (
    <Navbar bg="primary" expand="md" className="text-light">
      <Container>
        <Button variant="primary" onClick={() => dispatch(toggleSidebar())}>
          <i className="fa-solid fa-bars"></i>
        </Button>
        <LinkContainer to="/">
          <Navbar.Brand>My Store Admin</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/register" className="nav-link">
              Register
            </Link>
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
