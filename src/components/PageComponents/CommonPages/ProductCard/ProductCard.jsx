import {
  Box,
  Grid,
  Typography,
  Chip,
  Paper,
  Stack,
  Rating,
  Fab,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

const ProductCard = () => {
  return (
    <div>
      <Box>
        <Box
          sx={{
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
      </Box>
    </div>
  );
};

export default ProductCard;
