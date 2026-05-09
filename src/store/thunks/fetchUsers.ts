import { createAsyncThunk } from "@reduxjs/toolkit";
import getUsers from "../../api/getUsers";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getUsers();
      console.log(data);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
