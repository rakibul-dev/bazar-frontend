import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";

const ProductDetails = () => {
  return (
    <div>
      <Box sx={{ height: "80vh", display: "flex", alignItems: "center" }}>
        <Box
          //   height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Grid container justifyContent="space-around" spacing={2}>
            <Grid item md={5}>
              <img
                src="/public/images/watch.png"
                alt=""
                style={{ height: "100%", width: "100%" }}
              />
            </Grid>
            <Grid item md={6}>
              <Box>
                <Typography variant="h4" fontWeight="bold">
                  Classic Rolex Watch
                </Typography>
                <Typography variant="p">Brand: Xiaomi</Typography>
                <Box
                  sx={{
                    width: "30%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="p">Rated:</Typography>
                  <Rating name="read-only" value={3} readOnly />
                  <Typography variant="p">(50)</Typography>
                </Box>
                <Box sx={{ my: 3 }}>
                  <Typography variant="p">Option</Typography>
                  <Stack direction="row" spacing={3}>
                    <Button size="small" variant="contained" color="primary">
                      option 1
                    </Button>

                    <Button size="small" variant="contained" color="primary">
                      option 2
                    </Button>

                    <Button size="small" variant="contained" color="primary">
                      option 3
                    </Button>

                    <Button size="small" variant="contained" color="primary">
                      option 4
                    </Button>
                  </Stack>
                </Box>
                <Box sx={{ my: 3 }}>
                  <Typography variant="p">Type</Typography>
                  <Stack direction="row" spacing={3}>
                    <Button size="small" variant="contained" color="primary">
                      option 1
                    </Button>

                    <Button size="small" variant="contained" color="primary">
                      option 2
                    </Button>

                    <Button size="small" variant="contained" color="primary">
                      option 3
                    </Button>

                    <Button size="small" variant="contained" color="primary">
                      option 4
                    </Button>
                  </Stack>
                </Box>
                <Box sx={{ my: 3 }}>
                  <Typography variant="h5" color="primary" fontWeight="bold">
                    $350.00
                  </Typography>
                  <Typography variant="p">Stock Available</Typography>
                </Box>
                <Box sx={{ my: 3 }}>
                  <Button variant="contained" color="primary" size="medium">
                    Add To Cart
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default ProductDetails;
