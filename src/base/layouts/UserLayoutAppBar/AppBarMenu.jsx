import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AppBarMenuUser from "./AppBarMenuUser";
import { LoginRegister } from "./LogInRegister";
import { HeaderNavigation } from "./HeaderNavigation";

const AppBarMenu = ({ handleDrawerToggle }) => {
  const BurgerMenu = () => {
    return (
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2, display: { sm: "none" } }}
      >
        <MenuIcon />
      </IconButton>
    );
  };

  const AppLogo = () => {
    return (
      <Typography
        variant="h6"
        component="div"
        sx={{ display: { xs: "none", sm: "block" } }}
      >
        z i b c h a t
      </Typography>
    );
  };

  return (
    <AppBar component="nav" color="secondary">
      <Toolbar style={{ justifyContent: "space-between" }}>
        <BurgerMenu />
        <HeaderNavigation />
        <LoginRegister />
        <AppBarMenuUser />
        <AppLogo />
      </Toolbar>
    </AppBar>
  );
};

export default AppBarMenu;
