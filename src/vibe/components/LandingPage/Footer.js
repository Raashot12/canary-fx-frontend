import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import completeLogo from "../../../assets/images/completeLogo.png";

const useStyles = makeStyles((theme) => ({
  footerText: {
    paddingTop: "8px",
    fontSize: "18px",
    color: "#555555",
    [theme.breakpoints.down("xs")]: {
      paddingTop: "0",
      fontSize: "14px",
    },
  },

  logoStyles: {
    maxWidth: "250px",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "120px",
      paddingLeft: "4px",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "180px",
      paddingLeft: "14px",
    },
  },

  copyrightText: {
    paddingLeft: "20px",
    fontSize: "18px",
    color: "#555555",
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
      paddingLeft: "14px",
    },
    [theme.breakpoints.down("md")]: {
      // fontSize: "14px",
      paddingLeft: "22px",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ background: "#EFEFEF", height: "auto", paddingBottom:    "30px"    }}
      >
        <Grid item md={4} xs={11}>
          <img src={completeLogo} alt="Logo" className={classes.logoStyles} />
          <Box className={classes.copyrightText}>
            © 2021 All Rights Reserved
          </Box>
        </Grid>
        <Grid item md={4} xs={10}>
          <Box
            color="#555555"
            fontSize="20px"
            fontWeight="bold"
            paddingTop="10px"
          >
            Legal
          </Box>
          <Box className={classes.footerText}>Terms and Conditions</Box>
          <Box className={classes.footerText}>Privacy Policy</Box>
          <Box className={classes.footerText}>Cookie Policy</Box>
        </Grid>
        <Grid item md={4} xs={10}>
          <Box
            color="#555555"
            fontSize="20px"
            fontWeight="bold"
            paddingTop="20px"
          >
            Contact Us
          </Box>
          <Box className={classes.footerText}>info@canarypointcs.com</Box>
          <Box className={classes.footerText}>08145515280, 01-6329480</Box>
          <Box className={classes.footerText}>
            17a Dele Adedeji Street, Off Bisola Durosinmi-Etti Street, Lekki
            Phase I - Lagos. Nigeria
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
