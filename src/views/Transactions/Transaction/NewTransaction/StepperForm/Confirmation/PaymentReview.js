import React from "react";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import { Typography } from "@material-ui/core";
import CheckboxWrapper from "components/FormsUI/Checkbox/Checkbox"


const style = {
  color: "#000",
  fontWeight: 600,
  margin: "1rem 10px 0"
};


const PaymentReview = ({ formValues }) => {
  const {
    payment0ption,
    bankAccount,
    recipientType,
    beneficiaryAccount,
  } = formValues;

  return (
    <GridContainer>
      <GridItem md={12}>
        <GridItem>
          <Typography gutterBottom style={style}>
            Payment details
          </Typography>
        </GridItem>
        <GridItem container>
          <React.Fragment>
            <GridItem item xs={6}>
              <Typography gutterBottom>Payment Option</Typography>
            </GridItem>
            <GridItem item xs={6}>
              <Typography gutterBottom>{payment0ption}</Typography>
            </GridItem>
          </React.Fragment>
          <React.Fragment>
            <GridItem item xs={6}>
              <Typography gutterBottom>Bank Acconut: </Typography>
            </GridItem>
            <GridItem item xs={6}>
              <Typography gutterBottom>{bankAccount}</Typography>
            </GridItem>
          </React.Fragment>
        </GridItem>
      </GridItem>
      <GridItem md={12}>
        <GridItem>
          <Typography gutterBottom style={style}>
            Recipient Details
          </Typography>
        </GridItem>
        <GridItem container>
          <React.Fragment>
            <GridItem item xs={6}>
              <Typography gutterBottom>Recipient type</Typography>
            </GridItem>
            <GridItem item xs={6}>
              <Typography gutterBottom>{recipientType}</Typography>
            </GridItem>
          </React.Fragment>
          <React.Fragment>
            <GridItem item xs={6}>
              <Typography gutterBottom>Beneficiary Account: </Typography>
            </GridItem>
            <GridItem item xs={6}>
              <Typography gutterBottom>{beneficiaryAccount}</Typography>
            </GridItem>
          </React.Fragment>
        </GridItem>
      </GridItem>
      <GridItem item xs={12} style={style}>
        <React.Fragment>
          <GridItem item xs={12}>
            <CheckboxWrapper
              name="confirmation"
              label="I conform that the payment details are accurate"
            />
          </GridItem>
        </React.Fragment>
      </GridItem>
    </GridContainer>
  );
};

export default PaymentReview;
