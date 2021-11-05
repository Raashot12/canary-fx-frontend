import React from "react";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import { makeStyles, Typography } from "@material-ui/core";

const style = {
  color: "#000",
  fontWeight: 600,
  margin: "1rem 10px 0",
};

const TransactionReview = ({ formValues, formField }) => {
  const { rate, charges } = formField;
  console.log(formValues);
  const { from, to, total, transactionType, toCurrency,fromCurrency } = formValues;

  return (
    <GridContainer>
      <GridItem>
        <GridItem item xs={6}>
          <Typography gutterBottom style={style}>
            Transaction details
          </Typography>
        </GridItem>
        <GridItem container>
          <React.Fragment>
            <GridItem item xs={6}>
              <Typography gutterBottom>Transaction Type</Typography>
            </GridItem>
            <GridItem item xs={6}>
              <Typography gutterBottom>{transactionType}</Typography>
            </GridItem>
          </React.Fragment>
          <React.Fragment>
            <GridItem item xs={6}>
              <Typography gutterBottom>From ({fromCurrency}): </Typography>
            </GridItem>
            <GridItem item xs={6}>
              <Typography gutterBottom>{from}</Typography>
            </GridItem>
          </React.Fragment>
          <React.Fragment>
            <GridItem item xs={6}>
              <Typography gutterBottom>To ({toCurrency}): </Typography>
            </GridItem>
            <GridItem item xs={6}>
              <Typography gutterBottom>{to}</Typography>
            </GridItem>
          </React.Fragment>
          <React.Fragment>
            <GridItem item xs={6}>
              <Typography gutterBottom>Rate</Typography>
            </GridItem>
            <GridItem item xs={6}>
              <Typography gutterBottom>{rate}</Typography>
            </GridItem>
          </React.Fragment>
          <React.Fragment>
            <GridItem item xs={6}>
              <Typography gutterBottom>Charges</Typography>
            </GridItem>
            <GridItem item xs={6}>
              <Typography gutterBottom>{charges}</Typography>
            </GridItem>
          </React.Fragment>
          <React.Fragment>
            <GridItem item xs={6}>
              <Typography gutterBottom>Total</Typography>
            </GridItem>
            <GridItem item xs={6}>
              <Typography gutterBottom>{total}</Typography>
            </GridItem>
          </React.Fragment>
        </GridItem>
      </GridItem>
    </GridContainer>
  );
};

export default TransactionReview;
