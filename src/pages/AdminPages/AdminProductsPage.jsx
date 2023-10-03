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
const AdminProductsPage = () => {
  return (
    <>
      <Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: "100%" }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="left">Category</TableCell>
                <TableCell align="left">Brand</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Product status</TableCell>
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
                    <Chip label="Chip Filled" color="primary" size="small" />
                  </TableCell>
                  <TableCell align="left">{row.email}</TableCell>
                  <TableCell align="left">{row.ordersCount}</TableCell>
                  <TableCell align="left">
                    <Switch size="small" />
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

export default AdminProductsPage;
