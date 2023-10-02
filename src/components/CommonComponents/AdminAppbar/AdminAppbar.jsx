import {
  Grid,
  Toolbar,
  AppBar,
  Typography,
  Box,
  IconButton,
  TextField,
  Button,
  Stack,
  Badge,
  Avatar,
} from "@mui/material";
import React from "react";
import NotificationsSharpIcon from "@mui/icons-material/NotificationsSharp";
const AdminAppbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Grid container justifyContent="flex-end">
              <Grid item md={1}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <IconButton aria-label="delete" size="medium">
                    <NotificationsSharpIcon fontSize="inherit" />
                  </IconButton>
                  {/* <IconButton aria-label="delete" size="medium">
                    <NotificationsSharpIcon fontSize="inherit" />
                  </IconButton> */}

                  <Avatar src="/images/watch.png" sizes="large" />
                </Stack>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default AdminAppbar;
