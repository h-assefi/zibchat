import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IconButton, Toolbar, Typography } from "@mui/material";
import { useProSidebar } from "react-pro-sidebar";
import ZIcon, { ZIcons } from "../coreServices/components/icon/ZIcon";
// STYLES
import "src/assets/css/rtl/core.css";
import "src/assets/css/adminLayout.css";
import "src/assets/css/demo.css";
// VIEWS
import Error404 from "../views/general/Error404";
import Profile from "../views/admin/profile/Profile";
import Dashboard from "../views/admin/Dashboard";
import Settings from "../views/admin/Settings";
import MySidebar from "./AdminLayout/Sidebar/MySidebar";
import ZSnackbar from "../coreServices/components/snackbar/ZSnackbar";
import { ZAlertVariant } from "../coreServices/components/alert/ZAlert";
import { showSnackbar } from "src/redux/reducers/adminLayoutSnackbarSlice";

const AdminLayout = (props) => {
  const dispatch = useDispatch();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { toggleSidebar, broken } = useProSidebar();
  const { routeName } = useSelector((state) => state.route);
  const { status } = useSelector((state) => state.adminLayoutSnackbar);

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
      <ZSnackbar
        open={status.show}
        onClose={() => dispatch(showSnackbar({ show: false }))}
        message={status.message}
        severity={status.severity}
        alert
        alertVariant={ZAlertVariant.filled}
      />
    </div>
  );
};
export default AdminLayout;
