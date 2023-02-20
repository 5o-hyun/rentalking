import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "products",
  initialState: {
    data: null,
  },
  reducers: {
    setProducts: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const dataCategorySlice = createSlice({
  name: "categories",
  initialState: {
    data: null,
  },
  reducers: {
    setCategories: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setProducts } = dataSlice.actions;
export const { setCategories } = dataCategorySlice.actions;
