import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const baseUrl = import.meta.env.VITE_BASE_URL;
import axios from "axios";

const initialState = {
  cart: [],
};

export const getCartItems = createAsyncThunk("cart/get", async () => {
  const res = await axios
    // .get(`${baseUrl}` + "/products")
    .get(`${baseUrl}/cart/:userId`, { withCredentials: true })
    .then((res) => res)
    .catch((err) => console.log({ err }));

  return res.data;
});

export const addToCart = createAsyncThunk(
  "cart/add",
  async ({ userId, productId }) => {
    const res = await axios
      .post(
        `${baseUrl}/cart/${userId}`,
        { product: productId },
        { withCredentials: true }
      )
      .then((res) => res)
      .catch((err) => console.log({ err }));

    return res.data;
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCartItems.fulfilled, (state, action) => {
      state.cart = action.payload.cart;
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.cart = [...state.cart, action.payload];
    });
  },
});

export const {} = cartSlice.actions;
export default cartSlice.reducer;
