import { Box, Grid, Typography, Button } from "@mui/material";
import FlashOnIcon from "@mui/icons-material/FlashOn";

import ProductCard from "../../../CommonPages/ProductCard/ProductCard";
import "./carousel.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
const BigDiscounts = () => {
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
          {/* <Carousel
            responsive={responsive}
            itemClass="carousel-item-padding-100-px"
          >
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </Carousel> */}
          <Carousel responsive={responsive} width="80%">
            <Box sx={{ m: 2 }}>
              <ProductCard />
            </Box>
            <Box sx={{ m: 2 }}>
              <ProductCard />
            </Box>
            <Box sx={{ m: 2 }}>
              <ProductCard />
            </Box>
            <Box sx={{ m: 2 }}>
              <ProductCard />
            </Box>
            <Box sx={{ m: 2 }}>
              <ProductCard />
            </Box>
          </Carousel>
        </Box>
      </Box>
    </div>
  );
};

export default BigDiscounts;
