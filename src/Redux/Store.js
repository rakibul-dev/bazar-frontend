import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slices/UserSlice";
import productCategorySlice from "./Slices/productCategorySlice";
import brandSlice from "./Slices/brandSlice";
import logger from "redux-logger";
const appStage = import.meta.env.VITE_APP_STAGE;

const store = configureStore({
  reducer: {
    userSlice,
    productCategorySlice,
    brandSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: appStage !== "PROD",
});

export default store;
