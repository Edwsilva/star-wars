import { createSlice } from "@reduxjs/toolkit";

const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    characters: {},
  },

  reducers: {
    setCharacters: (state, action) => {
      console.log("SET CHARACTERS", state);
      console.log(state);
      console.log(action);
      state.characters = action.payload;
      state.isLoading = false;
      state.nextUrl = action.payload.next;
      state.previousUrl = action.payload.previous;
      console.log("STATE FINAL ", state.characters);
    },

    isLoading: (state) => {
      console.log("IS LOADING ");
      state.isLoading = true;
    },
  },
});

export const { setCharacters, isLoading } = charactersSlice.actions;

export default charactersSlice.reducer;
