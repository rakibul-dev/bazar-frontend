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
  Stack,
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

const AdminProductReview = () => {
  return (
    <>
      <Box display="flex" flexDirection="column" gap={2}>
        <Typography variant="h5" fontWeight="bold">
          Product Reviews
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: "100%" }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell align="left">Customer</TableCell>
                <TableCell align="left">Comment</TableCell>
                <TableCell align="left">Published</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">
                    <Stack direction="row" gap={1} alignItems="center">
                      <Avatar
                        src="data:image/jpeg;base64,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"
                        variant="rounded"
                        //   sx={{ width: 50, height: 50 }}
                      />
                      <Typography variant="p" fontWeight="bold">
                        ASUS ROG Strix G15
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell align="left">
                    <Typography variant="h6" fontSize="14px" fontWeight="bold">
                      Yamaha
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography variant="p">
                      “But I must explain to you how all this of denouncing
                      pleasure.”
                    </Typography>
                    {/* <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUFxLcXGTWXaindZOgmsRyenoMTwSHcZ7Qf_8eUqqvxjZaGNo-4RhGBozJqS5KfbX75bI&usqp=CAU"
                      alt=""
                      height="35px"
                      width="80px"
                    /> */}
                  </TableCell>

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

export default AdminProductReview;
