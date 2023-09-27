import { Box, Fab, Grid, Paper, Stack, Typography } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
const CartItem = () => {
  return (
    <>
      <Paper elevation={3} sx={{ height: "140px" }}>
        <Box sx={{ display: "flex", justifyContent: "center", height: "100%" }}>
          <Grid container justifyContent="space-around" alignItems="center">
            <Grid item xs={2} md={2}>
              <img
                src="/public/images/watch.png"
                alt=""
                style={{ height: "100%", width: "100%" }}
              />
            </Grid>
            <Grid item xs={8} md={8}>
              <Box sx={{ height: "100%" }}>
                <Stack
                  display="flex"
                  justifyContent="space-between"
                  direction="row"
                  //   alignItems="flex-start"
                >
                  <Typography variant="h6" fontWeight="bold" fontSize={18}>
                    Silver High Neck Sweater
                  </Typography>
                  <Fab size="small" color="primary" aria-label="add">
                    <DeleteIcon />
                  </Fab>
                </Stack>
                <Box sx={{ marginBottom: "10px" }}>
                  <Typography variant="p">$210.00 x 1 $210.00</Typography>
                </Box>

                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"

                  //   alignItems="flex-start"
                >
                  <Fab size="small" color="primary" aria-label="add">
                    <DeleteIcon />
                  </Fab>
                  <Typography>5</Typography>
                  <Fab size="small" color="primary" aria-label="add">
                    <DeleteIcon />
                  </Fab>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </>
  );
};

export default CartItem;
