import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import AdminLayout from "../../components/pages/layouts/AdminLayout";
import PaymentMethodTable from "../../components/payment-method-table/PaymentMethodTable";

const PaymentMethod = () => {
  return (
    <AdminLayout>
      <Row className="mt-3">
        <Col>
          <h1>Payment Method</h1>
        </Col>
      </Row>
      <Row>
        <Col className="text-end mt-5 mb-2">
          <Button variant="primary">
            <i className="fa-solid fa-plus"></i>
            Add new payment method
          </Button>
        </Col>
      </Row>
      <Row className="mt-5 mb-5">
        <PaymentMethodTable />
      </Row>
    </AdminLayout>
  );
};

export default PaymentMethod;
