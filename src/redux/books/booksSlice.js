import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const appKey = 'hJLD5bnJVUBuazb5SvIz';

const initialState = {
  books: [],
};

export const addBook = createAsyncThunk('books/addBook', async (data) => {
  await axios.post(`${url + appKey}/books`, data);
  return data;
});

export const getBooks = createAsyncThunk(
  'books/getBooks',
  async (_, { rejectWithValue }) => {
    try {
      const resp = await axios(`${url + appKey}/books`); //  url + appKey + '/books'
      return resp.data;
    } catch (error) {
      return rejectWithValue(error.resp.data);
    }
  },
);

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBooks.fulfilled, (state, action) => {
      state.books = action.payload;
    });
  },
});

export default booksSlice.reducer;
