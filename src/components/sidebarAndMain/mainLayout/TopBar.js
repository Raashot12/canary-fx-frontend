import React from "react";
import { Link } from "react-router-dom";

import { makeStyles, Typography } from "@material-ui/core";
import AdminNavbarLinks from "./AdminNavbarLinks";
import Hidden from "@material-ui/core/Hidden";

import styles from "./TopBarStyle";

const useStyles = makeStyles(styles);
const TopBar = ({ componentName, location }) => {
  const classes = useStyles();

  return (
    <nav className={classes.container}>
      <div className={classes.componentNameDiv}>
        <Typography gutterBottom>
          <Link
            color="transparent"
            to={location.pathname}
            className={classes.title}
          >
            {componentName}
          </Link>
        </Typography>
      </div>
      <div className={classes.profile}>
        <div className={classes.exchangeTittle}>
          <Typography gutterBottom>
            <Link
              color="transparent"
              to="/dashboard/exchangeRate"
              className={classes.exchange}
            >
              Exchange Rates
            </Link>
          </Typography>
        </div>
        <div className={classes.profileTittle}>
          <Typography gutterBottom>
            <Link
              color="transparent"
              to="/dashboard/profile"
              className={classes.username}
            >
              User Name
            </Link>
          </Typography>
        </div>
        <Hidden smDown implementation="css">
          <AdminNavbarLinks />
        </Hidden>
      </div>
    </nav>
  );
};

export default TopBar;
