import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IconButton, Toolbar, Typography } from "@mui/material";
import { useProSidebar } from "react-pro-sidebar";
import ZIcon, { ZIcons } from "src/base/coreServices/components/icon/ZIcon";
import ZSnackbar from "src/base/coreServices/components/snackbar/ZSnackbar";
import { ZAlertVariant } from "src/base/coreServices/components/alert/ZAlert";
import { showSnackbar } from "src/redux/reducers/adminLayoutSnackbarSlice";
// STYLES
import "src/assets/css/rtl/core.css";
import "src/assets/css/adminLayout.css";
import "src/assets/css/demo.css";
// VIEWS
import Error404 from "src/base/views/general/Error404";
import Profile from "src/base/views/admin/profile/Profile";
import Dashboard from "src/base/views/admin/Dashboard";
import Settings from "src/base/views/admin/Settings";
import MySidebar from "./AdminLayout/Sidebar/MySidebar";
import Apps from "src/base/views/admin/apps/Apps";
import DepartmentGroup from "src/base/views/admin/departmentGroup/DepartmentGroup";
import Departments from "src/base/views/admin/departments/Departments";
import UserApplication from "../views/admin/userApplication/UserApplication";
import OnlineChat from "../views/admin/onlineChat/OnlineChat";

const AdminLayout = (props) => {
  const dispatch = useDispatch();
  const { toggleSidebar, broken } = useProSidebar();
  const { routeName } = useSelector((state) => state.route);
  const { status } = useSelector((state) => state.adminLayoutSnackbar);

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
              <Route path="apps" element={<Apps />} />
              <Route path="departmentgroup" element={<DepartmentGroup />} />
              <Route path="department" element={<Departments />} />
              <Route path="operators" element={<UserApplication />} />
              <Route path="onlinechat" element={<OnlineChat />} />

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
