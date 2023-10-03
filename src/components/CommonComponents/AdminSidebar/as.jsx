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
import { useLocation, useNavigate } from "react-router-dom";

const AdminSidebar = () => {
  const naviagate = useNavigate();
  const { pathname } = useLocation();
  console.log({ pathname });
  return (
    <div>
      <Box>
        <Paper sx={{ width: 320, maxWidth: "100%" }}>
          <MenuList>
            <MenuItem
              selected={"/admin/dashboard" === pathname}
              onClick={() => {
                naviagate("/admin/dashboard");
              }}
            >
              <ListItemIcon>
                <ContentCut fontSize="small" />
              </ListItemIcon>
              <ListItemText>Cut</ListItemText>
              <Typography variant="body2" color="text.secondary">
                ⌘X
              </Typography>
            </MenuItem>{" "}
            <MenuItem
              //   selected={"/admin/dashboard" === pathname}
              onClick={() => {
                naviagate("/admin/dashboard");
              }}
            >
              <ListItemIcon>
                <ContentCut fontSize="small" />
              </ListItemIcon>
              <ListItemText>Cut</ListItemText>
              <Typography variant="body2" color="text.secondary">
                ⌘X
              </Typography>
            </MenuItem>
          </MenuList>
        </Paper>
      </Box>
    </div>
  );
};

export default AdminSidebar;
