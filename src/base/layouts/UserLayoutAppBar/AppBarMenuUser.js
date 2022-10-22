import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import * as React from "react";

const options = [
  { title: "پروفایل", route: "/d/profile" },
  { title: "داشبورد", route: "/d/board" },
  { title: "خروج", route: "/logout" },
];

const AppBarMenuUser = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (data) => {
    setAnchorElUser(null);
    if (data) {
      window.location.href = data;
    }
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <IconButton onClick={handleOpenUserMenu}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
      </IconButton>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={() => handleCloseUserMenu()}
      >
        {options.map((option) => (
          <MenuItem
            key={option.route}
            onClick={() => handleCloseUserMenu(option.route)}
          >
            <Typography textAlign="center">{option.title}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default AppBarMenuUser;
