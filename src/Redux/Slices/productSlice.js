import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
  categories: [],
};

// First, create the thunk
export const getCategories = createAsyncThunk(
  "product-categories/get",
  async () => {
    const res = await axios
      .get("http://localhost:5000/categories")
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
  },
});

export default productCategorySlice.reducer;
