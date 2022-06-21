import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminLayout from "../../components/pages/layouts/AdminLayout";
import { ProductTable } from "../../components/product table/ProductTable";

const Product = () => {
  return (
    <AdminLayout>
      <h1>Products </h1>
      <div className="text-end">
        <Link to="/product/new">
          <Button variant="primary">
            {" "}
            <i className="fa-solid fa-plus"></i> Add new Product
          </Button>
        </Link>
      </div>
      <hr />
      <div className="product-list">
        <ProductTable />
      </div>
    </AdminLayout>
  );
};

export default Product;
