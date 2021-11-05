import React from "react";
import { makeStyles } from "@material-ui/core";
import TopBar from "./TopBar";
import { FaBars } from "react-icons/fa";
import { Switch, Route, Redirect } from "react-router-dom";

import routes from "routes.js";

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === "/dashboard") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      return null;
    })}
    <Redirect from="/dashboard" to="/dashboard/home" />
  </Switch>
);

function makeBrand() {
  var name;
  routes.map((prop) => {
    if (window.location.href.indexOf(prop.layout + prop.path) !== -1) {
      name = prop.name ? prop.name : null;
    }
    return null;
  });
  return name;
}

const getRoute = () => {
  return window.location.pathname !== "/dashboard/maps";
};

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginBottom: "20vh",
  },
  footer: {
    left: 0,
    right: 0,
    height: "1rem",
    position: "relative",
    bottom: "0"
  },
  main: {
    paddingTop: "0px",
  },
}));
const style = {
  position: "absolute",
  top: "2rem",
};

const Main = ({ collapsed, handleToggleSidebar, location }) => {
  const classes = useStyles();

  return (
    <main  className={classes.main}>
      <TopBar componentName={makeBrand()} location={location} />
      <div
        className="btn-toggle"
        onClick={() => handleToggleSidebar(true)}
        style={style}
      >
        <FaBars />
      </div>
      <div className={classes.wrapper}>
        <div>
          {getRoute() ? (
            <div className={classes.content}>
              <div className={classes.container}>{switchRoutes}</div>
            </div>
          ) : null }
        </div>
      </div>
      <footer className={classes.footer}>
        <small>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="www.canarypointsc.com"
          >
            Canary Point Corperate Service
          </a>
        </small>
      </footer>
    </main>
  );
};

export default Main;
