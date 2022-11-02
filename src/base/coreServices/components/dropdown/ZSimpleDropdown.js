import PropTypes from "prop-types";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import * as React from "react";

const ZSimpleDropdown = React.forwardRef(
  (
    {
      data,
      error,
      fullWidth,
      id,
      label,
      name,
      onChange,
      textField,
      value,
      valueField,
      open,
      size,
      itemTempelate,
      width,
      ...rest
    },
    ref
  ) => {
    return (
      <FormControl
        sx={{ m: 1, minWidth: 120, width: width }}
        error={error}
        size={size}
        fullWidth={fullWidth}
      >
        {label && (
          <InputLabel id="demo-simple-select-readonly-label">
            {label}
          </InputLabel>
        )}
        <Select
          id={id}
          label={label}
          onChange={onChange}
          name={name}
          value={value}
          open={open}
          ref={ref}
          {...rest}
        >
          {data && data.length > 0 ? (
            data.map((item) => {
              return (
                <MenuItem key={item[valueField]} value={item[valueField]}>
                  {itemTempelate ? itemTempelate(item) : item[textField]}
                </MenuItem>
              );
            })
          ) : (
            <div></div>
          )}
        </Select>
      </FormControl>
    );
  }
);

ZSimpleDropdown.propTypes = {
  textField: PropTypes.string.isRequired,
  valueField: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  data: PropTypes.array.isRequired,
};

export default ZSimpleDropdown;
