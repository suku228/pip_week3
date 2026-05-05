import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { UserRoleAndPermission } from '../types/UserRoleAndPermission';
// import type { IUser } from '../types/IUser';
// import userList from '../mock-data/usersMock.json';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    role: '',
    permissions: [] as string[],
    // users: userList as IUser[]
  },
  reducers: {
    setUser: (state, action: PayloadAction<UserRoleAndPermission>) => {
      state.role = action.payload.role;
      state.permissions = action.payload.permissions;
    }
  },
});


export const { setUser } = userSlice.actions;
export default userSlice.reducer;