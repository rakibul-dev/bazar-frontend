import { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import axios from "axios";
import { getCategories } from "../../../Redux/Slices/productCategorySlice";
import { useDispatch, useSelector } from "react-redux";

import {
  Box,
  Grid,
  Paper,
  Typography,
  TextField,
  MenuItem,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
const AdminCategoryCreatePage = () => {
  const dispatch = useDispatch();
  const [categoryImage, setCategoryImage] = useState(null);
  const categories = useSelector(
    (state) => state.productCategorySlice.categories
  );
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const onSubmit = async (data) => {
    // console.log(data);
    const { name, parent } = data;
    const formData = new FormData();
    formData.append("category-image", categoryImage);
    formData.append("name", name);
    formData.append("parent", parent);

    // data.categoryImage = categoryImage;

    const response = await axios.post(
      "http://localhost:5000/categories/create",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      }
    );

    console.log({ response });
  };
  console.log(watch("example"));

  const onDrop = useCallback((acceptedFiles) => {
    setCategoryImage(acceptedFiles[0]);
    console.log(categoryImage);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  return (
    <>
      {/* <img src="https://bazar-ghat.s3.amazonaws.com/1357.jpg" alt="aws s3" /> */}
      <Box display="flex" flexDirection="column" gap={2}>
        <Typography variant="h5" fontWeight="bold">
          Add New Product
        </Typography>
        {/* <Paper> */}
        <Box
          sx={{
            padding: "25px",
          }}
          gap={2}
        >
          <Grid container spacing={2}>
            <Grid item xs={6} md={6}>
              <TextField
                id="outlined-password-input"
                label="Name"
                type="text"
                autoComplete="current-password"
                fullWidth
                {...register("name")}
                name="name"
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <TextField
                id="outlined-select-currency"
                select
                label="Select"
                defaultValue="EUR"
                // helperText="Please select your currency"
                fullWidth
                {...register("parent")}
                name="parent"
              >
                {categories
                  ? categories.map((option) => (
                      <MenuItem
                        key={option.id}
                        value={option.name}
                        onClick={() => {
                          console.log(option);
                        }}
                      >
                        {option.name}
                      </MenuItem>
                    ))
                  : null}
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
                  {/* <input {...getInputProps()} /> */}
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
                      <Typography variant="h6" fontWeight="bold" align="center">
                        Drag or select product images.
                      </Typography>
                      <Button variant="outlined" size="medium" color="primary">
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
            <Grid item md={12}>
              <FormControlLabel
                control={<Checkbox />}
                label="Label"
                onChange={(e) => console.log(e.target.value)}
              />
            </Grid>
            <Grid item md={12}>
              <Button
                variant="contained"
                size="medium"
                sx={{ marginTop: "15px" }}
                onClick={handleSubmit(onSubmit)}
              >
                Save category
              </Button>
            </Grid>
          </Grid>
        </Box>
        {/* </Paper> */}
      </Box>
    </>
  );
};

export default AdminCategoryCreatePage;
