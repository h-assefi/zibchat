import { configureStore } from "@reduxjs/toolkit";
import routeReducer from "./reducers/routeSlice";
import adminLayoutSnackbarReducer from "./reducers/adminLayoutSnackbarSlice";

export default configureStore({
  reducer: {
    route: routeReducer,
    adminLayoutSnackbar: adminLayoutSnackbarReducer,
  },
});
