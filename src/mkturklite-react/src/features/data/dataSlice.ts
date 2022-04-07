import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { listDatafiles } from './dataAPI';

interface DataFileEntry {
  fullPath: string;
  name: string;
}

export interface DataState {
  current: DataFileEntry;
  list: DataFileEntry[];
  entry: string;
}

const initialState: DataState = {
  current: { fullPath: '', name: '' },
  list: [],
  entry: 'mkturkfiles/datafiles',
};

export const listDataFilesAsync = createAsyncThunk(
  'storage/listDatafiles',
  async (entry: string) => {
    const datafilesList = await listDatafiles(entry);
    return datafilesList;
  }
);

export const dataSlice = createSlice({
  name: 'storage',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(listDataFilesAsync.fulfilled, (state, action) => {
      action.payload.sort((a, b) => {
        const tmpA = new Date(a.name.split('_')[0]);
        const tmpB = new Date(b.name.split('_')[0]);
        return tmpB.getTime() - tmpA.getTime();
      });
      state.list = action.payload;
      state.current = state.list[0];
    });
  },
});

export const selectEntry = (state: RootState) => state.storage.entry;
export const selectCurrentDatafile = (state: RootState) =>
  state.storage.current;
export default dataSlice.reducer;

// export const dataSlice = createSlice({
//   name: 'data',

// })
