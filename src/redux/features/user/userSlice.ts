import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { userType } from '@/types';

export interface UserState {
  users: userType[];
}

const initialState: UserState = {
  users: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    newUser: (state, action: PayloadAction<userType>) => {
      [...state.users, action.payload];
    },
  },
});

export const { newUser } = userSlice.actions;

export default userSlice.reducer
