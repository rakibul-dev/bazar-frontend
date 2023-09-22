import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import FlashOnIcon from "@mui/icons-material/FlashOn";
const FlashDeals = () => {
  return (
    <div>
      <Box>
        <Box>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item md={2} alignItems="center">
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FlashOnIcon color="primary" fontSize="medium" />
                <Typography variant="h5">Flash Deals</Typography>
              </Box>
            </Grid>
            <Grid item md={2} alignItems="center" justifyContent="end">
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button variant="text">View all</Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box>Slider</Box>
      </Box>
    </div>
  );
};

export default FlashDeals;
