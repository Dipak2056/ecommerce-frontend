import React from "react";
import { CategoriesForm } from "../../components/cat-form/CategoriesForm";
import { CategoryTable } from "../../components/cat-table/CategoryTable";
import AdminLayout from "../../components/pages/layouts/AdminLayout";

const Categories = () => {
  return (
    <AdminLayout>
      <CategoriesForm></CategoriesForm>
      <hr />
      <CategoryTable></CategoryTable>
    </AdminLayout>
  );
};

export default Categories;
