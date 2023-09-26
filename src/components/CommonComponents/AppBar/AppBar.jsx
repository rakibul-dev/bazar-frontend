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
} from "@mui/material";
import React from "react";

import InputAdornment from "@mui/material/InputAdornment";

import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import CartDrawer from "../CartDrawer/CartDrawer";

const CustomerAppBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    }
  };
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item md={1} xs={1}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Photos
                </Typography>
              </Grid>
              <Grid item xs={6} md={8} alignItems="center">
                <Box
                  sx={{
                    alignItems: "center",
                    display: { xs: "none", sm: "block" },
                  }}
                >
                  <Box sx={{ position: "" }}>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      size="small"
                      fullWidth
                      InputProps={{
                        style: {
                          borderRadius: "100px",
                        },
                        startAdornment: (
                          //   <InputAdornment position="start">kg</InputAdornment>
                          <SearchIcon />
                        ),
                        endAdornment: (
                          <InputAdornment position="end">
                            <div style={{ marginLeft: "50px" }}>
                              <Button
                                disableRipple
                                style={{
                                  marginLeft: "50px",
                                  borderRadius: "0px 20px 20px 0px",
                                }}
                              >
                                Search
                              </Button>
                            </div>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid item md={1} sm={1}>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Stack spacing={2} direction="row">
                    <IconButton size="large">
                      <PersonIcon />
                    </IconButton>
                    <IconButton
                      size="large"
                      onClick={() => {
                        console.log("cart clicked");
                        toggleDrawer();
                      }}
                    >
                      <Badge badgeContent={4} color="primary">
                        <LocalMallIcon />
                      </Badge>
                    </IconButton>
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
      <CartDrawer toggleDrawer={toggleDrawer} isOpen={isOpen} />
    </div>
  );
};

export default CustomerAppBar;
