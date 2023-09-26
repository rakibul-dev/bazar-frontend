import { Box, Typography } from "@mui/material";
import React from "react";

const ProductDescription = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" gap={2}>
        <Typography variant="h5" fontWeight="bold">
          Specification:
        </Typography>
        <Box flexDirection="column" display="flex">
          <Typography variant="p">Brand: Beats</Typography>
          <Typography variant="p">Model: S450</Typography>
          <Typography variant="p">Wireless Bluetooth Headset</Typography>
          <Typography variant="p">Made in China</Typography>
          <Typography variant="p">
            Feature: FM Radio, Card Supported (Micro SD / TF)
          </Typography>
          <Typography variant="p">
            FM Frequency Response: 87.5 – 108 MHz
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default ProductDescription;
