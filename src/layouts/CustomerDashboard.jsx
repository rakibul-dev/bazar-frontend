import React from "react";
import { Outlet } from "react-router-dom";
import CustomerAppBar from "../components/CommonComponents/AppBar/AppBar";
import { Box, Grid } from "@mui/material";
import CustomerDasboardSidebar from "../components/CommonComponents/CustomerDasboardSIdebar/CustomerDasboardSidebar";
import Footer from "../components/CommonComponents/Footer/Footer";

const CustomerDashboard = () => {
  return (
    <div>
      <CustomerAppBar />
      <Box sx={{ marginTop: "50px", marginBottom: "50px" }}>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item md={2}>
            <Box
              sx={{
                display: { sm: "none", md: "block" },
                height: "100%",
                width: "100%",
              }}
            >
              <CustomerDasboardSidebar />
            </Box>
          </Grid>

          <Grid item md={8}>
            <Outlet />
          </Grid>
        </Grid>
      </Box>

      <Footer />
    </div>
  );
};

export default CustomerDashboard;
