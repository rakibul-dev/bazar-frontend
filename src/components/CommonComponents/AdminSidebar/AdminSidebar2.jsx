import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
  Collapse,
  Paper,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  List,
  Divider,
  Box,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";

import { ExpandLess } from "@mui/icons-material";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";

const AdminSidebar2 = () => {
  const naviagate = useNavigate();
  const { pathname } = useLocation();
  const [open, setOpen] = React.useState(true);
  const [items, setItems] = useState([
    {
      name: "dashboard",
      nested: [{ name: "hello", link: "/admin/dashboard" }],
      isOpen: false,
    },
  ]);

  const handleClick = (index) => {
    // console.log(index);
    setOpen(!open);

    //   items[index].isOpen = ;

    const isOpen = items[index].isOpen;
    if (isOpen) {
      console.log("yes it is ", isOpen);
      const newArray = [...items];

      // Update the value property of the selected object
      newArray[index].isOpen = false;

      // Update the state with the modified array
      setItems(newArray);
    } else {
      const newArray = [...items];

      // Update the value property of the selected object
      newArray[index].isOpen = true;

      // Update the state with the modified array
      setItems(newArray);
      console.log("no its ", isOpen);
    }

    // setItems(!menu.isOpen);
  };

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Paper elevation={0} sx={{ width: "100%" }}>
        <List component="nav" sx={{ width: "100%" }}>
          {/* <ListItemButton component="a" href="#customized-list">
              <ListItemIcon sx={{ fontSize: 20 }}>🔥</ListItemIcon>
              <ListItemText
                sx={{ my: 0 }}
                primary="Firebash"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
              />
            </ListItemButton> */}
          <Divider />
          <List
            sx={{ width: "100%", bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            {items.map((menu, index) => (
              <Box key={Math.random()} sx={{ width: "100%" }}>
                <ListItemButton
                  sx={{ width: "100%" }}
                  onClick={() => {
                    //   handleClick(index);
                    if (menu.nested.length) {
                      handleClick(index);
                    } else {
                      naviagate("/admin/dashboard");
                    }
                  }}
                  alignItems="center"
                  disableRipple
                >
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={menu.name} />

                  {menu.nested.length ? (
                    menu.isOpen ? (
                      <ExpandLess />
                    ) : (
                      <ExpandMore />
                    )
                  ) : null}
                </ListItemButton>
                <Collapse in={menu.isOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {menu.nested.map((item) => (
                      <ListItemButton
                        sx={{ pl: 4 }}
                        key={Math.random()}
                        onClick={() => {
                          naviagate(item.link);
                        }}
                        selected={item.link === pathname}
                      >
                        <ListItemIcon>
                          <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary={item.name} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              </Box>
            ))}
          </List>
        </List>
      </Paper>
    </Box>
  );
};

export default AdminSidebar2;
