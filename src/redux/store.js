import { configureStore } from "@reduxjs/toolkit";
import routeReducer from "./reducers/routeSlice";

export default configureStore({
  reducer: {
    route: routeReducer,
  },
});
