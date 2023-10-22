import { Box, Container, Grid } from "@mui/material";

import ProductCard from "../../components/CommonComponents/ProductCard/ProductCard";

const ShopPage = () => {
  return (
    <div>
      <Box>
        <Container>
          <Grid container>
            <Grid item md={3}>
              sidebar
            </Grid>
            <Grid item md={9} width="100%">
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
              >
                <Grid item md={3}>
                  <ProductCard />
                </Grid>{" "}
                <Grid item md={3}>
                  <ProductCard />
                </Grid>{" "}
                <Grid item md={3}>
                  <ProductCard />
                </Grid>{" "}
                <Grid item md={3}>
                  <ProductCard />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default ShopPage;
