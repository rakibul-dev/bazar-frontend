import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slices/UserSlice";
import logger from "redux-logger";
const appStage = import.meta.env.VITE_APP_STAGES;

const store = configureStore({
  reducer: {
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: appStage !== "prod",
});

export default store;
