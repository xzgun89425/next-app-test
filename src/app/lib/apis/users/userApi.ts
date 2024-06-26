import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../../types/user";
import { save_user } from "../../reducer/users/userSlice";

interface ErrorResponse {
  error: string;
}

export const userApi = createApi({
  reducerPath: "userApi", // 不可與slice的name重複
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.baseurl}/todos`,
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
      transformErrorResponse: (res): ErrorResponse => {
        if (res.status === 404) return { error: "Resource Not Found" };
        if (res.status === 500) return { error: "Internal Error" };
        return { error: "Unknown error" };
      },
    }),
  }),
});

export const { useGetUsersQuery } = userApi;

// Example: https://redux-toolkit.js.org/tutorials/rtk-query
