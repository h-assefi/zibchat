import * as React from "react";
import PropTypes from "prop-types";
import { Autocomplete, CircularProgress, TextField } from "@mui/material";

const ZDropdown = ({
  data,
  id,
  itemTemplate,
  inputValue,
  loading,
  loadingText,
  onChange,
  onInputChange,
  onClose,
  onOpen,
  open,
  label,
  textField,
  value,
  valueTemplate,
}) => {
  return (
    <Autocomplete
      id={id}
      autoHighlight
      options={data}
      getOptionLabel={
        valueTemplate ??
        ((option) => {
          return option[textField];
        })
      }
      isOptionEqualToValue={(option, value) =>
        option[textField] === value[textField]
      }
      loading={loading}
      loadingText={loadingText}
      renderOption={itemTemplate}
      onChange={onChange}
      value={value}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          inputProps={{
            ...params.inputProps,
          }}
        />
      )}
      inputValue={inputValue}
      onInputChange={onInputChange}
    ></Autocomplete>
  );
};

ZDropdown.propTypes = {
  textField: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  data: PropTypes.array.isRequired,
};

export default ZDropdown;
