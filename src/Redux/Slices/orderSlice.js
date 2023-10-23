import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const baseUrl = import.meta.env.VITE_BASE_URL;
import axios from "axios";

const initialState = {
  orders: [],
  pagination: {},
};

export const getCustomerOrders = createAsyncThunk("orders/get", async (id) => {
  const res = await axios
    .get(`${baseUrl}/orders/customer/${id}`)
    .then((res) => res)
    .catch((err) => console.log({ err }));
  return res.data;
});

export const createOrder = createAsyncThunk(
  "orders/create",
  async ({ id, cartItems, totalAmount }) => {
    const res = await axios
      .post(
        `${baseUrl}/orders/customer/${id}`,
        { cartItems, totalAmount },
        { withCredentials: true }
      )
      .then((res) => res)
      .catch((err) => console.log({ err }));
    return res.data;
  }
);

const orderSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCustomerOrders.fulfilled, (state, action) => {
      state.orders = action.payload;
      //   state.pagination = action.payload.pagination;
    });
    builder.addCase(createOrder.fulfilled, (state, action) => {
      state.orders = action.payload;
    });
  },
});

export const {} = orderSlice.actions;
export default orderSlice.reducer;
