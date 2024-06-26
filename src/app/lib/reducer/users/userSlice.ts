import { User } from "./../../types/user";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: Array<User> = [];

export const userReducer = createSlice({
  name: "users",
  initialState,
  reducers: {
    save_user: (state, action: PayloadAction<User[]>) => {
      return [...action.payload];
    },
  },
});

export const { save_user } = userReducer.actions;

export default userReducer.reducer;
