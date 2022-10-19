import "./App.css";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./base/views/general/Home";
import PrivateRoute from "./base/coreServices/router/PrivateRoute";
import Register from "./base/views/auth/Register";
import Login from "./base/views/auth/Login";
import Dashboard from "./base/views/admin/Dashboard";
import Error404 from "./base/views/general/Error404";
import Settings from "./base/views/admin/Settings";
import PasswordRecovery from "./base/views/auth/passwordRecovery/PasswordRecovery";

const App = () => {
  return (
    <Router>
      <Fragment>
        {/* <Navbar/> */}
        <Routes>
          <Route exact path="/dashboard" element={<PrivateRoute />}>
            <Route exact path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route exact path="/settings" element={<PrivateRoute />}>
            <Route exact path="/settings" element={<Settings />} />
          </Route>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/recover/:user" element={<PasswordRecovery />} />
          <Route exact path="/recover" element={<PasswordRecovery />} />
          <Route exact path="*" element={<Error404 />} />
        </Routes>
      </Fragment>
    </Router>
  );
};

export default App;
