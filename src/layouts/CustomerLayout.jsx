import React from "react";
import CustomerAppBar from "../components/CommonComponents/AppBar/AppBar";
import { Outlet } from "react-router-dom";
const CustomerLayout = () => {
  return (
    <div>
      <CustomerAppBar />
      <Outlet />
    </div>
  );
};

export default CustomerLayout;
