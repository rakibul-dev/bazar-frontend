import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postReq from "../AxiosHelpers";
import axios from "axios";

const initialState = {
  user: {},
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

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export default userSlice.reducer;
