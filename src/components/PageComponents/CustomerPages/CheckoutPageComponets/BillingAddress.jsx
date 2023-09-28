import React from "react";
import {
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
const BillingAddress = () => {
  return (
    <Box>
      <Paper elevation={3}>
        <Box sx={{ padding: "20px" }}>
          <Typography variant="h6" fontSize={16} fontWeight="bold">
            Billing Address
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                id="outlined-basic"
                label="Voucher"
                variant="outlined"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="outlined-basic"
                label="Voucher"
                variant="outlined"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="outlined-basic"
                label="Voucher"
                variant="outlined"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="outlined-basic"
                label="Voucher"
                variant="outlined"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="outlined-basic"
                label="Voucher"
                variant="outlined"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="outlined-basic"
                label="Voucher"
                variant="outlined"
                fullWidth
                size="small"
              />
            </Grid>
          </Grid>
        </Box>
      </Paper>
      <Box sx={{ marginTop: "50px" }}>
        <Grid container justifyContent="space-between" spacing={2}>
          <Grid item xs={12} md={6}>
            <Button variant="outlined" fullWidth>
              Back To Cart
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button variant="contained" fullWidth>
              Proceed To Checkout
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default BillingAddress;
