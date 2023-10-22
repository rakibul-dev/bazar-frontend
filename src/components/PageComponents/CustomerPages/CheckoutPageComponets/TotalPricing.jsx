import {
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";

const TotalPricing = () => {
  const { cartTotal } = useSelector((state) => state.cartSlice);
  return (
    <div>
      <Box>
        <Paper elevation={3}>
          <Box
            gap={3}
            sx={{ display: "flex", flexDirection: "column", padding: "20px" }}
          >
            <Box>
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="p"> Subtotal:</Typography>
                <Typography variant="h6" fontWeight="bold">
                  ${cartTotal}
                </Typography>
              </Stack>
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="p">Shipping:</Typography>
                <Typography variant="h6" fontWeight="bold">
                  $0.00
                </Typography>
              </Stack>
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="p">Discount:</Typography>
                <Typography variant="h6" fontWeight="bold">
                  $0.00
                </Typography>
              </Stack>
              <Stack justifyContent="flex-end" flexDirection="row">
                <Typography variant="h5" fontWeight="bold">
                  ${cartTotal}
                </Typography>
              </Stack>
            </Box>

            <Stack gap={2}>
              <TextField
                id="outlined-basic"
                label="Voucher"
                variant="outlined"
                fullWidth
                size="small"
              />
              <Button variant="outlined">Voucher</Button>
            </Stack>
          </Box>
        </Paper>
      </Box>
    </div>
  );
};

export default TotalPricing;
