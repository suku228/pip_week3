import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { IUser } from '../types/IUser';
import userList from '../mock-data/usersMock.json';

export const userListSlice = createSlice({
  name: 'userList',
  initialState: {
    users: userList as IUser[]
  },
  reducers: {
    setUsers: (state, action: PayloadAction<{users: IUser[]}>) => {
      state.users = action.payload.users;
    }
  },
});


export const { setUsers } = userListSlice.actions;
export default userListSlice.reducer;