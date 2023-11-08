import { Stack, Typography, Box, Grid, Paper } from "@mui/material";
import LocalMallSharpIcon from "@mui/icons-material/LocalMallSharp";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getCustomerOrders } from "../../../Redux/Slices/orderSlice";
const CustomerOrdersPage = () => {
  const { user } = useSelector((state) => state.userSlice);
  const { orders } = useSelector((state) => state.orderSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCustomerOrders(user._id));
  }, []);

  return (
    <div>
      <Box>
        <Stack direction="row" gap={2} alignItems="center">
          <LocalMallSharpIcon fontSize="medium" color="primary" />
          <Typography variant="h5" fontWeight="bold">
            My Orders
          </Typography>
        </Stack>
      </Box>
      <Box sx={{ marginTop: "25px" }}>
        <Grid container>
          <Grid item md={2}>
            <Typography varriant="h6">Order #</Typography>
          </Grid>
          <Grid item md={2}>
            <Typography varriant="h6">Date</Typography>
          </Grid>
          <Grid item md={2}>
            <Typography varriant="h6">purchased</Typography>
          </Grid>
          <Grid item md={2}>
            <Typography varriant="h6">Total</Typography>
          </Grid>
        </Grid>
      </Box>
      {orders.map((item) => (
        <>
          {" "}
          <Box sx={{ marginTop: "25px" }}>
            <Paper>
              <Box sx={{ padding: "10px" }}>
                <Grid container>
                  <Grid item md={2}>
                    <Typography varriant="h6">Order #</Typography>
                  </Grid>
                  <Grid item md={2}>
                    <Typography varriant="h6">Date</Typography>
                  </Grid>
                  <Grid item md={2}>
                    <Typography varriant="h6">purchased</Typography>
                  </Grid>
                  <Grid item md={2}>
                    <Typography varriant="h6">Total</Typography>
                  </Grid>
                  <Grid item md={4}>
                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                      <ArrowForwardSharpIcon color="primary" />
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Box>
        </>
      ))}
    </div>
  );
};

export default CustomerOrdersPage;
