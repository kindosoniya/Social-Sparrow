import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  themeMode: "",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setThemeMode: (state, action) => {
      console.log(action.payload);
      state.themeMode = action.payload;
    },
  },
});

export const { setThemeMode } = themeSlice.actions;

export default themeSlice.reducer;
