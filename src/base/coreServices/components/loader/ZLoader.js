import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export const ZLoaderType = {
  circular: "circular",
  circularWithLabel: "circularWithLabel",
  linear: "linear",
};

export const ZLoaderColor = {
  primary: "primary",
  secondary: "secondary",
  error: "error",
  info: "info",
  success: "success",
  warning: "warning",
  inherit: "inherit",
};

export const ZLoaderVariant = {
  determinate: "determinate",
  indeterminate: "indeterminate",
};

export const ZLoaderLinearVariant = {
  ...ZLoaderVariant,
  buffer: "buffer",
  query: "query",
};

const ZLoader = ({
  color = ZLoaderColor.primary,
  labelValue,
  type = ZLoaderType.circular,
  value,
  valueBuffer,
  variant = ZLoaderVariant.indeterminate,
}) => {
  if (type === ZLoaderType.linear) {
    return (
      <Box sx={{ width: "100%" }}>
        <LinearProgress
          color={color}
          variant={variant}
          value={value}
          valueBuffer={valueBuffer}
        />
      </Box>
    );
  } else if (type === ZLoaderType.circularWithLabel) {
    return (
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress variant="determinate" color={color} value={value} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="caption" component="div" color="text.secondary">
            {labelValue}
          </Typography>
        </Box>
      </Box>
    );
  } else {
    return <CircularProgress color={color} variant={variant} />;
  }
};

export default ZLoader;
