import { createSlice } from "@reduxjs/toolkit";

const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    characters: [],
    isLoading: true,
    nextUrl:'',
    previousUrl:''
  },

  reducers: {
    getCharacters: (state) => {
      console.log('Estou no reducer')
      state.isLoading = true;

    },
    getCharactersSuccess: (state, action) => {
      state.characters = action.payload;
      state.isLoading = false;
      state.nextUrl = action.payload.next;
      state.previousUrl = action.payload.previous;
    },

    getCharactersFailure: (state) => {
      console.log("IS LOADING ");
      state.isLoading = false;
    },
  },
});

export const { getCharacters, getCharactersSuccess, getCharactersFailure} = charactersSlice.actions;

export default charactersSlice.reducer;
