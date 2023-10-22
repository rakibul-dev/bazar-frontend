import {
  Box,
  Button,
  Chip,
  Input,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const CartSummary = () => {
  const navigate = useNavigate();
  const { cartTotal } = useSelector((state) => state.cartSlice);

  return (
    <>
      <Box height="50%" width="100%">
        <Paper elevation={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "90%",
              padding: "5%",
            }}
            gap={4}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Typography>Total:</Typography>
              <Typography variant="h6" fontWeight="bold">
                ${cartTotal}
              </Typography>
            </Box>
            <Box>
              <Stack spacing={2} direction="row" alignItems="center">
                <Typography variant="h6" fontWeight="bold">
                  Additional Comments
                </Typography>
                <Chip
                  label="Note"
                  variant="contained"
                  color="primary"
                  size="small"
                />
              </Stack>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              justifyContent: "center",
              padding: "20px",
            }}
            gap={2}
          >
            <Box>
              <TextField
                color="primary"
                // maxRows={200}
                rows={4}
                fullWidth
                multiline
              ></TextField>
            </Box>
            <TextField
              id="outlined-basic"
              label="Voucher"
              variant="outlined"
              fullWidth
              size="small"
            />
            <Button variant="outlined" color="primary" fullWidth>
              Voucher
            </Button>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => {
                navigate("/checkout");
              }}
            >
              Checkout now
            </Button>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default CartSummary;
