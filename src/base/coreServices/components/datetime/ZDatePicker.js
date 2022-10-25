import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import AdapterJalali from "@date-io/date-fns-jalali";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import * as React from "react";

export const ZDatePicker = React.forwardRef(
  (
    {
      id,
      name,
      value,
      onChange,
      label,
      disabled,
      mask,
      type,
      isRequiredTime,
      error,
      errorMessage,
      onBlur,
      ...field
    },
    ref
  ) => {
    // const values = {
    //     someDate: "2017-05-24"
    // };
    return (
      <LocalizationProvider dateAdapter={AdapterJalali}>
        <DatePicker
          id={id}
          mask={mask ? mask : "____/__/__"}
          onChange={onChange}
          inputRef={ref}
          label={label}
          {...field}
          renderInput={(params) => {
            params.inputProps.type = "text"; // Correct phone number validation error
            return (
              <TextField
                {...params}
                onBlur={onBlur}
                name={name}
                error={error}
                helperText={errorMessage}
              />
            );
          }}
          value={value}
          disabled={disabled}
        />
      </LocalizationProvider>
    );
  }
);
