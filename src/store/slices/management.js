import { createSlice } from "@reduxjs/toolkit";

const management = createSlice({
  name: "ui",
  initialState: {
    language: "es",
    content: {},
    modalIsOpen: false,
  },
  reducers: {
    setUiLanguage: (state, action) => {
      state.language = action.payload;
    },
    setUiContent: (state, action) => {
      state.content = action.payload;
    },
    toggleModal: (state, action) => {
      state.modalIsOpen = action.payload;
    },
  },
});

export const userActions = management.actions;

export const userReducer = management.reducer;
