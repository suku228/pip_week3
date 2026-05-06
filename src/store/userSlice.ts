import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { UserRoleAndPermission } from '../types/UserRoleAndPermission';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    role: '',
    permissions: [] as string[],
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