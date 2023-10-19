import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const baseUrl = import.meta.env.VITE_BASE_URL;
import axios from "axios";

const initialState = {
  cart: [],
  cartTotal: null,
};

export const getCartItems = createAsyncThunk("cart/get", async (userId) => {
  const res = await axios
    .get(`${baseUrl}/cart/${userId}`, { withCredentials: true })
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
export const incrementCartQuantity = createAsyncThunk(
  "cart-quantity/increment",
  async (item) => {
    const res = await axios
      .put(
        `${baseUrl}/cart/product/quantity/${item._id}`,
        { quantity: item.quantity + 1 },
        { withCredentials: true }
      )
      .then((res) => res)
      .catch((err) => console.log({ err }));

    return res.data;
  }
);
export const decrementCartQuantity = createAsyncThunk(
  "cart-quantity/decrement",
  async (item) => {
    const res = await axios
      .put(
        `${baseUrl}/cart/product/quantity/${item._id}`,
        { quantity: item.quantity - 1 },
        { withCredentials: true }
      )
      .then((res) => res)
      .catch((err) => console.log({ err }));

    return res.data;
  }
);

function calculateTotalPrice(items) {
  let totalPrice = 0;

  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    totalPrice += item.price * item.quantity;
  }

  return totalPrice;
}

const items = [
  { name: "shirt", price: 200, quantity: 10 },
  { name: "shirt", price: 200, quantity: 5 },
];

const totalPrice = calculateTotalPrice(items);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCartItems.fulfilled, (state, action) => {
      state.cart = action.payload;
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.cart = [...state.cart, action.payload];
    });
    builder.addCase(incrementCartQuantity.fulfilled, (state, action) => {
      //   state.cart = [...state.cart, action.payload];
      state.cart.forEach((item, index) => {
        if (item._id == action.payload._id) {
          state.cart[index] = action.payload;
        }
      });
    });
    builder.addCase(decrementCartQuantity.fulfilled, (state, action) => {
      //   state.cart = [...state.cart, action.payload];
      state.cart.forEach((item, index) => {
        if (item._id == action.payload._id) {
          state.cart[index] = action.payload;
        }
      });
    });
  },
});

export const {} = cartSlice.actions;
export default cartSlice.reducer;
