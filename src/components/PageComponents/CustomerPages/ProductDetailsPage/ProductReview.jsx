import { Avatar, Box, Grid, Rating, Stack, Typography } from "@mui/material";
import React from "react";

const ProductReview = () => {
  return (
    <>
      <Box>
        <Box>
          <Stack
            direction="row"
            //   justifyContent="center"
            alignItems="center"
            spacing={2}
            width="100%"
          >
            <Box>
              <Avatar src="/public/imges/watch.png" sizes="small" />
            </Box>

            <Box sx={{ width: "100%" }}>
              <Typography variant="h6" fontWeight="bold">
                John doe
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
                gap={1}
              >
                <Rating value={5} />
                <Typography variant="p" fontWeight="bold">
                  4.7
                </Typography>
                <Typography variant="p">2.7 years ago</Typography>
              </Box>
            </Box>
          </Stack>
          <Grid container>
            <Grid item md={5} sm={12}>
              <Typography variant="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
                massa id ut mattis. Facilisis vitae gravida egestas ac account.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default ProductReview;
