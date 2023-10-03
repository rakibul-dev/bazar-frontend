import { Grid, Box } from "@mui/material";
import React from "react";
import AdminWelcomeCard from "./AdminWelcomeCard";
import AdminStatsCard from "./AdminStatsCard";

const AdminDashboardUpdates = () => {
  return (
    <>
      <Box>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={12} md={6}>
            <AdminWelcomeCard />
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={6} md={6}>
                <AdminStatsCard />
              </Grid>
              <Grid item xs={6} md={6}>
                <AdminStatsCard />
              </Grid>
              <Grid item xs={6} md={6}>
                <AdminStatsCard />
              </Grid>
              <Grid item xs={6} md={6}>
                <AdminStatsCard />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AdminDashboardUpdates;
