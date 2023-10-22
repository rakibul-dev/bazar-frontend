import React from "react";
import {
  Radio,
  Button,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Box,
} from "@mui/material";

import { useState } from "react";

const PaymentType = () => {
  const [value, setValue] = React.useState();
  return (
    <div>
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

    </div>
  );
};

export default PaymentType;
