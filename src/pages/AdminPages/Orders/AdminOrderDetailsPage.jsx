import {
  Typography,
  Box,
  Grid,
  Paper,
  TextField,
  MenuItem,
  Stack,
  Avatar,
  IconButton,
} from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

const AdminOrderDetailsPage = () => {
  return (
    <>
      <Box display="flex" flexDirection="column" gap={2}>
        <Typography variant="h5" fontWeight="bold">
          Order Details
        </Typography>
        <Box>
          <Paper>
            <Box padding={3}>
              <Box>
                <Grid container spacing={2}>
                  <Grid item xs={6} md={6}>
                    <TextField
                      id="outlined-password-input"
                      label="Name"
                      type="text"
                      autoComplete="current-password"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="outlined-select-currency"
                      select
                      label="Select"
                      //   defaultValue="EUR"
                      //   helperText="Please select your currency"
                      fullWidth
                    >
                      {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                </Grid>
              </Box>

              <Box paddingTop="10px">
                <Grid
                  container
                  justifyContent="space-between  "
                  alignItems="center"
                >
                  <Grid item md={4}>
                    <Box>
                      <Stack direction="row" alignItems="center" gap={2}>
                        <Avatar
                          src="/images/watch.png"
                          variant="rounded"
                          sx={{ width: 50, height: 50 }}
                        />
                        <Stack gap={1}>
                          <Typography variant="p" fontWeight="bold">
                            Budi 2017
                          </Typography>
                          <TextField
                            id="outlined-number"
                            label="Number"
                            type="number"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            size="small"
                            sx={{ width: "40%" }}
                          />
                        </Stack>
                      </Stack>
                    </Box>
                  </Grid>
                  <Grid item md={4}>
                    <Typography variant="p">
                      Product properties: Black, L
                    </Typography>
                  </Grid>
                  <Grid item md={2} display="flex" justifyContent="flex-end">
                    <IconButton aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </Box>
              <Box paddingTop="10px">
                <Grid
                  container
                  justifyContent="space-between  "
                  alignItems="center"
                >
                  <Grid item md={4}>
                    <Box>
                      <Stack direction="row" alignItems="center" gap={2}>
                        <Avatar
                          src="/images/watch.png"
                          variant="rounded"
                          sx={{ width: 50, height: 50 }}
                        />
                        <Stack gap={1}>
                          <Typography variant="p" fontWeight="bold">
                            Budi 2017
                          </Typography>
                          <TextField
                            id="outlined-number"
                            label="Number"
                            type="number"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            size="small"
                            sx={{ width: "40%" }}
                          />
                        </Stack>
                      </Stack>
                    </Box>
                  </Grid>
                  <Grid item md={4}>
                    <Typography variant="p">
                      Product properties: Black, L
                    </Typography>
                  </Grid>
                  <Grid item md={2} display="flex" justifyContent="flex-end">
                    <IconButton aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Paper>
        </Box>

        <Box>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
          >
            <Grid item xs={12} md={6}>
              <Box>
                <Paper>
                  <Box
                    display="flex"
                    flexDirection="column"
                    gap={2}
                    padding="25px"
                  >
                    <TextField
                      type="textare"
                      multiline
                      rows={4}
                      fullWidth
                      label="Shipping address"
                      value="Kelly Williams 777 Brockton Avenue, Abington MA 2351"
                      focused={true}
                    />
                    <TextField
                      type="textare"
                      multiline
                      rows={4}
                      fullWidth
                      label="Customers note"
                      value="Please deliver assap"
                      focused={true}
                    />
                  </Box>
                </Paper>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              {/* <Box> */}
              <Paper sx={{ height: "100%" }}>
                <Box
                  display="flex"
                  flexDirection="column"
                  gap={2}
                  padding="25px"
                  height="100%"
                >
                  <Typography variant="p" fontWeight="bold">
                    Total Summary
                  </Typography>

                  <Stack direction="row" justifyContent="space-between">
                    <Typography variant="p">Subtotal:</Typography>
                    <Typography variant="p">100</Typography>
                  </Stack>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography variant="p">Shipping fee:</Typography>
                    <Typography variant="p">100</Typography>
                  </Stack>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography variant="p">Discount(%):</Typography>
                    <Typography variant="p">100</Typography>
                  </Stack>
                  <Box sx={{ paddingTop: "30px" }}>
                    <Stack direction="row" justifyContent="space-between">
                      <Typography variant="p" fontWeight="bold">
                        Total
                      </Typography>
                      <Typography variant="p">100</Typography>
                    </Stack>
                    <Typography variant="p">
                      Paid by Credit/Debit Card
                    </Typography>
                  </Box>
                </Box>
              </Paper>
              {/* </Box> */}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default AdminOrderDetailsPage;
