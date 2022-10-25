import { createSlice } from "@reduxjs/toolkit";

export const routeSlice = createSlice({
  name: "route",
  initialState: {
    routeName: "داشبورد",
  },
  reducers: {
    setRouteName: (state, action) => {
      state.routeName = action.payload;
    },
  },
});

export const { setRouteName } = routeSlice.actions;

export default routeSlice.reducer;
