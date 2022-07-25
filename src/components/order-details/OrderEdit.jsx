import React, { useEffect } from "react";
import { Table, Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const OrderEdit = () => {
  const { orders } = useSelector((state) => state.orders);
  const { _id } = useParams();

  const selectedOrder = orders.filter((order) => order._id === _id);
  if (selectedOrder.length < 1) {
    return <h1>Order not found</h1>;
  }
  const order = selectedOrder[0];
  const { buyers, cart, paymentInfo, status, totalAmount } = order;
  console.log(order);

  return (
    <div>
      <div className="status fw-bold py-2 d-flex justify-content-between">
        <div>Status:{status}</div>
        <div>
          <Form className="d-flex">
            <Form.Group>
              <Form.Select>
                <option value="">--select</option>
                <option value="shipped">shipped</option>
                <option value="cancelled">cancelled</option>
              </Form.Select>
            </Form.Group>

            <Button variant="primary">Mark As</Button>
          </Form>
        </div>
      </div>
      <div className="shippingInfo border p-2 mb-2">
        <h4>Buyer Info</h4>
        <hr />
        UserName: {buyers.fName} {buyers.lName} <br />
        Shipping Address : {buyers.address} <br />
        Phone : {buyers.phone} <br />
        email : {buyers.email} <br />
      </div>
      <div className="paymentDetail border p-2 mb-2">
        <h4>Payment Details</h4>
        <hr />
        Status : {paymentInfo.status} <br />
        Total Paid: {orders.totalAmount} <br />
        Paid Date : {paymentInfo.paidDate} <br />
        Paid Method : {paymentInfo.method} <br />
        Transaction ID : {paymentInfo.transactionID} <br />
      </div>
      <div className="order-details border p-2 mb-2">
        <h4>Cart Details</h4>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Thumbnail</th>
              <th>Name</th>
              <th>Unit Price</th>
              <th>QTY</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>
                  <img src={item.thumbnail} width="80px" />
                </td>
                <td>{item.productName}</td>
                <td>{item.salesPrice}</td>
                <td> {item.Qty} </td>
                <td> {item.subTotal} </td>
              </tr>
            ))}
            {/* {cart.map((item, i) => {
              
            })} */}
            <tr className="fw-bold">
              <td>Total</td>
              <td className="colSpan-4"></td>
              <td> {totalAmount} </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="note-box border p-2 mb-2">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Add Notes</Form.Label>
            <Form.Control as="text-area" placeholder="Add Note" rows="5" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check label="Send email to Customer" />
          </Form.Group>

          <Button variant="primary">Submit</Button>
        </Form>

        <div className="note-history border p-2 mt-2">
          <h5>Comments</h5>
          <div className="message">
            <div className="mt-3">
              Date : 10-3-2022 <br />
              <div className="border p-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit,
                nostrum pariatur non et officiis amet.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
