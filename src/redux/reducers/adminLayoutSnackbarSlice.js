import { createSlice } from "@reduxjs/toolkit";
import { ZSnackbarSeverity } from "src/base/coreServices/components/snackbar/ZSnackbar";

export const adminLayoutSnackbarSlice = createSlice({
  name: "adminLayoutSnackbar",
  initialState: {
    status: { show: false, message: "", severity: ZSnackbarSeverity.info },
  },
  reducers: {
    showSnackbar: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { showSnackbar } = adminLayoutSnackbarSlice.actions;

export default adminLayoutSnackbarSlice.reducer;
