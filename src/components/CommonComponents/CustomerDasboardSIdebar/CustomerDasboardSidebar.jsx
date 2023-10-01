import React from "react";

import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import ContentCut from "@mui/icons-material/ContentCut";
import ContentCopy from "@mui/icons-material/ContentCopy";
import ContentPaste from "@mui/icons-material/ContentPaste";
import Cloud from "@mui/icons-material/Cloud";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
const CustomerDasboardSidebar = () => {
  const naviagete = useNavigate();
  return (
    <div>
      <Box>
        <Paper sx={{ width: 320, maxWidth: "100%" }}>
          <MenuList>
            <MenuItem
              onClick={() => {
                naviagete("/customer/orders");
              }}
            >
              <ListItemIcon>
                <ContentCut fontSize="small" />
              </ListItemIcon>
              <ListItemText>Orders</ListItemText>
              <Typography variant="body2" color="text.secondary">
                6
              </Typography>
            </MenuItem>
            <MenuItem
              onClick={() => {
                naviagete("/customer/wishlist");
              }}
            >
              <ListItemIcon>
                <ContentCopy fontSize="small" />
              </ListItemIcon>
              <ListItemText>Wishlist</ListItemText>
              <Typography variant="body2" color="text.secondary">
                10
              </Typography>
            </MenuItem>
            <MenuItem
              onClick={() => {
                naviagete("/customer/profile");
              }}
            >
              <ListItemIcon>
                <ContentPaste fontSize="small" />
              </ListItemIcon>
              <ListItemText>Profile</ListItemText>
            </MenuItem>
          </MenuList>
        </Paper>
      </Box>
    </div>
  );
};

export default CustomerDasboardSidebar;
