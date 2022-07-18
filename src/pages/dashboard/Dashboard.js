import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminLayout from "../../components/pages/layouts/AdminLayout";
import { fetchProductsAction } from "../product/productAction";
const Dashboard = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    !products.length && dispatch(fetchProductsAction());
  }, []);
  const activeProduct = products.filter(
    (product) => product.status === "active"
  );
  const inactiveProduct = products.filter((item) => item.status === "inactive");

  return (
    <div>
      <AdminLayout></AdminLayout>
    </div>
  );
};

export default Dashboard;
