import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

export const ZSnackbarSeverity = {
  error: "error",
  success: "success",
  warning: "warning",
  info: "info",
};

export const ZSnackbarPosition = {
  topLeft: { vertical: "top", horizontal: "left" },
  topCenter: { vertical: "top", horizontal: "center" },
  topRight: { vertical: "top", horizontal: "right" },
  bottomLeft: { vertical: "bottom", horizontal: "left" },
  bottomCenter: { vertical: "bottom", horizontal: "center" },
  bottomRight: { vertical: "bottom", horizontal: "right" },
};

const ZSnackbar = ({
  action,
  alert,
  alertVariant,
  duration = 5000,
  message,
  onClose,
  open,
  position,
  severity,
  sx,
}) => {
  const Alert = React.forwardRef(function Alert(props, ref) {
    return (
      <MuiAlert
        elevation={6}
        ref={ref}
        variant={alertVariant ?? "standard"}
        {...props}
      />
    );
  });

  if (!alert) {
    return (
      <Snackbar
        action={action}
        open={open}
        autoHideDuration={duration}
        onClose={onClose}
        message={message}
        anchorOrigin={position}
        sx={sx}
      />
    );
  } else {
    return (
      <Snackbar open={open} autoHideDuration={duration} onClose={onClose}>
        <Alert severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    );
  }
};

export default ZSnackbar;
