import React from "react";
import AdminSidebar from "../../admin-sidebar/AdminSidebar";
import Footer from "./Footer";
import { Header } from "./Header";

const AdminLayout = ({ children }) => {
  return (
    <div>
      {/* header  */}
      <Header />
      <AdminSidebar />
      {/* main content  */}
      <main className="main">{children}</main>
      {/* footer  */}
      <Footer />
    </div>
  );
};

export default AdminLayout;
