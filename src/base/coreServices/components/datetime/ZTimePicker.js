import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

export const ZTimePicker = ({
  id,
  value,
  onChange,
  ampm,
  name,
  disabled,
  forwardedRef,
}) => {
  const timeChange = (value) => {
    let startTimeHours = ("0" + value.getHours()).slice(-2);
    let startTimeMinutes = ("0" + value.getMinutes()).slice(-2);
    if (onChange) onChange(value, [startTimeHours, startTimeMinutes].join(":"));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        name={name}
        id={id}
        onChange={timeChange}
        renderInput={(params) => <TextField size="small" {...params} />}
        ampm={ampm}
        value={value}
        disabled={disabled}
        inputRef={forwardedRef}
        InputProps={{
          sx: {
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "  red !important", // borderColor: '  #f9b115 !important'
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#ced2d8 !important", //borderColor: '#f9b115 !important'
            },
          },
        }}
      />
    </LocalizationProvider>
  );
};
