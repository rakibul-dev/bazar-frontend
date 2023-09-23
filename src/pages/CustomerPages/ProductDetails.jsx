import { Box, Button, Grid, Stack, Typography, Tabs, Tab } from "@mui/material";
import ProductDescription from "../../components/PageComponents/CustomerPages/ProductDetailsPage/ProductDescription";
import ProductReview from "../../components/PageComponents/CustomerPages/ProductDetailsPage/ProductReview";
import Rating from "@mui/material/Rating";
import TabPanel from "@mui/lab/TabPanel";

import PropTypes from "prop-types";

import { useState } from "react";
import React from "react";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ProductDetails = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box
          //   height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Grid container justifyContent="space-around" spacing={2}>
            <Grid item md={5}>
              <img
                src="/public/images/watch.png"
                alt=""
                style={{ height: "100%", width: "100%" }}
              />
            </Grid>
            <Grid item md={6}>
              <Box>
                <Typography variant="h4" fontWeight="bold">
                  Classic Rolex Watch
                </Typography>
                <Typography variant="p">Brand: Xiaomi</Typography>
                <Box
                  sx={{
                    width: "30%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="p">Rated:</Typography>
                  <Rating name="read-only" value={3} readOnly />
                  <Typography variant="p">(50)</Typography>
                </Box>
                <Box sx={{ my: 3 }}>
                  <Typography variant="p">Option</Typography>
                  <Stack direction="row" spacing={3}>
                    <Button size="small" variant="contained" color="primary">
                      option 1
                    </Button>

                    <Button size="small" variant="contained" color="primary">
                      option 2
                    </Button>

                    <Button size="small" variant="contained" color="primary">
                      option 3
                    </Button>

                    <Button size="small" variant="contained" color="primary">
                      option 4
                    </Button>
                  </Stack>
                </Box>
                <Box sx={{ my: 3 }}>
                  <Typography variant="p">Type</Typography>
                  <Stack direction="row" spacing={3}>
                    <Button size="small" variant="contained" color="primary">
                      option 1
                    </Button>

                    <Button size="small" variant="contained" color="primary">
                      option 2
                    </Button>

                    <Button size="small" variant="contained" color="primary">
                      option 3
                    </Button>

                    <Button size="small" variant="contained" color="primary">
                      option 4
                    </Button>
                  </Stack>
                </Box>
                <Box sx={{ my: 3 }}>
                  <Typography variant="h5" color="primary" fontWeight="bold">
                    $350.00
                  </Typography>
                  <Typography variant="p">Stock Available</Typography>
                </Box>
                <Box sx={{ my: 3 }}>
                  <Button variant="contained" color="primary" size="medium">
                    Add To Cart
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box height="">
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Item One" {...a11yProps(0)} />
              <Tab label="Item Two" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <ProductDescription />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <ProductReview />
          </CustomTabPanel>
        </Box>
      </Box>
    </div>
  );
};

export default ProductDetails;
