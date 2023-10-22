import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  Tabs,
  Tab,
  Rating,
} from "@mui/material";

import ProductDescription from "../../components/PageComponents/CustomerPages/ProductDetailsPage/ProductDescription";
import ProductReview from "../../components/PageComponents/CustomerPages/ProductDetailsPage/ProductReview";
import LeaveComment from "../../components/PageComponents/CustomerPages/ProductDetailsPage/LeaveComment";
import axios from "axios";
import { addToCart } from "../../Redux/Slices/cartSlice";

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
  const [productDetails, setProductDetails] = useState();
  const { user } = useSelector((state) => state.userSlice);
  const { id } = useParams();
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getProductDetails = async () => {
    const res = await axios.get(`http://localhost:5000/products/${id}`);
    setProductDetails(res.data);

    console.log({ res });
    console.log({ productDetails });
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  return (
    <div>
      {productDetails ? (
        <>
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
                      {productDetails?.name}
                    </Typography>
                    <Typography variant="p">
                      Brand: {productDetails.brand.name}
                    </Typography>
                    {/* <Box
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
                    </Box> */}
                    <Box sx={{ my: 3 }}>
                      <Typography variant="p">Option</Typography>
                      <Stack direction="row" spacing={3}>
                        <Button
                          size="small"
                          variant="contained"
                          color="primary"
                        >
                          option 1
                        </Button>

                        <Button
                          size="small"
                          variant="contained"
                          color="primary"
                        >
                          option 2
                        </Button>

                        <Button
                          size="small"
                          variant="contained"
                          color="primary"
                        >
                          option 3
                        </Button>

                        <Button
                          size="small"
                          variant="contained"
                          color="primary"
                        >
                          option 4
                        </Button>
                      </Stack>
                    </Box>
                    <Box sx={{ my: 3 }}>
                      <Typography variant="p">Type</Typography>
                      <Stack direction="row" spacing={3}>
                        <Button
                          size="small"
                          variant="contained"
                          color="primary"
                        >
                          option 1
                        </Button>

                        <Button
                          size="small"
                          variant="contained"
                          color="primary"
                        >
                          option 2
                        </Button>

                        <Button
                          size="small"
                          variant="contained"
                          color="primary"
                        >
                          option 3
                        </Button>

                        <Button
                          size="small"
                          variant="contained"
                          color="primary"
                        >
                          option 4
                        </Button>
                      </Stack>
                    </Box>
                    <Box sx={{ my: 3 }}>
                      <Typography
                        variant="h5"
                        color="primary"
                        fontWeight="bold"
                      >
                        $350.00
                      </Typography>
                      <Typography variant="p">Stock Available</Typography>
                    </Box>
                    <Box sx={{ my: 3 }}>
                      <Button
                        variant="contained"
                        color="primary"
                        size="medium"
                        onClick={() => {
                          dispatch(
                            addToCart({ userId: user._id, productId: id })
                          ).then((res) => {
                            if (res.meta.requestStatus === "fulfilled") {
                              toast.success("Product added to the cart");
                            }
                          });
                        }}
                      >
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
                {/* Show Comments  */}
                <Box
                  gap={2}
                  sx={{
                    display: "flex",

                    justifyContent: "flex-start",
                    flexDirection: "column",
                  }}
                >
                  <ProductReview />
                  <ProductReview />
                  <ProductReview />
                  <ProductReview />
                  <ProductReview />
                </Box>

                {/* Leave Comment section */}
                <LeaveComment />
              </CustomTabPanel>
            </Box>
          </Box>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default ProductDetails;
