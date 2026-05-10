import { createSlice } from "@reduxjs/toolkit";
import { addUsers } from "../thunks/addUsers";
import type { UsersState } from "../../types/userTypes";
import { updateUser } from "../thunks/updateUser";

const initialState: UsersState = {
  dataUsers: [],
  error: null,
  loading: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.dataUsers = action.payload;
      })
      .addCase(addUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Произошла ошибка";
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        const updatedUser = action.payload;
        const index = state.dataUsers.findIndex(
          (user) => user.id === updatedUser.id,
        );
        if (index !== -1) {
          state.dataUsers[index] = updatedUser;
        }
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Ошибка обновления";
      });
  },
});

export default usersSlice.reducer;
