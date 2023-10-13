import {
  Box,
  Chip,
  Switch,
  Button,
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
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategories,
  deleteCategory,
  featuredCategoryStatusUpdate,
} from "../../../Redux/Slices/productCategorySlice";

const AdminCategoryPage = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [selectedForDelete, setSelectedForDelete] = useState();
  const { categories } = useSelector((state) => state.productCategorySlice);

  const handleClickOpen = (category) => {
    console.log(category);
    setOpen(true);
    setSelectedForDelete(category);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCategoryDelete = () => {
    dispatch(deleteCategory(selectedForDelete._id));
    setOpen(false);
  };

  const handleFeaturedCategory = (id) => {
    dispatch(featuredCategoryStatusUpdate(id));
  };
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  return (
    <>
      <Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: "100%" }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Image</TableCell>
                <TableCell align="left">Featured</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categories?.map((category) => (
                <TableRow
                  key={category._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{category._id}</TableCell>
                  <TableCell align="left">
                    <Typography variant="h6" fontSize="14px" fontWeight="bold">
                      {category.name}
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Avatar
                      src={category.image}
                      variant="rounded"
                      //   sx={{ width: 50, height: 50 }}
                    />
                  </TableCell>

                  <TableCell align="left">
                    <Switch
                      size="small"
                      checked={category.featured}
                      onChange={() => handleFeaturedCategory(category._id)}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <Fab
                      size="small"
                      color="primary"
                      aria-label="add"
                      disableRipple
                      disableFocusRipple
                      onClick={() => {
                        handleClickOpen(category);
                      }}
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
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Use Google's location service?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={handleCategoryDelete} autoFocus>
              Delete category
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default AdminCategoryPage;
