import React from "react";
import { ListGroup } from "react-bootstrap";
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
        onClick={() => dispatch(toggleSidebar())}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Admin Side Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <hr />
          <ListGroup variant="flush" className="fs-5">
            <ListGroup.Item>
              <Link className="nav-link" to="/dashboard">
                <i className="fa-solid fa-house-chimney"></i> Home
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link className="nav-link" to="/dashboard">
                <i classname="fa-solid fa-gauge"></i> Dashboard
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link className="nav-link" to="/customers">
                {" "}
                <i classname="fa-solid fa-people-line"></i> Customers
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link className="nav-link" to="/orders">
                {" "}
                <i classname="fa-solid fa-table-cells"></i> Orders
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link className="nav-link" to="/products">
                {" "}
                <i classname="fa-brands fa-product-hunt"></i> Products
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link className="nav-link" to="/categories">
                <i classname="fa-solid fa-sitemap"></i> Categories
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link className="nav-link" to="/payments">
                {" "}
                <i classname="fa-solid fa-credit-card"></i> Payments
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link className="nav-link" to="/setting">
                {" "}
                <i classname="fa-solid fa-gear"></i> Setting
              </Link>
            </ListGroup.Item>
          </ListGroup>
          <ListGroup.Item>
            <Link className="nav-link" to="/logout">
              {" "}
              <i classname="fa-solid fa-arrow-right-from-bracket"></i> Logout
            </Link>
          </ListGroup.Item>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default AdminSidebar;
