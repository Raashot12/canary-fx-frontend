import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";




const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  formDetails: {
    margin: "1rem 4rem",
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  buttonsDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    margin: "2rem auto",
  },
  buttonColor: {
    color: "#ffffff",
  },
  prevbuttonColor: {
    color: "#20b8eb",
  },
}));

const BootstrapButton = withStyles({
  root: {
    marginLeft: "8px",
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "10px 26px",
    borderRadius: "50px",
    border: "1px solid",
    lineHeight: 1.5,
    color: "white",
    backgroundColor: "#20b8eb",
    borderColor: "#20b8eb",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      backgroundColor: "#20b8eb",
      borderColor: "#ffffff",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#20b8eb",
      borderColor: "#ffffff",
    },
  },
})(Button);

const BootstrapButton2 = withStyles({
  root: {
    marginLeft: "-8px",
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "10px 26px",
    borderRadius: "50px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#ffffff",
    borderColor: "#20b8eb",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      backgroundColor: "#efefef",
      borderColor: "#20b8eb",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#efefef",
    },
  },
})(Button);


export { useStyles, BootstrapButton, BootstrapButton2 };