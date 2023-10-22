import {
  Box,
  Grid,
  Paper,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";
import React from "react";
import PaymentType from "../../components/PageComponents/CustomerPages/PaymentPageComponents/PaymentType";
import TotalPricing from "../../components/PageComponents/CustomerPages/CheckoutPageComponets/TotalPricing";
import { useState } from "react";

const PaymentPage = () => {
  const [value, setValue] = useState();
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
                <Box sx={{ padding: "25px" }}>
                  <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">
                      Paymet method
                    </FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="female"
                      name="radio-buttons-group"
                      value={value}
                      onChange={(e) => {
                        setValue(e.target.value);
                        console.log(value);
                      }}
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Cash On Delivery"
                      />
                    </RadioGroup>
                  </FormControl>
                </Box>
              </Box>
            </Paper>
            {value ? (
              <Box sx={{ marginTop: "20px" }}>
                <Button variant="contained">Order Now</Button>
              </Box>
            ) : null}
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
