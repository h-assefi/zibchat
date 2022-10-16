import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

export const Severity = {
  error: "error",
  success: "success",
  warning: "warning",
  info: "info",
};

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ZSnackbar = ({
  action,
  alert,
  duration = 5000,
  message,
  onClose,
  open,
  severity,
}) => {
  if (alert) {
    return (
      <Snackbar
        open={open}
        autoHideDuration={duration}
        onClose={onClose}
        message={message}
        action={action}
      />
    );
  } else {
    return (
      <Snackbar open={open} autoHideDuration={duration} onClose={onClose}>
        <Alert severity={"success"} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    );
  }
};

export default ZSnackbar;
