import { Avatar, Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";

const CustomerProfilePage = () => {
  return (
    <div>
      <Box>
        <Grid container spacing={1} justifyContent="space-between">
          <Grid item xs={12} sm={12} md={4}>
            <Box>
              <Paper elevation={1}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                  gap={2}
                >
                  <Avatar
                    src="/public/images/watch.png"
                    variant="outlined"
                    sx={{ width: 56, height: 56 }}
                  />
                  <Box>
                    <Typography variant="h6">Nick DuBuque</Typography>
                    <Typography variant="p" fontSize={15}>
                      Nick DuBuque
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Box>
          </Grid>
          <Grid item sm={6} md={2}>
            <Box>
              <Paper>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    color="primary"
                    align="center"
                    variant="h5"
                    fontWeight="bold"
                  >
                    16
                  </Typography>
                  <Typography align="center">All Orders</Typography>
                </Box>
              </Paper>
            </Box>
          </Grid>
          <Grid item sm={6} md={2}>
            <Box>
              <Paper>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    color="primary"
                    align="center"
                    variant="h5"
                    fontWeight="bold"
                  >
                    16
                  </Typography>
                  <Typography align="center">All Orders</Typography>
                </Box>
              </Paper>
            </Box>
          </Grid>
          <Grid item sm={6} md={2}>
            <Box>
              <Paper>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    color="primary"
                    align="center"
                    variant="h5"
                    fontWeight="bold"
                  >
                    16
                  </Typography>
                  <Typography align="center">All Orders</Typography>
                </Box>
              </Paper>
            </Box>
          </Grid>
          <Grid item sm={6} md={2}>
            <Box>
              <Paper>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    color="primary"
                    align="center"
                    variant="h5"
                    fontWeight="bold"
                  >
                    16
                  </Typography>
                  <Typography align="center">All Orders</Typography>
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default CustomerProfilePage;
