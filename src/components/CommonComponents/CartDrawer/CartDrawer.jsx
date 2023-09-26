import React from "react";
import { useEffect } from "react";
// import Drawer from "@mui/material/Drawer";
import CartDrawerItem from "./CartDrawerItem";
import { Grid, Typography, Stack, Fab, Box, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";
// document.body.classList.add("no-scroll");
const CartDrawer = ({ toggleDrawer, isOpen }) => {
  const drawerWidth = 350;
  //   const [isOpen, setIsOpen] = React.useState(false);
  //   const toggleDrawer = () => {
  //     setIsOpen((prevState) => !prevState);
  //     if (!isOpen) {
  //       document.body.style.overflow = "hidden";
  //     }
  //   };

  if (isOpen === false) {
    document.body.style.overflowY = "scroll";
  }
  return (
    <>
      {/* <button onClick={toggleDrawer}>Show</button> */}
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
            <CartDrawerItem />
            <CartDrawerItem />
          </Box>
          <Box
            sx={{ position: "fixed", bottom: "1px", height: "13%" }}
            justifyContent="center"
            width="100%"
            display="flex"
          >
            <Stack width="100%" gap={1} paddingRight={2} paddingLeft={2}>
              <Button variant="contained" fullWidth>
                Checkout now $670.00
              </Button>
              <Button variant="outlined" fullWidth>
                Checkout now $670.00
              </Button>
            </Stack>
          </Box>
        </Box>
      </Drawer>
    </>
    // <Drawer
    //   anchor="right"
    //   open={true}
    //   onClose="backdropClick"
    //   PaperProps={{
    //     sx: { width: drawerWidth, height: "100vh" },
    //   }}
    //   sx={{}}

    //   //   onClose={toggleDrawer(anchor, false)}
    // >
    //   <Box sx={{ m: 2, position: "fixed", width: "100%" }}>
    //     <Stack
    //       direction="row"
    //       justifyContent="space-between"
    //       alignItems="center"
    //     >
    //       <Typography variant="h5" fontWeight="bold">
    //         Cart
    //       </Typography>
    //       <Fab size="small" color="primary" aria-label="add">
    //         <CloseIcon fontSize="small" />
    //       </Fab>
    //     </Stack>
    //   </Box>
    //   <Box height="60vh">
    //     <CartDrawerItem />
    //     <CartDrawerItem />
    //     <CartDrawerItem />
    //     <CartDrawerItem />
    //     <CartDrawerItem />
    //     <CartDrawerItem />
    //     <CartDrawerItem />
    //     <CartDrawerItem />
    //     <CartDrawerItem />
    //   </Box>

    //   <Box sx={{ position: "fixed", bottom: "1px" }}>
    //     <Stack>
    //       <Button variant="contained">Checkout now $670.00</Button>
    //       <Button variant="outlined">Checkout now $670.00</Button>
    //     </Stack>
    //   </Box>
    // </Drawer>
  );
};

export default CartDrawer;
