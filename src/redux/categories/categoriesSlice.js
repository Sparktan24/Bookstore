import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: 'Under construction',
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    getStatus: (state) => state.status,
  },
});

export const { getStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
