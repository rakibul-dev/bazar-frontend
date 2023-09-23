import { Box, Grid, Typography, Button } from "@mui/material";
import React from "react";
import Fab from "@mui/material/Fab";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import Rating from "@mui/material/Rating";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";

const ProductCard = () => {
  return (
    <div>
      <Box>
        {/* <Grid container>
          <Grid item md={3}> */}
        <Box
          sx={{
            // display: "flex",
            // flexWrap: "wrap",
            // "& > :not(style)": {
            //   m: 1,
            //   width: 128,
            //   height: 128,
            // },
            width: "100%",
            height: "100%",
          }}
        >
          <Paper elevation={5}>
            <Box>
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "end",
                  top: "10px",
                  right: "10px",
                }}
              >
                hello
              </Box>
              <Chip label="25% off" size="small" color="primary" />
              <img
                src="public/images/watch.png"
                alt=""
                style={{ height: "100%", width: "100%" }}
              />

              <Grid container justifyContent="space-around">
                <Grid item md={7}>
                  <Typography variant="h6">Classic Rolex Watch</Typography>
                  <Rating
                    name="simple-controlled"
                    value={4}
                    // onChange={(event, newValue) => {
                    //   setValue(newValue);
                    // }}
                  />
                </Grid>
                <Grid item md={3}>
                  <Box
                    display="flex"
                    justifyContent="end"
                    alignItems="end"
                    height="100%"
                    // minHeight="100vh"
                  >
                    <Stack
                      spacing={2}
                      alignItems="center"
                      justifyContent="center"
                      direction="column"
                    >
                      {/* <IconButton aria-label="delete" size="small">
                        <DeleteIcon fontSize="small" color="primary" />
                      </IconButton> */}

                      {/* <IconButton
                        aria-label="delete"
                        size="small"
                        variant="contained"
                      >
                        <DeleteIcon fontSize="small" color="primary" />
                      </IconButton> */}
                      <Fab size="small" color="primary" aria-label="add">
                        <DeleteIcon />
                      </Fab>
                    </Stack>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Box>
        {/* </Grid>
        </Grid> */}
      </Box>
    </div>
  );
};

export default ProductCard;
