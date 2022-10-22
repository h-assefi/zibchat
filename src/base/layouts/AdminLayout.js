import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../views/admin/Dashboard";
import Settings from "../views/admin/Settings";
import { Box, Toolbar } from "@mui/material";
import Error404 from "../views/general/Error404";
import Profile from "../views/admin/profile/Profile";

const navItems = [
  { title: "خانه", route: "/" },
  { title: "درباره ما", route: "/aboutus" },
  { title: "امکانات", route: "/features" },
  { title: "قیمت", route: "/pricing" },
  { title: "پایگاه دانش", route: "/tutorial" },
];

const AdminLayout = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <Toolbar />
      <div>SOME TEXT</div>
      <React.Fragment>
        <Routes>
          <Route path="board" element={<Dashboard />} />
          <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </React.Fragment>
    </Box>
  );
};
export default AdminLayout;
