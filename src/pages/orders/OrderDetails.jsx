import React from "react";
import { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import AdminLayout from "../../components/pages/layouts/AdminLayout";
import { ordersAction } from "./orderAction";
import { OrderEdit } from "../../components/order-details/OrderEdit";

export const OrderDetail = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ordersAction());
  }, []);
  return (
    <AdminLayout>
      <Link to="/orders">&lt; Back</Link>
      <h1 className="py-3">Orders Details</h1>
      <OrderEdit />
    </AdminLayout>
  );
};
