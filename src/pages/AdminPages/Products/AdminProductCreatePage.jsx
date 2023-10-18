import { useEffect, useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
// eslint-disable-next-line no-unused-vars
import { toast } from "react-toastify";

import {
  Box,
  Grid,
  Paper,
  Typography,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../../../Redux/Slices/productCategorySlice";
import { createProduct } from "../../../Redux/Slices/productSlice";

const AdminProductCreatePage = () => {
  const [productImage, setProductImage] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    console.log({ acceptedFiles });
    setProductImage(acceptedFiles);
  }, []);

  const dispatch = useDispatch();
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  const {
    register,
    handleSubmit,
    // watch,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      sale_price: "",
      regular_price: "",
      tag: "",
      stock: "",
      description: "",
      category: "",
    },
  });

  const categories = useSelector(
    (state) => state.productCategorySlice.categories
  );

  useEffect(() => {
    dispatch(getCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async (data) => {
    const {
      name,
      description,
      sale_price,
      regular_price,
      stock,
      tag,
      category,
    } = data;
    const formData = new FormData();

    productImage.forEach((element) => {
      formData.append("product_image", element);
    });
    formData.append("name", name);
    formData.append("description", description);
    formData.append("category", category._id);
    formData.append("sale_price", sale_price);
    formData.append("regular_price", regular_price);
    formData.append("tag", tag);
    formData.append("stock", stock);

    // console.log({
    //   productImage,
    //   name,
    //   sale_price,
    //   regular_price,
    //   stock,
    //   tag,
    //   description,
    //   category,
    // });

    dispatch(createProduct(formData));

    // console.log(formData.get("category"));

    reset();
  };

  return (
    <div>
      <Typography variant="h5" fontWeight="bold">
        Add New Product
      </Typography>
      <Box>
        <Paper>
          <Box sx={{ padding: "25px" }} gap={2}>
            <Grid container spacing={2}>
              <Grid item xs={6} md={6}>
                <TextField
                  label="Name"
                  type="text"
                  fullWidth
                  {...register("name", { required: "Please enter name" })}
                  name="name"
                  error={errors.name}
                  helperText={errors.name?.message}
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <TextField
                  select
                  fullWidth
                  label="Select"
                  defaultValue=""
                  inputProps={register("category", {
                    required: "Please enter category",
                  })}
                  name="category"
                  error={errors.category}
                  helperText={errors.category?.message}
                >
                  {categories.map((category) => (
                    <MenuItem key={category._id} value={category}>
                      {category.name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12} md={12}>
                <Box
                  sx={{
                    height: "250px",
                    width: "100%",
                    backgroundColor: "#f6f9fc",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px solid red",
                    borderRadius: "10px",
                  }}
                >
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    {isDragActive ? (
                      <p>Drop the files here ...</p>
                    ) : (
                      <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        gap={4}
                      >
                        <Typography
                          variant="h6"
                          fontWeight="bold"
                          align="center"
                        >
                          Drag or select product images.
                        </Typography>
                        <Button
                          variant="outlined"
                          size="medium"
                          color="primary"
                        >
                          Upload images
                        </Button>
                        <Typography
                          variant="p"
                          //   fontWeight="bold"
                          align="center"
                        >
                          Upload 280*280 image
                        </Typography>
                      </Box>
                    )}
                  </div>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={5}
                  label="description"
                  type="textField"
                  name="description"
                  {...register("description", {
                    required: "Please enter description",
                  })}
                  error={errors.description}
                  helperText={errors.description?.message}
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <TextField
                  label="Stock"
                  type="text"
                  fullWidth
                  name="stock"
                  {...register("stock", {
                    required: "Please enter stock",
                  })}
                  error={errors.stock}
                  helperText={errors.stock?.message}
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <TextField
                  label="Tag"
                  type="text"
                  //   autoComplete="current-password"
                  fullWidth
                  {...register("tag")}
                  name="tag"
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <TextField
                  id="outlined-select-currency"
                  label="Regular price"
                  type="text"
                  //   defaultValue="EUR"
                  //   helperText="Please select your currency"
                  fullWidth
                  name="regular_price"
                  {...register("regular_price", {
                    required: "Please enter regular price",
                  })}
                  error={errors.regular_price}
                  helperText={errors.regular_price?.message}
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <TextField
                  label="Sale price"
                  type="text"
                  //   defaultValue="EUR"
                  //   helperText="Please select your currency"
                  fullWidth
                  {...register("sale_price")}
                  name="sale_price"
                />
              </Grid>
            </Grid>
            <Button
              variant="contained"
              size="medium"
              sx={{ marginTop: "25px" }}
              onClick={handleSubmit(onSubmit)}
            >
              Submit
            </Button>
          </Box>
        </Paper>
      </Box>
    </div>
  );
};

export default AdminProductCreatePage;
