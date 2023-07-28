import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const RootLayout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen px-7">{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
