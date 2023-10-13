import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const baseUrl = import.meta.env.VITE_BASE_URL;
import axios from "axios";

const initialState = {
  user: {},
  users: [],
  pagination: {},
};

// First, create the thunk
export const loginUser = createAsyncThunk("user/get", async (userInfo) => {
  const res = await axios
    .post("http://localhost:5000/auth/login", userInfo, {
      withCredentials: true,
    })
    .then((res) => res)
    .catch((err) => console.log({ err }));
  return res.data;
});

export const getCustomers = createAsyncThunk(
  "user-customer/get",
  async (page, role) => {
    const res = await axios
      .get(`${baseUrl}/users/customer?role=admin`, {
        withCredentials: true,
      })
      .then((res) => res)
      .catch((err) => console.log({ err }));
    return res.data;
  }
);

export const getFilterdCustomers = createAsyncThunk(
  "customers_filterd/get",
  async (page, role) => {
    const res = await axios
      .get(`${baseUrl}/users/customer?page=${page}&role=admin`, {
        withCredentials: true,
      })
      .then((res) => res)
      .catch((err) => console.log({ err }));
    return res.data;
  }
);

export const logOutUser = createAsyncThunk("user/logout", async () => {
  const res = await axios
    .get(`${baseUrl}/user/logout`, {
      withCredentials: true,
    })
    .then((res) => res)
    .catch((err) => console.log({ err }));
  return res.data;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(getCustomers.fulfilled, (state, action) => {
      state.users = action.payload.users;
      state.pagination = action.payload.pagination;
    });
    builder.addCase(getFilterdCustomers.fulfilled, (state, action) => {
      state.users = action.payload.users;
      state.pagination = action.payload.pagination;
    });
  },
});

export default userSlice.reducer;
