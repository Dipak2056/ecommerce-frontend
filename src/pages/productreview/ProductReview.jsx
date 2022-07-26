import React from "react";
import { useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import AdminLayout from "../../components/pages/layouts/AdminLayout";
import { reviewsAction } from "./productreview.action";

export const ProductReview = () => {
  const dispatch = useDispatch();
  const { reviews } = useSelector((state) => state.reviews);
  useEffect(() => {
    dispatch(reviewsAction());
  }, []);
  return (
    <div>
      <AdminLayout>
        <Table striped bordered hover className="mt-5">
          <thead>
            <tr>
              <th>#</th>
              <th>Product Id</th>
              <th>Product Name</th>
              <th>reviewed By</th>
              <th>rating</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item._id}</td>
                <td>{item.productId}</td>
                <td>{item.productName}</td>
                <td>{item.rating}</td>
                <td>{item.reviewedBy}</td>
                <td>
                  <Button variant="link"> Info</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </AdminLayout>
    </div>
  );
};
