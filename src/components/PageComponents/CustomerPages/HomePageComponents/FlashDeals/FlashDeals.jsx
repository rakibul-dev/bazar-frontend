import { Box, Grid, Typography, Button } from "@mui/material";
import FlashOnIcon from "@mui/icons-material/FlashOn";

// import ProductCard from "../../../CommonPages/ProductCard/ProductCard";
import ProductCard from "../../../../CommonComponents/ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../../../Redux/Slices/productSlice";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect } from "react";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const FlashDeals = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productSlice);
  console.log(products);
  useEffect(() => {
    dispatch(getProducts());
  }, []);

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
        <Box>
          <Carousel responsive={responsive} width="80%">
            {products.map((item) => (
              <Box sx={{ m: 2 }} key={item._id}>
                <ProductCard product={item} />
              </Box>
            ))}
          </Carousel>
        </Box>
      </Box>
    </div>
  );
};

export default FlashDeals;
