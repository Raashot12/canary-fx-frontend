import {
  defaultFont,
  primaryColor,
  defaultBoxShadow,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
  whiteColor,
} from "assets/jss/material-dashboard-react.js";

const TopBarStyle = (theme) => ({
  container: {
    backgroundColor: "trans",
    boxShadow: "none",
    borderBottom: "0",
    margin: "13px 0",
    minHeight: "50px",
    padding: "10px 0",
    width: "100%",
    transition: "all 150ms ease 0s",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  componentNameDiv: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginLeft: theme.spacing(3),
    "@media (max-width:600px)": {
      marginLeft: "50px",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "50px",
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: "50px",
    },
  },
  profile: {
    display: "flex",
    flexShrink: "1",
    alignItems: "center",
  },
  title: {
    ...defaultFont,
    fontSize: "18px",
    color: "inherit",
    fontWeight: "bold",
    alignItems: "center",
    textTransform: "capitalize",
    "&:hover,&:focus": {
      background: "transparent",
      color: "#4F88C7",
    },
    "@media (max-width:500px)": {
      fontSize: "80%",
    },
  },
  exchange: {
    fontSize: "16px",
    padding: "10px 20px",
    margin: "0",
    borderRadius: "25px",
    border: "ipx solid white",
    alignItems: "center",
    color: "#0D5AE5",
    backgroundColor: "#CDE7FB",
    "&:hover,&:focus": {
      backgroundColor: "#CDE7FB",
      color: "#0D5AE5",
    },
    "@media (max-width:500px)": {
      fontSize: "80%",
    },
  },
  exchangeTittle: {
    marginRight: "3",
  },
  profileTittle: {
    marginRight: "4",
    "@media (max-width:500px)": {
      display: "none",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(5),
    },
  },
  username: {
    marginRight: "4",
    fontSize: "18px",
    color: "inherit",
    fontWeight: "bold",
    padding: "16px",
    margin: "0",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      padding: "0",
    },
    "&:hover,&:focus": {
      background: "transparent",
      color: "#4F88C7",
    },
    "@media (max-width:500px)": {
      fontSize: "80%",
    },
  },
  appResponsive: {
    top: "8px",
  },
  primary: {
    backgroundColor: primaryColor[0],
    color: whiteColor,
    ...defaultBoxShadow,
  },
  info: {
    backgroundColor: infoColor[0],
    color: whiteColor,
    ...defaultBoxShadow,
  },
  success: {
    backgroundColor: successColor[0],
    color: whiteColor,
    ...defaultBoxShadow,
  },
  warning: {
    backgroundColor: warningColor[0],
    color: whiteColor,
    ...defaultBoxShadow,
  },
  danger: {
    backgroundColor: dangerColor[0],
    color: whiteColor,
    ...defaultBoxShadow,
  },
});

export default TopBarStyle;
