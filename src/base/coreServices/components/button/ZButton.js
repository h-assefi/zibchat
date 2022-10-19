import * as React from "react";
import Button from "@mui/material/Button";

export const ZButtonType = {
  submit: "submit",
  reset: "reset",
  button: "button",
};

export const ZButtonVariant = {
  text: "text",
  outlined: "outlined",
  contained: "contained",
};

export const ZButtonSize = {
  small: "small",
  medium: "medium",
  large: "large",
};

const ZButton = ({
  children,
  color,
  dir = "rtl",
  disabled,
  href,
  onClick,
  size,
  variant,
  startIcon,
  endIcon,
  type,
}) => {
  return (
    <Button
      onClick={onClick}
      variant={variant}
      color={color}
      dir={dir}
      disabled={disabled}
      href={href}
      size={size}
      startIcon={startIcon}
      endIcon={endIcon}
      type={type}
      style={{ fontSize: 16, textTransform: "none" }}
    >
      {children}
    </Button>
  );
};

export default ZButton;
