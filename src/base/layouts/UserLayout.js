import React from "react";
import { Route, Link, Routes } from "react-router-dom";
import AboutUs from "../views/general/AboutUs";
import ContactUs from "../views/general/ContactUs";
import Features from "../views/general/Features";
import Home from "../views/general/Home";
import Pricing from "../views/general/Pricing";
const UserLayout = () => {
  return (
    <>
      <Routes>
        <Route path="/About">
          <AboutUs />
        </Route>
        <Route path="/contactus">
          <ContactUs />
        </Route>

        <Route path="/features">
          <Features />
        </Route>
        <Route path="/pricing">
          <Pricing />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Routes>
    </>
  );
};
export default UserLayout;
