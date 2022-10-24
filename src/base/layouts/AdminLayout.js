import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../views/admin/Dashboard";
import Settings from "../views/admin/Settings";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import Error404 from "../views/general/Error404";
import Profile from "../views/admin/profile/Profile";
// <!-- Icons -->
import "src/assets/vendor/fonts/boxicons.css";
import "src/assets/vendor/fonts/fontawesome.css";
import "src/assets/vendor/fonts/flag-icons.css";
// <!-- Core CSS -->
import "src/assets/vendor/css/rtl/core.css";
import "src/assets/vendor/css/rtl/theme-default.css";
import "src/assets/css/demo.css";
import "src/assets/vendor/css/rtl/rtl.css";
import "src/assets/css/adminLayout.css";
// <!-- Vendors CSS -->
import "src/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css";
import "src/assets/vendor/libs/typeahead-js/typeahead.css";
import MySidebar from "./AdminLayout/Sidebar/MySidebar";
import { useProSidebar } from "react-pro-sidebar";
import ZIcon, { ZIcons } from "../coreServices/components/icon/ZIcon";
import { useSelector } from "react-redux";

const navItems = [
  { title: "خانه", route: "/" },
  { title: "درباره ما", route: "/aboutus" },
  { title: "امکانات", route: "/features" },
  { title: "قیمت", route: "/pricing" },
  { title: "پایگاه دانش", route: "/tutorial" },
];

const AdminLayout = (props) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { toggleSidebar, broken } = useProSidebar();
  const { routeName } = useSelector((state) => state.route);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container layout-container-height">
        <MySidebar />

        <div className="layout-page">
          <Toolbar className="border-bottom align-item-center">
            {broken && (
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
                onClick={() => toggleSidebar()}
              >
                <ZIcon icon={ZIcons.menu} />
              </IconButton>
            )}
            <Typography>{routeName}</Typography>
          </Toolbar>
          <div className="content-wrapper p-2 justify-content-start">
            <Routes>
              <Route path="board" element={<Dashboard />} />
              <Route path="settings" element={<Settings />} />
              <Route path="profile" element={<Profile />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminLayout;
