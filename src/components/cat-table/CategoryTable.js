import React from "react";
import { Button, Table } from "react-bootstrap";

export const CategoryTable = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Category Name</th>
          <th>Parent</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>
            <Button variant="warning">Edit</Button>{" "}
            <Button variant="danger">Delete</Button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
      </tbody>
    </Table>
  );
};
