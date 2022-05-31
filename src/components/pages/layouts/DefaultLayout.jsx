import React from "react";
import Footer from "./Footer";
import { Header } from "./Header";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      {/* header  */}
      <Header />
      {/* main content  */}
      <mai className="main">{children}</mai>
      {/* footer  */}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
