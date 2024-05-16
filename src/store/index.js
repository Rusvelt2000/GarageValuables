import { configureStore } from "@reduxjs/toolkit";
import {
  valuableListReducer,
  addValuable,
  removeValuable,
} from "./slices/valuablesList";
import { valuableReducer, setName, setCost } from "./slices/valuable";

const store = configureStore({
  reducer: {
    valuable: valuableReducer,
    valuableList: valuableListReducer,
  },
});

export { store, addValuable, removeValuable, setName, setCost };
