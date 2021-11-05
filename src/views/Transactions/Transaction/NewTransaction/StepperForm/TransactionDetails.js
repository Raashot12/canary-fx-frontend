import React, { useEffect, useState } from "react";
import SelectWrapper from "components/FormsUI/Select/Select";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import { Card, CardContent, InputLabel, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Textfield from "components/FormsUI/Textfield/Textfield";
import { useFormikContext } from "formik";

const useStyles = makeStyles((theme) => ({
  label: {},
  compare: {
    display: "flex",
    flexDirection: "row",
    flex: "1",
  },
  paper: {
    padding: theme.spacing(0, 0, 2),
    height: theme.spacing(5),
    backgroundColor: "#efefef",
    color: "#91919c",
  },
  Typography: {
    marginLeft: "10px",
  },
}));

const transactioType = [
  {
    value: "buy",
    label: "Buy",
  },
  {
    value: "sell",
    label: "Sell",
  },
];

const fromData = [
  {
    label: "NGN",
    value: "NGN",
  },
  {
    label: "USD",
    value: "USD",
  },
  {
    label: "EUR",
    value: "EUR",
  },
  {
    label: "GPD",
    value: "GPD",
  },
];

const toData = [
  {
    label: "NGN",
    value: "NGN",
  },
  {
    label: "USD",
    value: "USD",
  },
  {
    label: "EUR",
    value: "EUR",
  },
  {
    label: "GPD",
    value: "GPD",
  },
];

export const TransactionDetails = ({ formField }) => {
  const { rate, charges } = formField;
  const { values: formValues } = useFormikContext();
  const { from, to } = formValues;

  const [total, setTotal] = useState(0);

  useEffect(() => {
    let totalAmount;

    if (from || to || rate || charges) {
      const fromAmount = parseInt(from);
      const toAmount = parseInt(to);
      const rateAmount = parseInt(rate);
      const chargesAmount = parseInt(charges);

      totalAmount = Math.ceil(
        fromAmount + toAmount + rateAmount + chargesAmount
      );
      if (isNaN(totalAmount)) {
        setTotal(0);
      } else {
        setTotal(totalAmount);
      }
    }
  }, [from, to, rate, charges]);

  const classes = useStyles();

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6}>
          <GridItem>
            <InputLabel className={classes.label}>Transaction Type</InputLabel>
          </GridItem>
          <GridItem>
            <SelectWrapper
              variant="outlined"
              name="transactionType"
              fullWidth
              data={transactioType}
            />
          </GridItem>
        </GridItem>
        <GridItem xs={12} sm={6}>
          <GridItem>
            <InputLabel className={classes.label}>From</InputLabel>
          </GridItem>
          <div className={classes.compare}>
            <GridItem>
              <Textfield name="from" />
            </GridItem>
            <GridItem className={classes.root}>
              <SelectWrapper
                variant="outlined"
                name="fromCurrency"
                data={fromData}
              />
            </GridItem>
          </div>
        </GridItem>
        <GridItem xs={12} sm={6}>
          <GridItem>
            <InputLabel className={classes.label}>To</InputLabel>
          </GridItem>
          <div className={classes.compare}>
            <GridItem>
              <Textfield name="to" />
            </GridItem>
            <GridItem className={classes.root}>
              <SelectWrapper
                variant="outlined"
                name="toCurrency"
                data={toData}
              />
            </GridItem>
          </div>
        </GridItem>
        <GridItem xs={12} sm={6}>
          <div className={classes.ratediv}>
            <Typography className={classes.Typography}>Rate</Typography>
            <GridItem>
              <Card className={classes.paper}>
                <CardContent>
                  <Typography className={classes.rate}>{rate}</Typography>
                </CardContent>
              </Card>
            </GridItem>
          </div>
        </GridItem>
        <GridItem xs={12} sm={6}>
          <div className={classes.ratediv}>
            <Typography className={classes.Typography}>Charges</Typography>
            <GridItem>
              <Card className={classes.paper}>
                <CardContent>
                  <Typography className={classes.rate}>{charges}</Typography>
                </CardContent>
              </Card>
            </GridItem>
          </div>
        </GridItem>
        <GridItem xs={12} sm={6}>
          <div className={classes.ratediv}>
            <Typography className={classes.Typography}>Total</Typography>
            <GridItem>
              <Card className={classes.paper}>
                <CardContent>
                  <Typography className={classes.rate}>{total}</Typography>
                </CardContent>
              </Card>
            </GridItem>
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
};
