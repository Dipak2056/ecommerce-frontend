import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Form, Pagination, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import AdminLayout from "../../components/pages/layouts/AdminLayout";
import { PaginationBasic } from "../../components/pagination/Pagination";
import { getCustomersAction } from "./customerAction";

const customerToDisplay = 5;
export const Customers = () => {
  const dispatch = useDispatch();
  const { customers } = useSelector((state) => state.customers);
  const [active, setActive] = useState(1);
  const [displayCustomer, setDisplayCustomer] = useState([]);

  useEffect(() => {
    !displayCustomer.length && dispatch(getCustomersAction());
    setDisplayCustomer(customers);
  }, [customers]);
  console.log(customers);

  const pages = Math.ceil(customers.length / customerToDisplay);
  let customerToStartWith = (active - 1) * customerToDisplay;
  let customerToEndWith = customerToStartWith + 5;

  const handleOnPaginationClick = (pageNumber) => {
    setActive(pageNumber);
  };

  const handleOnChange = (e) => {
    const { value } = e.target;

    setDisplayCustomer(
      customers.filter((item) => {
        return item.name.toLowerCase().includes(value.toLowerCase());
      })
    );
  };

  return (
    <AdminLayout>
      <h1 className="py-3">Customer management</h1>
      <Form.Control
        type="search"
        placeholder="search"
        onChange={handleOnChange}
      ></Form.Control>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {displayCustomer.map(
            (item, i) =>
              i >= customerToStartWith &&
              i < customerToEndWith && (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>
                    <Button variant="link"> Info</Button>
                  </td>
                </tr>
              )
          )}
        </tbody>
      </Table>
      <PaginationBasic
        active={active}
        pages={pages}
        handleOnPaginationClick={handleOnPaginationClick}
      />
    </AdminLayout>
  );
};
