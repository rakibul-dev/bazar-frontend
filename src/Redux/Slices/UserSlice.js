import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postReq from "../AxiosHelpers";
import axios from "axios";

const initialState = {
  user: { name: "haha" },
};

// First, create the thunk
const getUser = createAsyncThunk("user/get", async () => {
  const response = await postReq("/auth/login", {});
  return response.data;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload.data;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = userSlice.actions;

export default userSlice.reducer;
