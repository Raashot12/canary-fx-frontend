import React from "react";
import "./styles/App.scss";
import { Router, Route, Switch } from "react-router-dom";

// LandingPage core components
import HowItWorks from "./views/pages/HowItWorks";
import Login from "./views/pages/Login";
import Register from "./views/pages/Register";

import "./assets/css/material-dashboard-react.css?v=1.9.0";
import { createBrowserHistory } from "history";

// dashboard core components
import DashboardLayout from "layouts/DashboardLayout";

const hist = createBrowserHistory();

export default function App() {
  return (
    <div>
      <Router history={hist}>
        <Switch>
          {/* admin Route */}
          <Route path="/dashboard" component={DashboardLayout} />
          {/*Landing Page Routes */}
          <Route exact from="/" render={(props) => <HowItWorks {...props} />} />
          <Route exact path="/login" render={(props) => <Login {...props} />} />
          <Route
            exact
            path="/register"
            render={(props) => <Register {...props} />}
          />
        </Switch>
      </Router>
    </div>
  );
}
