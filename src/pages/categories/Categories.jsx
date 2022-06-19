import React from "react";
import { CategoriesForm } from "../../components/cat-form/CategoriesForm";
import { CategoryTable } from "../../components/cat-table/CategoryTable";
import AdminLayout from "../../components/pages/layouts/AdminLayout";

const Categories = () => {
  return (
    <AdminLayout>
      <h3 className="mt-3">Category</h3>
      <CategoriesForm></CategoriesForm>
      <hr />
      <CategoryTable />
    </AdminLayout>
  );
};

export default Categories;
