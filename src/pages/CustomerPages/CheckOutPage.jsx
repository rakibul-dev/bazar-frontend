import { Box, Grid, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import ShippingAddress from "../../components/PageComponents/CustomerPages/CheckoutPageComponets/ShippingAddress";
import BillingAddress from "../../components/PageComponents/CustomerPages/CheckoutPageComponets/BillingAddress";
import TotalPricing from "../../components/PageComponents/CustomerPages/CheckoutPageComponets/TotalPricing";

const CheckOutPage = () => {
  return (
    <>
      <Box sx={{ padding: "25px" }}>
        <Box>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={7} order={{ xs: 2, md: 1 }}>
              <Box sx={{ display: "flex", flexDirection: "column" }} gap={4}>
                <ShippingAddress />
                {/* <BillingAddress /> */}
              </Box>
            </Grid>
            <Grid item xs={12} md={4} order={{ xs: 1, md: 2 }}>
              <Box sx={{}}>
                <TotalPricing />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default CheckOutPage;
