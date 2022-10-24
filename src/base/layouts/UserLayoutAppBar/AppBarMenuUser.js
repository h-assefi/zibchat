import {
  Avatar,
  Box,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import * as React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setRouteName } from "src/redux/reducers/routeSlice";
import ZIcon, { ZIcons } from "../../coreServices/components/icon/ZIcon";

const options = [
  {
    title: "پروفایل",
    route: "/d/profile",
    icon: <ZIcon icon={ZIcons.profile} />,
  },
  {
    title: "داشبورد",
    route: "/d/board",
    icon: <ZIcon icon={ZIcons.dashborad} />,
  },
  { title: "خروج", route: "/logout", icon: <ZIcon icon={ZIcons.logout} /> },
];

const AppBarMenuUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (data) => {
    setAnchorElUser(null);
    if (data.route) {
      navigate(data.route);
      dispatch(setRouteName(data.title));
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
            onClick={() => handleCloseUserMenu(option)}
          >
            {option.icon && <ListItemIcon>{option.icon}</ListItemIcon>}
            <Typography textAlign="center">{option.title}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default AppBarMenuUser;
