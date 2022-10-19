import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UserLayout from "src/base/layouts/UserLayout";

const RouterService = () => {
  let userValid = true;
  return (
    <Router>
      <UserLayout />
    </Router>
  );
};

export default RouterService;
