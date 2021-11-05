/* eslint-disable no-undef */
import React from "react";
import appSample from "../../../assets/images/appSample.png";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const defaultProps = {
  bgcolor: "background.paper",
  m: 6,
  style: {
    width: "100%",
    height: "7rem",
    borderRadius: "14px",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#4F88C7",
    margin: "48px 0",
  },
};

const text = {
  color: "#ffffff",
  margin: "12px",
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      // margin: theme.spacing(1),
      width: "25ch",
    },
  },

  label: {
    textTransform: "capitalize",
    border: "1px #FFFFFF solid",
    padding: "4px 8px",
    borderRadius: "16px",
    marginTop: "-40px",
    color: "#4F88C7",
    background: "#FFFFFF",
  },
}));

const HeroBanner = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12}>
          <Typography component="div">
            <Box
              textAlign="center"
              fontSize="h4.fontSize"
              fontWeight="fontWeightBold"
              color="#555555"
              m={2}
            >
              Change <span style={{ color: "#20B8EB" }}>Naira</span> to{" "}
              <span style={{ color: "#4F88C7" }}>Dollars </span>instantly!
            </Box>
            <Box textAlign="center" color="#555555" m={2}>
              Make your foreign exchange orders directly from your computer or
              <br />
              phone without contacting any personnel
            </Box>
          </Typography>
        </Grid>
        <Grid container justify="center" alignItems="center">
          <Grid item>
            <img style={{ width: "100%" }} src={appSample} alt="app sample" />
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Box borderColor="primary.main" {...defaultProps}>
            <Typography style={text}>Exchange Rates</Typography>
            <Button
              classes={{
                label: classes.label,
              }}
              style={{ margin: "12px" }}
            >
              View more
            </Button>
          </Box>
          <Typography style={text}>Exchange Rates</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default HeroBanner;
