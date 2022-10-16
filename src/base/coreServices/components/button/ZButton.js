import * as React from "react";
import Button from "@mui/material/Button";

const ZButton = ({
  children,
  color,
  disabled,
  href,
  onClick,
  size,
  variant,
  startIcon,
  endIcon,
}) => {
  return (
    <Button
      onClick={onClick}
      variant={variant}
      color={color}
      disabled={disabled}
      href={href}
      size={size}
      startIcon={startIcon}
      endIcon={endIcon}
    >
      {children}
    </Button>
  );
};

export default ZButton;
