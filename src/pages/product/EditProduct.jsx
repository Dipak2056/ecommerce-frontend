import React from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import AdminLayout from "../../components/pages/layouts/AdminLayout";
import { EditProductForm } from "../../components/product-form/EditProductForm";
import { fetchSingleProductAction } from "./productAction";

const EditProduct = () => {
  const dispatch = useDispatch();
  const { _id } = useParams();

  useEffect(() => {
    _id && dispatch(fetchSingleProductAction(_id));
  }, [_id]);
  return (
    <AdminLayout>
      <div className="text-start mt-2">
        <Link to="/products">
          <Button variant="none">
            {" "}
            <i className="fa-solid fa-chevron-left"></i> Back
          </Button>
        </Link>
      </div>
      <h1 className="mt-3">Edit Products </h1>
      <hr />
      <div>
        <EditProductForm />
      </div>
    </AdminLayout>
  );
};

export default EditProduct;
