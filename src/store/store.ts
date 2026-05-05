import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import userListReducer  from './userListSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    userList: userListReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;