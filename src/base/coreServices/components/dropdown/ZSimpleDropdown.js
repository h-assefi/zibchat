import PropTypes from "prop-types";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const ZSimpleDropdown = ({
  data,
  error,
  id,
  label,
  onChange,
  textField,
  value,
  valueField,
  open,
}) => {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} error={error}>
      {label && (
        <InputLabel id="demo-simple-select-readonly-label">{label}</InputLabel>
      )}
      <Select
        id={id}
        label={label}
        onChange={onChange}
        value={value}
        open={open}
      >
        {data && data.length > 0 ? (
          data.map((item) => {
            return (
              <MenuItem key={item[valueField]} value={item[valueField]}>
                {item[textField]}
              </MenuItem>
            );
          })
        ) : (
          <div></div>
        )}
      </Select>
    </FormControl>
  );
};

ZSimpleDropdown.propTypes = {
  textField: PropTypes.string.isRequired,
  valueField: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  data: PropTypes.array.isRequired,
};

export default ZSimpleDropdown;
