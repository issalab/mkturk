import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loadFiles } from './dataAPI';

export interface DataState {
  current: any;
  list: any[];
}

const initialState: DataState = {
  current: {},
  list: [],
};

export const loadFilesAsync = createAsyncThunk(
  'storage/loadFiles',
  async () => {
    const response = await loadFiles();
    return response;
  }
);

export const dataSlice = createSlice({
  name: 'storage',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadFilesAsync.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export default dataSlice.reducer;

// export const dataSlice = createSlice({
//   name: 'data',

// })
