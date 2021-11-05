import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
// @material-ui/core components
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

// core components
import GridItem from "components/Grid/GridItem.js";

import Textfield from "components/FormsUI/Textfield/Textfield.js";
import Button from "components/FormsUI/Button/Button.js";
import Select from "components/FormsUI/Select/Select.js";

const options = [
  {
    value: undefined,
    label: "None",
  },
  {
    value: "400",
    label: "EUR",
  },
  {
    value: "500",
    label: "GPD",
  },
  {
    value: "450",
    label: "USD",
  },
];

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    background: "#FFFFFF",
    height: "430px",
    width: "100%",
    boxShadow: "0px 12px 30px 6px rgba(66, 113, 164, 0.104891)",
    borderRadius: "22px",
  },
  button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginLeft: "10px",
  },
  paper: {
    marginBottom: theme.spacing(2),
    padding: theme.spacing(0, 2, 2),
    width: theme.spacing(16),
    height: theme.spacing(5),
  },
  compare: {
    display: "flex",
    flexDirection: "row",
    flex: "1",
  },
  ratediv: {
    marginLeft: "10px",
  },
}));

const INITIAL_FORM_STATE = {
  from: "",
  to: "",
  fromCurrency: "",
  toCurrency: "",
};

const FORM_VALIDATION = Yup.object().shape({
  from: Yup.number().required("Required"),
  to: Yup.number().required("Required"),
  fromCurrency: Yup.string().required("Required"),
  toCurrency: Yup.string().required("Required"),
});

export default function ExchangeCalculator() {
  const classes = useStyles();

  return (
    <div className={classes.formWrapper}>
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
          <GridItem container spacing={2}>
            <GridItem item xs={12}>
              <Typography
                style={{
                  margin: "10px 1rem",
                  color: "#20b8eb",
                  fontWeight: "500",
                  width: "100%",
                }}
              >
                Rate Calculator
              </Typography>
            </GridItem>
            <GridItem>
              <GridItem item xs={12}>
                <div className={classes.compare}>
                  <GridItem>
                    <Textfield name="from" label="From" />
                  </GridItem>
                  <GridItem className={classes.root}>
                    <Select
                      variant="outlined"
                      name="fromCurrency"
                      data={options}
                    />
                  </GridItem>
                </div>
              </GridItem>
              <GridItem item xs={12}>
                <div className={classes.compare}>
                  <GridItem>
                    <Textfield name="to" label="To" />
                  </GridItem>
                  <GridItem>
                    <Select
                      variant="outlined"
                      name="toCurrency"
                      data={options}
                    />
                  </GridItem>
                </div>
              </GridItem>
            </GridItem>
            <GridItem>
              <div className={classes.ratediv}>
                <GridItem>
                  <Typography>Rate</Typography>
                </GridItem>
                <GridItem>
                  <Card className={classes.paper}>
                    <CardContent>
                      <Typography className={classes.rate}>Rate</Typography>
                    </CardContent>
                  </Card>
                </GridItem>
              </div>
              <GridItem>
                <div className={classes.button}>
                  <Button className="button-blue">New Transaction</Button>
                </div>
              </GridItem>
            </GridItem>
          </GridItem>
        </Form>
      </Formik>
    </div>
  );
}
