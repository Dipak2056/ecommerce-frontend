import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminLayout from "../../components/pages/layouts/AdminLayout";
import { EditProductForm } from "../../components/product-form/EditProductForm";
import { ProductForm } from "../../components/product-form/ProductForm";

const EditProduct = () => {
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
