import * as React from "react";
import Home from "../views/general/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "../coreServices/router/PrivateRoute";
import Register from "../views/auth/Register";
import Login from "../views/auth/Login";
import PasswordRecovery from "../views/auth/passwordRecovery/PasswordRecovery";
import Error404 from "../views/general/Error404";
import { Box } from "@mui/material";
import AppBarMenu from "./UserLayoutAppBar/AppBarMenu";
import AppBarDrawer from "./UserLayoutAppBar/AppBarDrawer";
import AboutUs from "../views/general/AboutUs";
import Features from "../views/general/Features";
import Pricing from "../views/general/Pricing";
import AdminLayout from "./AdminLayout";
import Tutorial from "../views/general/tutorial/Tutorial";

const UserLayout = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <Router>
        <AppBarMenu handleDrawerToggle={handleDrawerToggle}></AppBarMenu>
        <AppBarDrawer
          window={window}
          handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
        ></AppBarDrawer>
        <Box component="main" sx={{ width: "100%" }}>
          <div style={{ paddingTop: 64 }}>
            <Routes>
              <Route path="/d" element={<PrivateRoute />}>
                <Route path="/d/*" element={<AdminLayout />} />
              </Route>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/features" element={<Features />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/recover/:user" element={<PasswordRecovery />} />
              <Route path="/recover" element={<PasswordRecovery />} />
              <Route path="/tutorial" element={<Tutorial />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </div>
        </Box>
      </Router>
    </Box>
  );
};
export default UserLayout;
