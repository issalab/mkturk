import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { create } from 'domain';
import { RootState } from '../../app/store';
import { listDatafiles, loadDatafile } from './dataAPI';
import { useAppDispatch } from '../../app/hooks';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';

interface DataFileEntry {
  fullPath: string;
  name: string;
  metadata?: string;
  data?: unknown;
}

export interface DataState {
  current: DataFileEntry;
  list: DataFileEntry[];
  entry: string;
  note: string;
}

const initialState: DataState = {
  note: '',
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

export const loadDatafileAsync = createAsyncThunk(
  'storage/loadDatafile',
  async (entry: DataFileEntry) => {
    return await loadDatafile(entry);
  }
);

export const checkFileStatusAsync = createAsyncThunk(
  'storate/checkFileStatus',
  async (entry: DataFileEntry) => {
    return;
  }
);

export const dataSlice = createSlice({
  name: 'storage',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(listDataFilesAsync.fulfilled, (state, action) => {
        action.payload.sort((a, b) => {
          const tmpA = new Date(a.name.split('_')[0]);
          const tmpB = new Date(b.name.split('_')[0]);
          return tmpB.getTime() - tmpA.getTime();
        });
        state.list = action.payload;
        state.current = state.list[0];
      })
      .addCase(loadDatafileAsync.fulfilled, (state, action) => {
        state.current.data = action.payload;
        state.current.fullPath = action.payload.DataFileName;
        state.current.name =
          action.payload.DataFileName.split('/').slice(-1)[0];
      })
      .addCase(loadDatafileAsync.rejected, (state, action) => {
        console.log(state, action);
      });
  },
});

export const selectEntry = (state: RootState) => state.storage.entry;
export const selectCurrentDatafile = (state: RootState) =>
  state.storage.current;
export const selectCurrentData = (state: RootState) => {
  if (state.storage.current.data) {
    return state.storage.current.data;
  }
};
export const selectFileList = (state: RootState) => {
  if (state.storage.list.length > 0) {
    return state.storage.list;
  }
};
export default dataSlice.reducer;

// export const dataSlice = createSlice({
//   name: 'data',

// })
