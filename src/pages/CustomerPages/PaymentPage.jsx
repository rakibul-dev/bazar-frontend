import { Box, Grid, Paper } from "@mui/material";
import React from "react";
import PaymentType from "../../components/PageComponents/CustomerPages/PaymentPageComponents/PaymentType";
import TotalPricing from "../../components/PageComponents/CustomerPages/CheckoutPageComponets/TotalPricing";

const PaymentPage = () => {
  return (
    <div>
      <Box sx={{ marginTop: "50px" }}>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="flex-start"
        >
          <Grid item xs={12} md={7}>
            <Paper elevation={3}>
              <Box>
                <PaymentType />
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <TotalPricing />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default PaymentPage;
