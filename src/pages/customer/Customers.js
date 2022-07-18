import React from "react";
import { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import AdminLayout from "../../components/pages/layouts/AdminLayout";
import { getCustomersAction } from "./customerAction";

export const Customers = () => {
  const dispatch = useDispatch();
  const { customers } = useSelector((state) => state.customers);
  useEffect(() => {
    dispatch(getCustomersAction());
  }, []);
  return (
    <AdminLayout>
      <h1 className="py-3">Customer management</h1>
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
          {customers.map((item, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>
                <Button variant="link"> Info</Button>
              </td>
            </tr>
          ))}
          ;
        </tbody>
      </Table>
    </AdminLayout>
  );
};
