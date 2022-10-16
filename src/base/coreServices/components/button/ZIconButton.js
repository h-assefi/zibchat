import * as React from "react";
import IconButton from "@mui/material/IconButton";

const ZIconButton = ({
  ariaLabel,
  children,
  color,
  disabled,
  edge = false,
  onClick,
  size,
  sx,
}) => {
  return (
    <IconButton
      onClick={onClick}
      color={color}
      disabled={disabled}
      size={size}
      aria-label={ariaLabel}
      edge={edge}
      sx={sx}
    >
      {children}
    </IconButton>
  );
};

export default ZIconButton;
