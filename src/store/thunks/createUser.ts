import { createAsyncThunk } from "@reduxjs/toolkit";
import type { User, UserFormData } from "../../types/userTypes";
import createUserRequest from "../../api/createUserRequest";

export const createUser = createAsyncThunk<
  User,
  { userData: UserFormData },
  { rejectValue: string }
>("users/createUser", async ({ userData }, { rejectWithValue }) => {
  try {
    const data = await createUserRequest(userData);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message || "Ошибка");
    }
  }
});
