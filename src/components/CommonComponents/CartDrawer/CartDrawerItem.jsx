import { Box, Fab, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const CartDrawerItem = () => {
  return (
    <div style={{ marginTop: "15px", marginBottom: "15px", width: "100%" }}>
      <Stack direction="row" justifyContent="space-around" alignItems="center">
        <Box sx={{ width: "10%" }}>
          <Stack direction="column" alignItems="center" justifyContent="center">
            <button
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "100%",
                // backgroundColor: "#d23f57ff",
                // border: "none",
                border: "2px solid #d23f57ff",
                fontSize: "20px",
              }}
            >
              +
            </button>
            <Typography variant="h6">5</Typography>
            <button
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "100%",
                // backgroundColor: "#d23f57ff",
                // border: "none",
                border: "2px solid #d23f57ff",
                fontSize: "20px",
              }}
            >
              -
            </button>
          </Stack>
        </Box>
        <Box width="20%">
          <img
            src="/public/images/watch.png"
            style={{ width: "100%", height: "100%" }}
            alt=""
          />
        </Box>
        <Box sx={{ width: "40%" }}>
          <Typography
            variant="h6"
            fontWeight="bold"
            textOverflow="hidden"
            overflow="hidden"
            width="100%"
            fontSize="15px"
            noWrap={true}
          >
            Silver High Neck Sweater
          </Typography>
          <Typography variant="p" fontSize="12px">
            $210.00 X 1
          </Typography>
          <Typography
            variant="h6"
            fontWeight="bold"
            textOverflow="hidden"
            overflow="hidden"
            width="100%"
            fontSize="15px"
            noWrap={true}
            color="primary"
          >
            $210.00
          </Typography>
        </Box>
        <Box sx={{ width: "10%" }}>
          <button
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "100%",
              // backgroundColor: "#d23f57ff",
              // border: "none",
              border: "2px solid #d23f57ff",
              fontSize: "20px",
            }}
          >
            x
          </button>
        </Box>
      </Stack>
    </div>
  );
};

export default CartDrawerItem;
