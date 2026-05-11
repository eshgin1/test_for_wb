import { createSlice } from "@reduxjs/toolkit";
import type { ModalFormState } from "../../types/modalForm";

const initialState: ModalFormState = {
  status: false,
  user: null,
};

const modalFormSlice = createSlice({
  name: "modalForm",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.status = true;
      state.user = action.payload;
    },
    closeModal: (state) => {
      state.status = false;
      state.user = null;
    },
  },
});

export const { openModal, closeModal } = modalFormSlice.actions;
export default modalFormSlice.reducer;
