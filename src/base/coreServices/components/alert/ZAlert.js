import * as React from "react";
import Alert from "@mui/material/Alert";

export const ZAlertVariant = {
  standard: "standard",
  outlined: "outlined",
  filled: "filled",
};

export const ZAlertSeverity = {
  error: "error",
  success: "success",
  warning: "warning",
  info: "info",
};

export const ZAlertColor = {
  error: "error",
  success: "success",
  warning: "warning",
  info: "info",
};

const ZAlert = ({
  children,
  color,
  elevation,
  forwardedRef,
  iconShow,
  severity,
  sx,
  variant,
}) => {
  return (
    <Alert
      elevation={elevation ?? 6}
      ref={forwardedRef}
      variant={variant ?? "standard"}
      color={color}
      icon={iconShow ?? true}
      sx={sx}
      severity={severity}
    >
      {children}
    </Alert>
  );
};

export default ZAlert;
