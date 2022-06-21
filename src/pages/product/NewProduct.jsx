import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminLayout from "../../components/pages/layouts/AdminLayout";

const NewProduct = () => {
  return (
    <AdminLayout>
      <div className="text-start mt-2">
        <Link to="/product/new">
          <Button variant="none">
            {" "}
            <i class="fa-solid fa-chevron-left"></i> Back
          </Button>
        </Link>
      </div>
      <h1 className="mt-3">Add New Products </h1>
      <hr />
      <div>Form</div>
    </AdminLayout>
  );
};

export default NewProduct;
