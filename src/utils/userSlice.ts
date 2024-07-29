import { createSlice } from "@reduxjs/toolkit";
const userSLice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    removeUser: (state) => { // removed action from parameter , check if it disturbs
      return null;
    },
  },
});
export const { addUser, removeUser } = userSLice.actions;
export default userSLice.reducer;
