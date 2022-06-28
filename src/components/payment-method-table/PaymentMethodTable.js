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
        {paymentMethods.length > 0 &&
          paymentMethods.map(({ _id, name, status, description }, i) => (
            <tr key={_id}>
              <td>{i + 1}</td>
              <td>{status}</td>
              <td>
                {name}{" "}
                <i
                  className="fa-solid fa-circle-info text-primary"
                  title={description}
                ></i>
              </td>
              <td>
                <Button variant="warning" title="to edit payment methods">
                  <i className="fa-solid fa-pen-to-square"></i>
                </Button>{" "}
                <Button variant="danger">
                  <i className="fa-solid fa-trash-can"></i>
                </Button>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default PaymentMethodTable;
