import { useState } from "react";

import {
  Box,
  Grid,
  Typography,
  Stack,
  Rating,
  Chip,
  Paper,
  Fab,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ProductModalView from "../../PageComponents/CommonPages/ProductCard/ProductModalView";

const ProductCard = () => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box>
        <Box
          sx={{
            width: "100%",
            height: "100%",
          }}
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          <Paper elevation={5}>
            <Box>
              <Box>
                <Stack
                  //   spacing={1}
                  alignItems="center"
                  justifyContent="space-between"
                  direction="row"
                  position="relative"
                >
                  <Chip
                    label="25% off"
                    size="small"
                    color="primary"
                    style={{ margin: "10px" }}
                  />
                  {show ? (
                    <Stack
                      alignItems="center"
                      justifyContent="space-between"
                      direction="column"
                      position="absolute"
                      right="10px"
                      top="10px"
                      gap={1}
                    >
                      <Fab
                        size="small"
                        color="primary"
                        aria-label="add"
                        onClick={() => handleClickOpen()}
                      >
                        <FavoriteIcon fontSize="small" />
                      </Fab>
                      <Fab size="small" color="primary" aria-label="add">
                        <FavoriteIcon fontSize="small" />
                      </Fab>
                    </Stack>
                  ) : null}
                </Stack>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="/images/watch.png"
                  alt=""
                  style={{ height: "40%", width: "90%" }}
                />
              </Box>

              <Grid container justifyContent="space-around">
                <Grid item md={7}>
                  <Typography variant="h6" fontWeight="bold" fontSize={15}>
                    Classic Rolex Watch
                  </Typography>
                  <Rating name="simple-controlled" value={4} />
                </Grid>
                <Grid item md={3}>
                  <Box
                    display="flex"
                    justifyContent="end"
                    alignItems="end"
                    sx={{ marginBottom: "10px" }}
                  >
                    <Stack
                      spacing={2}
                      alignItems="center"
                      justifyContent="center"
                      direction="column"
                    >
                      <Fab size="small" color="primary" aria-label="add">
                        <AddIcon fontSize="small" />
                      </Fab>
                    </Stack>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <ProductModalView isOpen={open} close={handleClose} />
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default ProductCard;
