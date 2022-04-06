import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import firebaseReducer from '../features/firebase/firebaseSlice';
import dataReducer from '../features/data/dataSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    firebase: firebaseReducer,
    storage: dataReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
