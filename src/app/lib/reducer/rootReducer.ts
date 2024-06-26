import { combineReducers } from "@reduxjs/toolkit";
import { userApi } from "../apis/users/userApi";
import userSlice from "./users/userSlice";

const rootReducer = combineReducers({
  users: userSlice,
  [userApi.reducerPath]: userApi.reducer,
});

export default rootReducer;
