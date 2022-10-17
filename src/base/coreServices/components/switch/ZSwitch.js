import * as React from "react";
import Switch from "@mui/material/Switch";

import { FormControlLabel, FormGroup } from "@mui/material";
import IOSSwitch from "./iOSSwitch";
import Android12Switch from "./Android12Switch";
import MaterialUISwitch from "./MaterialUISwitch";
import AntSwitch from "./AntSwitch";

export const ZSwitchColor = {
  error: "error",
  success: "success",
  warning: "warning",
  info: "info",
  primary: "primary",
  secondary: "secondary",
  default: "default",
};

export const ZSwitchTheme = {
  iOS: "iOS",
  android12: "android12",
  mui: "mui",
  ant: "ant",
  default: "default",
};

export const ZSwitchLabelPlacement = {
  top: "top",
  bottom: "bottom",
  start: "start",
  end: "end",
};

const ZSwitch = ({
  color = ZSwitchColor.primary,
  checked,
  label,
  labelPlacement = ZSwitchLabelPlacement.end,
  onChange,
  theme = ZSwitchTheme.default,
}) => {
  return (
    <FormGroup row>
      <FormControlLabel
        control={
          theme === ZSwitchTheme.iOS ? (
            <IOSSwitch sx={{ m: 1 }} checked={checked} onChange={onChange} />
          ) : theme === ZSwitchTheme.android12 ? (
            <Android12Switch
              sx={{ m: 1 }}
              checked={checked}
              onChange={onChange}
            />
          ) : theme === ZSwitchTheme.mui ? (
            <MaterialUISwitch
              sx={{ m: 1 }}
              checked={checked}
              onChange={onChange}
            />
          ) : theme === ZSwitchTheme.ant ? (
            <AntSwitch sx={{ m: 1 }} checked={checked} onChange={onChange} />
          ) : (
            <Switch color={color} checked={checked} onChange={onChange} />
          )
        }
        label={label}
        labelPlacement={labelPlacement}
      />
    </FormGroup>
  );
};

export default ZSwitch;
