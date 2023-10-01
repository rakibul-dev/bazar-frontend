import React from "react";
import ProductCard from "../../../components/CommonComponents/ProductCard/ProductCard";

import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Stack,
  Typography,
  Box,
  Grid,
  Paper,
  Chip,
  Rating,
  Fab,
} from "@mui/material";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
const CustomerWishlistPage = () => {
  return (
    <>
      <Box>
        <Box>
          <Stack direction="row" gap={2} alignItems="center">
            <FavoriteSharpIcon fontSize="medium" color="primary" />
            <Typography variant="h5" fontWeight="bold">
              My Wishlist
            </Typography>
          </Stack>
        </Box>
        <Box sx={{ marginTop: "25px" }}>
          <Grid container spacing={4}>
            <Grid item sm={6} md={4}>
              <ProductCard />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default CustomerWishlistPage;
