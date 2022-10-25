import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ZButton from "src/base/coreServices/components/button/ZButton";
import AppBarMenuUser from "./AppBarMenuUser";
import { useNavigate } from "react-router-dom";

const AppBarMenu = ({ navItems, handleDrawerToggle }) => {
  const navigate = useNavigate();
  return (
    <AppBar component="nav" color="secondary">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        <Box sx={{ display: { xs: "none", sm: "block" }, flexGrow: 1 }}>
          {navItems.map((item) => (
            <ZButton
              key={item.route}
              sx={{ color: "white" }}
              onClick={() => {
                navigate(item.route);
              }}
            >
              {item.title}
            </ZButton>
          ))}
        </Box>
        <AppBarMenuUser />
        <Typography
          variant="h6"
          component="div"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          z i b c h a t
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarMenu;
