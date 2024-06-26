"use client";
import React, { Suspense } from "react";
import { useGetUsersQuery } from "../lib/apis/users/userApi";
import { RootState, AppDispatch } from "@/app/lib/store";
import { useDispatch, useSelector } from "react-redux";
import { save_user } from "../lib/reducer/users/userSlice";

const Users = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, currentData, isLoading, isFetching } = useGetUsersQuery();
  const users = useSelector((state: RootState) => state.users);

  if (isLoading) {
    return <div>...Loading</div>;
  }

  const handleSaveUser = () => {
    if (data) dispatch(save_user(data));
  };

  console.log("users", users);

  return (
    <div>
      <button onClick={handleSaveUser}>觸發dispatch</button>
      <table className="table-auto text-center">
        <thead>
          <tr>
            <th>userId</th>
            <th>id</th>
            <th>title</th>
            <th>completed</th>
          </tr>
        </thead>
        <tbody>
          {/* <Suspense fallback={<div>...fetching Data</div>}> */}
          {users &&
            users.map((list) => (
              <tr key={list.id}>
                <td>{list.userId}</td>
                <td>{list.id}</td>
                <td>{list.title}</td>
                <td>{list.completed ? "true" : "false"}</td>
              </tr>
            ))}
          {/* </Suspense> */}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
