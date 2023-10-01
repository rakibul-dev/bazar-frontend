import React from "react";
import CustomerAppBar from "../components/CommonComponents/AppBar/AppBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/CommonComponents/Footer/Footer";
const CustomerLayout = () => {
  return (
    <div>
      <CustomerAppBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default CustomerLayout;
