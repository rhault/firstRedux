import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "count",
  initialState: {
    counter: 0
  },
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    }
  }
});

export const { increment, decrement } = slice.actions;

export const stateCounter = (state) => state.count;

export default slice.reducer;
