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
      state.users = [...state.users, action.payload]
    },
    removeUser: (state, action: PayloadAction<number>) => {
      state.users.splice(action.payload, 1)
    } 
  },
});

export const { newUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
