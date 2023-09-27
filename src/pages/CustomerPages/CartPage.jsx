import { Box, Grid } from "@mui/material";

import CartItem from "../../components/PageComponents/CustomerPages/CartPageComponents/CartItem";
import CartSummary from "../../components/PageComponents/CustomerPages/CartPageComponents/CartSummary";

const CartPage = () => {
  return (
    <div>
      <Box marginTop="50px">
        <Grid
          container
          justifyContent="center"
          alignItems="flex-start"
          spacing={10}
        >
          <Grid item xs={10} md={7}>
            <Box marginBottom={3}>
              <CartItem />
            </Box>
            <Box marginBottom={3}>
              <CartItem />
            </Box>
            <Box marginBottom={3}>
              <CartItem />
            </Box>
          </Grid>
          <Grid item xs={10} md={4}>
            <CartSummary />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default CartPage;
