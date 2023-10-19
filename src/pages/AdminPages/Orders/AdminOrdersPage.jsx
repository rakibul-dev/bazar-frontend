import {
  Box,
  Chip,
  Switch,
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  Fab,
  Typography,
  Avatar,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

const rows = [
  {
    name: "Rakib",
    phone: "0171828****1",
    ordersCount: 10,
    email: "mdrakibul.dev@gmail.com",
  },
];

const AdminOrdersPage = () => {
  return (
    <>
      <Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: "100%" }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Order Id</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell align="left">Purchase Date</TableCell>
                <TableCell align="left">Delivery address</TableCell>
                <TableCell align="left">Amount</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="left">
                    <Typography variant="h6" fontSize="14px" fontWeight="bold">
                      Yamaha
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    {/* <Avatar src="/images/watch.png" /> */}
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUFxLcXGTWXaindZOgmsRyenoMTwSHcZ7Qf_8eUqqvxjZaGNo-4RhGBozJqS5KfbX75bI&usqp=CAU"
                      alt=""
                      height="35px"
                      width="80px"
                    />
                  </TableCell>
                  <TableCell align="left">
                    <Typography>Address</Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography>$100</Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Chip label="Pending" />
                  </TableCell>
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

export default AdminOrdersPage;
