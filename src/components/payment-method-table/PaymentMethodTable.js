import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { fetchPaymentMethods } from "../../pages/payment-method/paymentMethodAction";

const PaymentMethodTable = () => {
  const dispatch = useDispatch();
  const { paymentMethods } = useSelector((state) => state.paymentMethods);

  useEffect(() => {
    dispatch(fetchPaymentMethods());
  }, []);
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
        {paymentMethods.map((item, i) => (
          <tr key={i}>
            <td>{i}</td>
            <td>{item.status}</td>
            <td>{item.name}</td>
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
        ))}
      </tbody>
    </Table>
  );
};

export default PaymentMethodTable;
