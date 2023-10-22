import { Box, Button, Grid, Typography } from "@mui/material";

import CartItem from "../../components/PageComponents/CustomerPages/CartPageComponents/CartItem";
import CartSummary from "../../components/PageComponents/CustomerPages/CartPageComponents/CartSummary";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCartItems } from "../../Redux/Slices/cartSlice";
import { useNavigate } from "react-router-dom";
const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cartSlice);
  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  console.log(cart);
  return (
    <div>
      {cart.length ? (
        <Box marginTop="50px">
          <Grid
            container
            justifyContent="center"
            alignItems="flex-start"
            spacing={10}
          >
            <Grid item xs={10} md={7}>
              {cart.map((item) => (
                <Box marginBottom={3} key={item._id}>
                  <CartItem item={item} />
                </Box>
              ))}
            </Grid>
            <Grid item xs={10} md={4}>
              <CartSummary />
            </Grid>
          </Grid>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "100vh",
          }}
          gap={2}
        >
          <img
            src="/public/images/empty_cart.png"
            style={{ height: "30%", width: "20%" }}
          />
          <Typography variant="h4">Your cart is empty</Typography>
          <Button
            variant="contained"
            onClick={() => {
              navigate("/shop");
            }}
          >
            Go to shop
          </Button>
        </Box>
      )}
    </div>
  );
};

export default CartPage;
