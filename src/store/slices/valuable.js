import { createSlice, nanoid } from "@reduxjs/toolkit";

const valuableSlice = createSlice({
  name: "valuable",
  initialState: {
    name: "",
    cost: 0,
    id: nanoid(),
  },
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
    setCost(state, action) {
      state.cost = action.payload;
    },
  },
});

export const { setName, setCost } = valuableSlice.actions;
export const valuableReducer = valuableSlice.reducer;
