import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
// @material-ui/core components
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridItem from "components/Grid/GridItem.js";

// import Textfield from "components/FormsUI/Textfield/Textfield.js";
import DateAndTimePicker from "components/FormsUI/DataTimePicker/DataTimePicker";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsAdapter from "@date-io/date-fns";
import GridContainer from "components/Grid/GridContainer";
import { Grid } from "@material-ui/core";

// initialValues={{ date: "2019-10-24T22:00:00.000Z" }}

const INITIAL_FORM_STATE = {
  from: "",
  to: "",
};

const FORM_VALIDATION = Yup.object().shape({
  from: Yup.date().required(),
  to: Yup.date().required(),
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    "& .MuiTextField-root": {
      margin: "0",
      width: "22ch",
      [theme.breakpoints.down("xs")]: {
        width: "100%",
      },
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "row",
      alignItems: "center",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "row",
    },
  },
  divwrapper: {
    margin: theme.spacing(-15, 4, 0),
    [theme.breakpoints.down("xs")]: {
      margin: theme.spacing(10, 2),
    },
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(10, 2),
    },
    "@media (min-width:960px)": {
      margin: theme.spacing(-15, 4, 0),
    },
  },
  fieldGrid: {
    // margin: 1,
  },
  btn: {
    display: "flex",
    flexDirection: "row",
    padding: "16px 50px",
    fontSize: "22px",
    fontWeight: "700",
    backgroundColor: "#4F88C7",
    color: "#fff",
    justifyContent: "center",
    borderRadius: "6px",
    border: "white",
    cursor: "pointer",
    alignItems: "center",
    "@media (min-width:960px)": {
      margin: "0 auto",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "0 auto",
    },
  },
}));

const DailyRate = () => {
  const classes = useStyles();

  return (
    <MuiPickersUtilsProvider utils={DateFnsAdapter}>
      <div className={classes.divwrapper}>
        <Formik
          initialValues={{
            ...INITIAL_FORM_STATE,
          }}
          validationSchema={FORM_VALIDATION}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form>
            <Grid container className={classes.root} spacing={2}>
              <Grid item xs={12} md={12}>
                <Typography>Daily Rate</Typography>
              </Grid>
              <Grid item xs={12} sm={4} md={3}>
                <Field component={DateAndTimePicker} label="From" name="from" />
              </Grid>
              <Grid item xs={12} sm={4} md={3}>
                <Field component={DateAndTimePicker} label="To" name="to" />
              </Grid>
              <Grid item xs={12} sm={4} md={3} className={classes.fieldGrid}>
                <button className={classes.btn}>Filter</button>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </div>
    </MuiPickersUtilsProvider>
  );
};

export default DailyRate;
