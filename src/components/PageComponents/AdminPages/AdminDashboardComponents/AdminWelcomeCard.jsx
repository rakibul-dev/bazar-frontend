import { Box, Grid, Stack } from "@mui/material";
import React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const AdminWelcomeCard = () => {
  return (
    <>
      <Box>
        <Card sx={{ minWidth: "100%" }} variant="elevation" elevation={2}>
          <Box padding={2}>
            <Stack>
              <Typography variant="p" fontWeight="bold">
                Good Morning, Maruf!
              </Typography>
              <Typography variant="p">
                Here’s what happening with your store today!
              </Typography>
            </Stack>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item md={6}>
                <Stack gap={2}>
                  <Box>
                    <Typography variant="h6" fontWeight="bold">
                      15,350.25
                    </Typography>
                    <Typography variant="p">Today’s Visit</Typography>
                  </Box>
                  <Box>
                    <Typography variant="h6" fontWeight="bold">
                      15,350.25
                    </Typography>
                    <Typography variant="p">Today’s Visit</Typography>
                  </Box>
                </Stack>
              </Grid>
              <Grid
                item
                md={6}
                display="flex"
                alignItems="center "
                justifyContent="flex-end"
              >
                <img src="/images/watch.png" alt="" height="70%" width="70%" />
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Box>
    </>
  );
};

export default AdminWelcomeCard;
