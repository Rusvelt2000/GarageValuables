import { createSlice } from "@reduxjs/toolkit";

const valuableListSlice = createSlice({
  name: "valuableList",
  initialState: {
    valuables: [],
    valuableSearchTerm: "",
  },
  reducers: {
    addValuable(state, action) {
      state.valuables.push({
        name: action.payload.name,
        cost: action.payload.cost,
      });
    },
    removeValuable(state, action) {
      const update = state.valuables.filter((valuable) => {
        return valuable.id !== action.payload;
      });
      state.valuables = update;
    },
  },
});

export const { addValuable, removeValuable } = valuableListSlice.actions;
export const valuableListReducer = valuableListSlice.reducer;
