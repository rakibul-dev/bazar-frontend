import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const baseUrl = import.meta.env.VITE_BASE_URL;
import axios from "axios";

const initialState = {
  products: [],
  pagination: {},
};

export const getProducts = createAsyncThunk("products/get", async () => {
  const res = await axios
    .get(`${baseUrl}/products`, { withCredentials: true })
    .then((res) => res)
    .catch((err) => console.log({ err }));

  return res.data;
});

export const createProduct = createAsyncThunk(
  "product/create",
  async (formData) => {
    const res = await axios.post(`${baseUrl}/products/create`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    });
    return res.data;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.products = [...state.products, action.payload];
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export default productSlice.reducer;
