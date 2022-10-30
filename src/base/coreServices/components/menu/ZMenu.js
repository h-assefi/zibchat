import { Menu, MenuItem } from "@mui/material";
import * as React from "react";

const ZMenu = ({ options, anchorEl, onItemClick, onClose }) => {
  const open = Boolean(anchorEl);
  return (
    <Menu
      id="lock-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      MenuListProps={{
        "aria-labelledby": "lock-button",
        role: "listbox",
      }}
    >
      {options.map((option, index) => (
        <MenuItem
          key={option.id}
          onClick={(event) => onItemClick(event, option.id)}
          disabled={option.disabled}
        >
          {option.icon && option.icon}
          {option.text && option.text}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default ZMenu;
