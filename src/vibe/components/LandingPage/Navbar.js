import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import completeLogo from "../../../assets/images/completeLogo.png";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { withRouter, useHistory } from "react-router-dom";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "#555555",
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backGround: "transparent",
  },

  iconStyles: {
    justifyContent: "space-between",
  },
  // content: {
  //   flexGrow: 1,
  //   padding: theme.spacing(3),
  // },
  closeMenuButton: {
    marginRight: "auto",
    marginLeft: 0,
  },
  label: {
    textTransform: "capitalize",
    fontSize: "1.125rem",
  },
  title: {
    maxWidth: 200,
    height: 100,
    objectFit: "contain",
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1,
    },
  },
  headerOptions: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-end",
    paddingRight: 32,
    paddingLeft: 16,
  },
}));
const Navbar = () => {
  const menuItems = [
    {
      menuTitle: "How It Works",
      pageURL: "/",
    },
    {
      menuTitle: "Exchange Rates",
      pageURL: "/dashboard/exchangeRate",
    },
    {
      menuTitle: "Login",
      pageURL: "/login",
    },
    {
      menuTitle: "Register",
      pageURL: "/register",
    },
  ];

  const classes = useStyles();
  const history = useHistory();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [mobileOpen, setMobileOpen] = React.useState(false);
  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }
  const handleButtonClick = (pageURL) => {
    history.push(pageURL);
    if (isMobile) handleDrawerToggle();
  };
  const drawer = (
    <div>
      <List>
        {menuItems.map((text, index) => (
          <ListItem
            onClick={() => handleButtonClick(text.pageURL)}
            button
            key={index}
          >
            <ListItemText primary={text.menuTitle} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="static"
        elevation="0"
        style={{ background: "transparent" }}
      >
        <Toolbar className={`${classes.toolbar} ${classes.iconStyles}`}>
          <img src={completeLogo} alt="Logo" className={classes.title} />
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <div className={classes.headerOptions}>
              <Button
                onClick={() => handleButtonClick("/")}
                classes={{
                  label: classes.label,
                }}
              >
                How It Works
              </Button>
              <Button
                onClick={() => handleButtonClick("/dashboard/exchangeRate")}
                classes={{
                  label: classes.label,
                }}
              >
                Exchange Rates
              </Button>
              <Button
                onClick={() => handleButtonClick("/login")}
                classes={{
                  label: classes.label,
                }}
              >
                Login
              </Button>
              <Button
                onClick={() => handleButtonClick("/register")}
                classes={{
                  label: classes.label,
                }}
                style={{
                  padding: "4px 24px",
                  borderRadius: "16px",
                  border: "1px solid #20B8EB",
                  color: "#20B8EB",
                }}
              >
                Register
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <IconButton
              onClick={handleDrawerToggle}
              className={classes.closeMenuButton}
            >
              <CloseIcon />
            </IconButton>
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
};

export default withRouter(Navbar);
