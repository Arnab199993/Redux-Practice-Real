import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      //we should not mutate state directly
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});
export default CartSlice.reducer;
export const { add, remove } = CartSlice.actions;
