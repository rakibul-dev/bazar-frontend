import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  brands: [],
  pagination: {},
};

// First, create the thunk
export const getBrands = createAsyncThunk("brands/get", async () => {
  const res = await axios
    .get("http://localhost:5000/brands")
    .then((res) => res)
    .catch((err) => console.log({ err }));
  return res.data;
});

export const getFilterdBrands = createAsyncThunk(
  "brands_filterd/get",
  async (page, status) => {
    const res = await axios
      .get(`http://localhost:5000/brands?page=${page}&status=${status}`)
      .then((res) => res)
      .catch((err) => console.log({ err }));
    return res.data;
  }
);

export const deleteBrand = createAsyncThunk(
  "brands/delete",
  async (brandId) => {
    const res = await axios
      .delete(
        `http://localhost:5000/brands/${brandId}`,

        { withCredentials: true }
      )
      .then((res) => res)
      .catch((err) => console.log({ err }));
    return res.data;
  }
);

export const createBrand = createAsyncThunk(
  "brands/create",
  async (formData) => {
    const res = await axios.post(
      "http://localhost:5000/brands/create",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      }
    );
    return res.data;
  }
);

export const brandSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {
    setPageNumber: (state, action) => {
      console.log({ action });
      //   state.pagination.pagination = 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBrands.fulfilled, (state, action) => {
      state.brands = action.payload.brands;
      state.pagination = action.payload.pagination;
    });
    builder.addCase(createBrand.fulfilled, (state, action) => {
      state.brands = [...state.brands, action.payload];
    });
    builder.addCase(deleteBrand.fulfilled, (state, action) => {
      const filteredArr = state.brands.filter(
        (brand) => brand._id !== action.payload._id
      );
      console.log({ filteredArr });
      state.brands = filteredArr;
    });
    builder.addCase(getFilterdBrands.fulfilled, (state, action) => {
      state.brands = action.payload.brands;
      state.pagination = action.payload.pagination;
    });
  },
});

export const { setPageNumber } = brandSlice.actions;
export default brandSlice.reducer;
