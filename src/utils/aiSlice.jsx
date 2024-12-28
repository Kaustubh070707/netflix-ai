import { createSlice } from "@reduxjs/toolkit";

const aiSlice = createSlice({
  name: "ai",
  initialState: {
    showAiSearch: false,
    aiMovies: null,
  },
  reducers: {
    toggleAiSearchView(state, action) {
      state.showAiSearch = !state.showAiSearch;
    },
    addAiMovieResult: (state, action) => {
      state.aiMovies = action.payload;
    },
  },
});

export const { toggleAiSearchView, addAiMovieResult } = aiSlice.actions;

export default aiSlice.reducer;
