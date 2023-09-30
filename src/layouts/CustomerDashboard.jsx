import React from "react";
import { Outlet } from "react-router-dom";
import CustomerAppBar from "../components/CommonComponents/AppBar/AppBar";
import { Box, Grid } from "@mui/material";
import CustomerDasboardSidebar from "../components/CommonComponents/CustomerDasboardSIdebar/CustomerDasboardSidebar";

const CustomerDashboard = () => {
  return (
    <div>
      <CustomerAppBar />
      <Box sx={{ marginTop: "50px" }}>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item md={2}>
            <CustomerDasboardSidebar />
          </Grid>
          <Grid item md={8}>
            <Outlet />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default CustomerDashboard;
