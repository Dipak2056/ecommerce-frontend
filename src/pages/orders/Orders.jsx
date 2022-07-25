import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Form, Pagination, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AdminLayout from "../../components/pages/layouts/AdminLayout";
import { PaginationBasic } from "../../components/pagination/Pagination";
import { ordersAction } from "./orderAction";

const productPerPage = 10;

export const Orders = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.orders);

  const [displayOrder, setDisplayOrders] = useState([]);
  const [active, setActive] = useState(1);
  useEffect(() => {
    if (!orders.length) {
      dispatch(ordersAction());
    }
    setDisplayOrders(orders);
  }, [orders]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setActive(1);
    if (!value) {
      return setDisplayOrders(orders);
    }
    const filteredArg = orders.filter((item) => item.status === value);
    setDisplayOrders(filteredArg);
  };
  //pagination logic
  const handleOnPaginationClick = (pageNumber) => {
    setActive(pageNumber);
  };

  const pages = Math.ceil(displayOrder.length / productPerPage);
  let productStartAt = (active - 1) * productPerPage;
  let productEndAt = productStartAt + 10;

  return (
    <AdminLayout>
      <h1 className="py-3">Orders management</h1>
      <div className="d-flex justify-content-between mb-2">
        {displayOrder.length} orders found!
        <div>
          <Form className="d-flex mb-2">
            <Form.Group>
              <Form.Select onChange={handleOnChange}>
                <option value="">--filter</option>
                <option value="processing">processing</option>
                <option value="shipped">shipped</option>
                <option value="cancelled">cancelled</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </div>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Status</th>
            <th>Buyer Name</th>
            <th>Order Total</th>
            <th>Payment Status</th>
          </tr>
        </thead>
        <tbody>
          {displayOrder.map(
            (item, i) =>
              i > productStartAt &&
              i < productEndAt && (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{item.status}</td>
                  <td>{item.buyers.fName}</td>
                  <td>{item.totalAmount}</td>
                  <td>{item.paymentInfo.status}</td>

                  <td>
                    <Link to={`/orders/${item._id}`} variant="link">
                      {" "}
                      Info
                    </Link>
                  </td>
                </tr>
              )
          )}
        </tbody>
      </Table>
      <PaginationBasic
        pages={pages}
        handleOnPaginationClick={handleOnPaginationClick}
        active={active}
      />
    </AdminLayout>
  );
};
