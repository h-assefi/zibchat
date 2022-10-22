import { InputAdornment } from "@mui/material";
import TextField from "@mui/material/TextField";
import * as React from "react";

export const ZTextFieldVariant = {
  outlined: "outlined",
  filled: "filled",
  standard: "standard",
};

export const ZTextFieldType = {
  search: "search",
  number: "number",
  password: "password",
  text: "text",
};

export const ZTextFieldSize = {
  small: "small",
  medium: "medium",
};

export const ZTextFieldColor = {
  error: "error",
  success: "success",
  warning: "warning",
  info: "info",
  primary: "primary",
  secondary: "secondary",
};

const ZTextField = React.forwardRef(
  (
    {
      color = ZTextFieldColor.primary,
      defaultValue,
      disabled,
      endIcon,
      error,
      fullWidth,
      helperText,
      id,
      label,
      maxRows,
      multiline,
      onChange,
      placeholder,
      readOnly = false,
      required = false,
      size = ZTextFieldSize.medium,
      startIcon,
      type,
      value,
      variant = ZTextFieldVariant.standard,
      ...rest
    },
    ref
  ) => {
    return (
      <TextField
        {...rest}
        color={color}
        defaultValue={defaultValue}
        disabled={disabled}
        error={error}
        fullWidth={fullWidth}
        helperText={helperText}
        id={id}
        InputProps={{
          readOnly: readOnly,
          startAdornment: startIcon && (
            <InputAdornment position="start">{startIcon}</InputAdornment>
          ),
          endAdornment: endIcon && (
            <InputAdornment position="end">{endIcon}</InputAdornment>
          ),
        }}
        ref={ref}
        label={label}
        maxRows={maxRows}
        multiline={multiline}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        type={type}
        value={value}
        variant={variant}
        size={size}
      ></TextField>
    );
  }
);

export default ZTextField;
