import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

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
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    console.log({ acceptedFiles });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });
  const currencies = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];
  return (
    <>
      <Box display="flex" flexDirection="column" gap={2}>
        <Typography variant="h5" fontWeight="bold">
          Add New Product
        </Typography>
        <Paper>
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
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Select"
                  //   defaultValue="EUR"
                  //   helperText="Please select your currency"
                  fullWidth
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
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
                >
                  Save category
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default AdminCategoryCreatePage;
