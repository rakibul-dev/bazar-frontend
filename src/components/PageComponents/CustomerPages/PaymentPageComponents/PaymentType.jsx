import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Box } from "@mui/material";

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
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
      </Box>
    </div>
  );
};

export default PaymentType;
