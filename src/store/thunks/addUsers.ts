import { createAsyncThunk } from "@reduxjs/toolkit";
import getUsersRequest from "../../api/getUsersRequest";
import type { User } from "../../types/userTypes";

export const addUsers = createAsyncThunk<User[], void, { rejectValue: string }>(
  "users/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getUsersRequest();
      return data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message || "Ошибка");
      }
    }
  },
);
