import React from "react";
import { Container } from "react-bootstrap";
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
      <Container>
        <main className="main">{children}</main>
      </Container>
      {/* footer  */}
      <Footer />
    </div>
  );
};

export default AdminLayout;
