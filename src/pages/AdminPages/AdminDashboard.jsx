import { Box, Grid } from "@mui/material";
import React from "react";
import AdminDashboardUpdates from "../../components/PageComponents/AdminPages/AdminDashboardComponents/AdminDashboardUpdates";
import AdminRecentPurchasesTable from "../../components/PageComponents/AdminPages/AdminDashboardComponents/AdminRecentPurchasesTable";

const AdminDashboard = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" gap={4}>
        <AdminDashboardUpdates />
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <AdminRecentPurchasesTable />
          </Grid>
          <Grid item xs={12} md={6}>
            <AdminRecentPurchasesTable />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default AdminDashboard;
