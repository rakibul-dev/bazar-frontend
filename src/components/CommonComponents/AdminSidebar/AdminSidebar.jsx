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

const AdminSidebar = () => {
  const naviagate = useNavigate();
  const { pathname } = useLocation();
  const [open, setOpen] = React.useState(true);
  const [items, setItems] = useState([
    //   Dashboard
    {
      name: "Dashboard",
      nested: [],
      isOpen: false,
      link: "/admin/dashboard",
    },
    // Customers
    {
      name: "Customers",
      nested: [],
      link: "/admin/customers",
    },
    // Products
    {
      name: "Products",
      nested: [
        { name: "Products list", link: "/admin" },
        { name: "Create product", link: "/admin/product/create" },
      ],
    },
    // Categories
    {
      name: "Categories",
      nested: [
        { name: "Categories list", link: "/admin/categories" },
        { name: "Create category", link: "/admin/category/create" },
      ],
    },
    // Brands
    {
      name: "Brands",
      nested: [
        { name: "Brands list", link: "/admin/brands" },
        { name: "Create brand", link: "/admin/brand/create" },
      ],
    },
    // Orders
    {
      name: "Orders",
      nested: [
        { name: "Orders list", link: "/admin/orders" },
        { name: "Create order", link: "/admin/order/create" },
      ],
    },
    // Refunds
    {
      name: "Refunds",
      nested: [
        {
          name: "Refund request",
          link: "/admin/refund-request",
        },
        {
          name: "Refund settings",
          link: "/admin/refund-settings",
        },
      ],
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

  const closeAllMenu = () => {
    items.forEach((item, index) => {
      console.log({ item, index });
      item.isOpen = false;
    });
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
                      naviagate(menu.link);
                      closeAllMenu();
                    }
                  }}
                  alignItems="center"
                  disableRipple
                  selected={menu.link ? pathname === menu.link : false}
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

export default AdminSidebar;
