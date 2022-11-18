import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import getAPI from "../app/api";

const initialState = {
  details: [],
  loading: false,
};

export const fetchData = createAsyncThunk("details/fetchData", async ({id}) => {
  console.log(id)
  const API = getAPI({req: `products/${id}`});
  const res = await axios.get(API);
  return res.data;
});

const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchData.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchData.fulfilled]: (state, { payload }) => {
      state.details = payload;
      state.isLoading = false;
    },
    [fetchData.rejected]: (state, action) => {
      state.isLoading = true;
      state.error = action.error.message;
    },
  },
});

export default detailSlice.reducer;
