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

const CartSummary = () => {
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
                $460.00
              </Typography>
            </Box>
            <Box>
              <Stack spacing={2} direction="row" alignItems="center">
                <Typography variant="h6" fontWeight="bold">
                  Additional Comments
                </Typography>
                <Chip
                  label="New"
                  variant="contained"
                  color="primary"
                  size="small"
                />
              </Stack>
            </Box>

            <Box>
              <TextField
                color="primary"
                // maxRows={200}
                rows={4}
                fullWidth
                multiline
              ></TextField>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }} gap={2}>
              <TextField
                id="outlined-basic"
                label="Voucher"
                variant="outlined"
                fullWidth
                size="small"
              />
              <Button variant="contained" color="primary" fullWidth>
                Voucher
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default CartSummary;
