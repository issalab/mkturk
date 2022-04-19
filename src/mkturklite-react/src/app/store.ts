import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
// import firebaseReducer from '../features/firebase/firebaseSlice';
import dataReducer from '../features/data/dataSlice';
import { dataApiSlice } from '../features/data/dataApiSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    storage: dataReducer,
    [dataApiSlice.reducerPath]: dataApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dataApiSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
