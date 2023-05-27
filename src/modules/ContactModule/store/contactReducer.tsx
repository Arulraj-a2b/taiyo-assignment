import { createSlice } from "@reduxjs/toolkit";

const userInitialState: any = {
  data: [],
};

export const contactReducer = createSlice({
  name: "contact_data",
  initialState: userInitialState,
  reducers: {
    addContact: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { addContact } = contactReducer.actions;

export const contactReducers = contactReducer.reducer;
