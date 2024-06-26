import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./apis/users/userApi";
import rootReducer from "./reducer/rootReducer";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
