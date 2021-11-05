import {
  defaultFont,
} from "assets/jss/material-dashboard-react.js";

import dropdownStyle from "assets/jss/material-dashboard-react/dropdownStyle.js";

const headerLinksStyle = theme => ({
  ...dropdownStyle(theme),
  linkText: {
    zIndex: "4",
    ...defaultFont,
    color: "#91919C",
    fontSize: "14px",
    margin: "5px 0 0 0"
  },
    usernameIcons: {
      fontSize: "50px",
      color: "#91919C",
      marginRight: "irem"
  },
  buttonLink: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      margin: "10px 15px 0",
      width: "-webkit-fill-available",
      "& svg": {
        width: "24px",
        height: "30px",
        marginRight: "15px",
        marginLeft: "15px"
      },
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "24px",
        lineHeight: "30px",
        width: "24px",
        height: "30px",
        marginRight: "15px",
        marginLeft: "-15px"
      },
      "& > span": {
        justifyContent: "flex-start",
        width: "100%"
      }
    }
  },
  margin: {
    zIndex: "4",
    margin: "0"
  },
  manager: {
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    },
    display: "inline-block"
  },

});

export default headerLinksStyle;
