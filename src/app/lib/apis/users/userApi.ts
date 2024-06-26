import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../../types/user";
import { save_user } from "../../reducer/users/userSlice";

export const userApi = createApi({
  reducerPath: "userApi", // 不可與slice的name重複
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/todos",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => ``,
      transformResponse: (res: User[]) => res,
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(save_user(data));
        } catch (error) {
          console.error("fetch users error", error);
        }
      },
    }),
  }),
});

export const { useGetUsersQuery } = userApi;

// Example: https://redux-toolkit.js.org/tutorials/rtk-query
