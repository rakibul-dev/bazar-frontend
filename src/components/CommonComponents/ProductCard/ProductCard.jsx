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
  Button,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
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
        {/* <Grid container>
          <Grid item md={3}> */}
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
              {show ? (
                <Box
                  sx={{
                    position: "absolute",
                    display: "flex",
                    justifyContent: "end",
                    top: "25px",
                    right: "25px",
                  }}
                >
                  <Stack
                    spacing={1}
                    alignItems="center"
                    justifyContent="center"
                    direction="column"
                  >
                    <Fab size="small" color="primary" aria-label="add">
                      <DeleteIcon fontSize="small" />
                    </Fab>
                    <Fab size="small" color="primary" aria-label="add">
                      <DeleteIcon fontSize="small" />
                    </Fab>
                  </Stack>
                </Box>
              ) : null}

              <Chip
                label="25% off"
                size="small"
                color="primary"
                style={{ margin: "10px" }}
              />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="public/images/watch.png"
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
            <Button
              variant="outlined"
              onClick={() => {
                handleClickOpen();
              }}
            >
              Open alert dialog
            </Button>
          </Paper>
        </Box>
        {/* </Grid>
        </Grid> */}
      </Box>
    </>
  );
};

export default ProductCard;
