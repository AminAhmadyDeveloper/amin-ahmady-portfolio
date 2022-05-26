import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    modal: false,
    scroll: "auto",
  },
  reducers: {
    toggleModal: (state) => {
      state.modal = !state.modal;
      state.scroll = state.scroll == "auto" ? "hidden" : "auto";
      document.body.style.overflow = state.scroll;
    },
  },
});

export const { toggleModal } = modalSlice.actions;

export default modalSlice.reducer;
