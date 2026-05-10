import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/usersSlice";
import modalReducer from "./slices/modalFormSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    modalForm: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
