import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <>
      <Box
        paddingTop="100px"
        paddingBottom="100px"
        paddingRight="25px"
        paddingLeft="25px"
        alignItems="center"
        display="flex"
        sx={{ backgroundColor: "#d23f57" }}
      >
        <Grid container spacing={2}>
          <Grid item xs={6} md={3}>
            <Box>
              <Typography variant="h5" fontWeight="bold"></Typography>
              <Typography variant="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                libero id et, in gravida. Sit diam duis mauris nulla cursus.
                Erat et lectus vel ut sollicitudin elit at amet.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="h5" fontWeight="bold">
                About Us
              </Typography>
              <Typography variant="p">Careers</Typography>
              <Typography variant="p">Our Stores</Typography>
              <Typography variant="p">Our Cares</Typography>
              <Typography variant="p">Terms & Conditions</Typography>
              <Typography variant="p">Privacy Policy</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="h5" fontWeight="bold">
                Customer Care
              </Typography>
              <Typography variant="p">Careers</Typography>
              <Typography variant="p">Our Stores</Typography>
              <Typography variant="p">Our Cares</Typography>
              <Typography variant="p">Terms & Conditions</Typography>
              <Typography variant="p">Privacy Policy</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="h5" fontWeight="bold">
                Contact Us
              </Typography>
              <Typography variant="p">Careers</Typography>
              <Typography variant="p">Our Stores</Typography>
              <Typography variant="p">Our Cares</Typography>
              <Typography variant="p">Terms & Conditions</Typography>
              <Typography variant="p">Privacy Policy</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Footer;
