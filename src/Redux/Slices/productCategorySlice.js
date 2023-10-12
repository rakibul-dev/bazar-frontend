import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const baseUrl = import.meta.env.VITE_BASE_URL;
import axios from "axios";

const initialState = {
  categories: [],
};

export const createProductCategory = async (categoryInfo) => {
  const res = await axios
    .post(`${baseUrl}/categories/create`, categoryInfo, {
      withCredentials: true,
    })
    .then((res) => res)
    .catch((err) => console.log({ err }));
  return res.data;
};

export const getCategories = createAsyncThunk(
  "product-categories/get",
  async () => {
    const res = await axios
      .get(`${baseUrl}/categories`)
      .then((res) => res)
      .catch((err) => console.log({ err }));
    return res.data;
  }
);

export const updateCategory = createAsyncThunk(
  "product-categories/update",
  async () => {
    const res = await axios
      .get(`${baseUrl}/categories`)
      .then((res) => res)
      .catch((err) => console.log({ err }));
    return res.data;
  }
);

export const deleteCategory = createAsyncThunk(
  "product-categories/delete",
  async (id) => {
    const res = await axios
      .delete(`${baseUrl}/categories/${id}`, { withCredentials: true })
      .then((res) => res)
      .catch((err) => console.log({ err }));
    return res.data;
  }
);

export const productCategorySlice = createSlice({
  name: "product-category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
    builder.addCase(deleteCategory.fulfilled, (state, action) => {
      const filteredArr = state.categories.filter(
        (category) => category._id !== action.payload._id
      );
      console.log({ filteredArr });
      state.categories = filteredArr;
    });
  },
});

export default productCategorySlice.reducer;
