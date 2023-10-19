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
  Pagination,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect } from "react";
import { useSearchParams, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  getBrands,
  deleteBrand,
  setPageNumber,
  featuredBrandStatusUpdate,
  getFilterdBrands,
} from "../../../Redux/Slices/brandSlice";

const AdminBrandsPage = () => {
  const dispatch = useDispatch();
  const { myParam } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const { brands, pagination } = useSelector((state) => state.brandSlice);

  const pageNumber = searchParams.get("page");

  useEffect(() => {
    dispatch(getBrands());
  }, []);

  const handlePagiinationChange = (event, value) => {
    // dispatch(setPageNumber(value));
    setSearchParams({ page: value });
    dispatch(getFilterdBrands(value, "approved"));
  };

  const deleteBrandHandler = (brandId) => {
    dispatch(deleteBrand(brandId));
  };

  const handleFeaturedCategory = (id) => {
    dispatch(featuredBrandStatusUpdate(id));
  };
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap={2}
      >
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: "100%" }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Logo</TableCell>
                <TableCell align="left">Featured</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {brands ? (
                brands.map((brand) => (
                  <TableRow
                    key={brand._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">{brand._id}</TableCell>
                    <TableCell align="left">
                      <Typography
                        variant="h6"
                        fontSize="14px"
                        fontWeight="bold"
                      >
                        {brand.name}
                      </Typography>
                    </TableCell>
                    <TableCell align="left">
                      {/* <Avatar src="/images/watch.png" /> */}
                      <img
                        src={brand.image}
                        alt=""
                        height="35px"
                        width="80px"
                      />
                    </TableCell>

                    <TableCell align="left">
                      <Switch
                        size="small"
                        checked={brand.featured}
                        onChange={() => handleFeaturedCategory(brand._id)}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Fab
                        size="small"
                        color="primary"
                        aria-label="add"
                        disableRipple
                        disableFocusRipple
                        onClick={() => deleteBrandHandler(brand._id)}
                      >
                        <DeleteIcon />
                      </Fab>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <h2>Loading...</h2>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        {pagination.total_pages > 1 ? (
          <Pagination
            count={pagination.total_pages}
            page={pagination.page}
            onChange={handlePagiinationChange}
            color="primary"
          />
        ) : null}
      </Box>
    </>
  );
};

export default AdminBrandsPage;
