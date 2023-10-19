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
import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import NotificationsSharpIcon from "@mui/icons-material/NotificationsSharp";
import DeleteIcon from "@mui/icons-material/Delete";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOutUser } from "../../../Redux/Slices/UserSlice";
const AdminAppbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logOutUser()).then((res) => {
      navigate("/");
    });
  };
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Grid
              container
              justifyContent={{ md: "flex-end", xs: "space-between" }}
            >
              <Grid
                item
                justifyContent="flex-start"
                sx={{ display: { md: "none", sm: "block" } }}
                md={1}
                xs={1}
              >
                <IconButton aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </Grid>
              <Grid item md={1} display="flex" justifyContent="flex-end">
                <Stack direction="row" alignItems="center" spacing={1}>
                  <IconButton aria-label="delete" size="medium">
                    <NotificationsSharpIcon fontSize="inherit" />
                  </IconButton>
                  {/* <IconButton aria-label="delete" size="medium">
                    <NotificationsSharpIcon fontSize="inherit" />
                  </IconButton> */}

                  <Avatar
                    src="/images/watch.png"
                    sizes="large"
                    onClick={handleClick}
                  />
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </Menu>
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
