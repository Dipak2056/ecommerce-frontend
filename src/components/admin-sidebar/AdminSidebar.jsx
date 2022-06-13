import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleSidebar } from "../../system-state/systemSlice";

const AdminSidebar = () => {
  const dispatch = useDispatch();
  const { showAdminSidebar } = useSelector((state) => state.system);

  return (
    <div>
      <Offcanvas
        show={showAdminSidebar}
        onHide={() => dispatch(toggleSidebar())}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Admin Side Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <hr />
          <ListGroup variant="flush" className="fs-5">
            <ListGroup.Item>
              <Link className="nav-link" to="/dashboard">
                <i class="fa-solid fa-house-chimney"></i> Home
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link className="nav-link" to="/dashboard">
                <i class="fa-solid fa-gauge"></i> Dashboard
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link className="nav-link" to="/customers">
                {" "}
                <i class="fa-solid fa-people-line"></i> Customers
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link className="nav-link" to="/orders">
                {" "}
                <i class="fa-solid fa-table-cells"></i> Orders
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link className="nav-link" to="/products">
                {" "}
                <i class="fa-brands fa-product-hunt"></i> Products
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link className="nav-link" to="/categories">
                <i class="fa-solid fa-sitemap"></i> Categories
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link className="nav-link" to="/payments">
                {" "}
                <i class="fa-solid fa-credit-card"></i> Payments
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link className="nav-link" to="/setting">
                {" "}
                <i class="fa-solid fa-gear"></i> Setting
              </Link>
            </ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default AdminSidebar;
