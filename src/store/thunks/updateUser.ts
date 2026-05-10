import { createAsyncThunk } from "@reduxjs/toolkit";
import type { User, UserFormData } from "../../types/userTypes";
import updateUserRequest from "../../api/updateUserRequest";

export const updateUser = createAsyncThunk<
  User,
  { id: string; updatedData: UserFormData },
  { rejectValue: string }
>("users/updateUser", async ({ id, updatedData }, { rejectWithValue }) => {
  try {
    const data = await updateUserRequest(id, updatedData);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message || "Ошибка");
    }
  }
});
