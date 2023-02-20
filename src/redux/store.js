import { configureStore } from "@reduxjs/toolkit";
import { dataSlice, dataCategorySlice } from "./data";

export default configureStore({
  reducer: {
    products: dataSlice.reducer,
    categories: dataCategorySlice.reducer,
  },
});
