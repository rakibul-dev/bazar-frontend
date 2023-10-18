/* eslint-disable react/prop-types */

import {
  Box,
  Grid,
  Rating,
  Typography,
  Fab,
  DialogContent,
  Dialog,
  Button,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

const ProductModalView = ({ isOpen, close, product }) => {
  return (
    <div>
      <div>
        <Dialog
          open={isOpen}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          maxWidth="md"
        >
          <DialogContent>
            <Box width="100%">
              <Box
                width="100%"
                alignItems="flex-end"
                justifyContent="end"
                display="flex"
              >
                <Fab
                  size="small"
                  color="primary"
                  aria-label="add"
                  onClick={() => close()}
                >
                  <CloseIcon fontSize="small" />
                </Fab>
              </Box>
              {/* <Box></Box> */}
              <Grid container spacing={2}>
                <Grid item md={6}>
                  <img
                    src="/public/images/watch.png"
                    style={{ height: "100%", width: "100%" }}
                    alt=""
                  />
                </Grid>
                <Grid item md={6}>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    <Typography variant="h5" fontWeight="bold">
                      {product?.name}
                    </Typography>
                    <Typography variant="p">
                      CATEGORY: {product?.category.name}
                    </Typography>
                    <Box>
                      <Typography variant="h4" color="primary">
                        $350.00
                      </Typography>
                      <Rating value={3} />
                    </Box>
                    <Typography variant="p">
                      Sed egestas, ante et vulputate volutpat, eros pede semper
                      est, vitae luctus metus libero eu augue. Morbi purus
                      liberpuro ate vol faucibus adipiscing.
                    </Typography>
                  </Box>
                  <Box sx={{ my: 3 }}>
                    <Button variant="contained" size="medium">
                      Add To Cart
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default ProductModalView;
