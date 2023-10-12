import { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Pagination } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import Fab from "@mui/material/Fab";
import { useSearchParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import {
  getCustomers,
  getFilterdCustomers,
} from "../../../Redux/Slices/UserSlice";

const AdminCustomersPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.userSlice);
  useEffect(() => {
    dispatch(getCustomers());
  }, []);
  const handlePagiinationChange = (event, value) => {
    // dispatch(setPageNumber(value));
    setSearchParams({ page: value });
    dispatch(getFilterdCustomers(value, "customer"));
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
        gap={2}
      >
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
              {users?.map((user) => (
                <TableRow
                  key={user._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {/* <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell> */}
                  <TableCell align="left">{user.name}</TableCell>
                  <TableCell align="left">{user.phone}</TableCell>
                  <TableCell align="left">{user.email}</TableCell>
                  <TableCell align="left">{user.ordersCount}</TableCell>
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
        <Pagination
          //   count={}
          //   page={page}
          onChange={handlePagiinationChange}
          color="primary"
        />
      </Box>
    </>
  );
};

export default AdminCustomersPage;
