import React from "react";
import { useEffect } from "react";

import CartDrawerItem from "./CartDrawerItem";
import { Grid, Typography, Stack, Fab, Box, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "../../../Redux/Slices/cartSlice";
import { useNavigate } from "react-router-dom";
// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";

const CartDrawer = ({ toggleDrawer, isOpen }) => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.userSlice);
  const { cart, cartTotal } = useSelector((state) => state.cartSlice);
  const dispatch = useDispatch();

  const drawerWidth = 350;

  if (isOpen === false) {
    document.body.style.overflowY = "scroll";
  }

  useEffect(() => {
    if (user) {
      dispatch(getCartItems(user._id));
    }
  }, []);
  console.log({ user: user._id });

  return (
    <>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="bla bla bla"
        style={{
          zIndex: "100000000000000000000",
          width: "350px",
          //   overflow: "scroll",
          //   overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              position: "fixed",
              width: "100%",
              top: "10px",
              //   bottom: "10px",
              //   right: "10px",
              //   padding: "20px",
              display: "flex",
              //   justifyContent: "center",
              //   alignItems: "center",
            }}
          >
            <Stack
              direction="row"
              justifyContent="space-around"
              alignItems="center"
              width="100%"
              gap={20}
            >
              <Typography variant="h5" fontWeight="bold">
                Cart
              </Typography>
              <Fab size="small" color="primary" aria-label="add">
                <CloseIcon fontSize="small" />
              </Fab>
            </Stack>
          </Box>
          <Box
            sx={{
              marginTop: "50px",
              overflowY: "scroll",
              overflowX: "hidden",
              height: "75vh",
              width: "100%",
            }}
          >
            {cart?.map((item) => (
              <CartDrawerItem key={item._id} item={item} />
            ))}
          </Box>
          <Box
            sx={{ position: "fixed", bottom: "1px", height: "13%" }}
            justifyContent="center"
            width="100%"
            display="flex"
          >
            <Stack width="100%" gap={1} paddingRight={2} paddingLeft={2}>
              <Button variant="contained" fullWidth>
                Checkout now {cartTotal ? "$" + cartTotal : null}
              </Button>
              <Button
                variant="outlined"
                fullWidth
                onClick={() => {
                  navigate("/cart");
                }}
              >
                View cart
              </Button>
            </Stack>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default CartDrawer;
