import React from "react";
import Footer from "./Footer";
import { Header } from "./Header";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      {/* header  */}
      <Header />
      {/* main content  */}
      <main className="main">{children}</main>
      {/* footer  */}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
