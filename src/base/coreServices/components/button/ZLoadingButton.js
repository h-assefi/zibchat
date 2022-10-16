import * as React from "react";
import LoadingButton from "@mui/lab/LoadingButton";

const ZLoadingButton = ({
  children,
  color,
  disabled,
  endIcon,
  href,
  loading,
  loadingIndicator,
  loadingPosition,
  onClick,
  size,
  startIcon,
  variant,
}) => {
  return (
    <LoadingButton
      onClick={onClick}
      variant={variant}
      color={color}
      disabled={disabled}
      href={href}
      size={size}
      startIcon={startIcon}
      endIcon={endIcon}
      loading={loading}
      loadingPosition={loadingPosition}
      loadingIndicator={loadingIndicator}
    >
      {children}
    </LoadingButton>
  );
};

export default ZLoadingButton;
