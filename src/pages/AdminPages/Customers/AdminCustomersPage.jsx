import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import Fab from "@mui/material/Fab";

const rows = [
  {
    name: "Rakib",
    phone: "0171828****1",
    ordersCount: 10,
    email: "mdrakibul.dev@gmail.com",
  },
];
const AdminCustomersPage = () => {
  return (
    <>
      <Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: "100%" }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="left">Phone number</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left">No of orders</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {/* <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell> */}
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="left">{row.phone}</TableCell>
                  <TableCell align="left">{row.email}</TableCell>
                  <TableCell align="left">{row.ordersCount}</TableCell>
                  <TableCell align="center">
                    <Fab
                      size="small"
                      color="primary"
                      aria-label="add"
                      disableRipple
                      disableFocusRipple
                    >
                      <AddIcon />
                    </Fab>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default AdminCustomersPage;
