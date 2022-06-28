import React from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const PaymentMethodTable = () => {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Status</th>
          <th>Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>inactive</td>
          <td>Pay by credit card</td>
          <td>
            <Button variant="warning">
              <i className="fa-solid fa-pencil"></i>
              Edit
            </Button>{" "}
            <Button variant="danger">
              <i className="fa-solid fa-trash-can"></i>
              Delete
            </Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default PaymentMethodTable;
