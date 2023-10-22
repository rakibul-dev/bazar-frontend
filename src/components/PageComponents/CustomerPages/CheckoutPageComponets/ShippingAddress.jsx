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

import { useNavigate } from "react-router-dom";

const ShippingAddress = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
      gap={3}
    >
      <Paper elevation={3}>
        <Box sx={{ padding: "20px" }}>
          <Box sx={{ marginBottom: "20px" }}>
            <Typography variant="h6" fontSize={16} fontWeight="bold">
              Shipping Address
            </Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                id="outlined-basic"
                label="Full Name"
                variant="outlined"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="outlined-basic"
                label="Email address"
                variant="outlined"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="outlined-basic"
                label="Phone number"
                variant="outlined"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="outlined-basic"
                label="Zip code"
                variant="outlined"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="outlined-basic"
                label="Address 1"
                variant="outlined"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="outlined-basic"
                label="Address 2"
                variant="outlined"
                fullWidth
                size="small"
              />
            </Grid>
          </Grid>
        </Box>
      </Paper>

      <Grid container spacing={2}>
        <Grid item md={6}>
          <Button
            variant="outlined"
            fullWidth
            onClick={() => {
              navigate("/cart");
            }}
          >
            Back To Cart
          </Button>
        </Grid>
        <Grid item md={6}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => {
              navigate("/payment");
            }}
          >
            Proceed To Payment
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ShippingAddress;
