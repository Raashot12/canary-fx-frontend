import { InputLabel, makeStyles } from "@material-ui/core";
import Button from "components/FormsUI/Button/Button";
import RadioButton from "components/FormsUI/RadioButton/RadioButton";
import SelectWrapper from "components/FormsUI/Select/Select";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import { Field } from "formik";
import React from "react";

const options = [
    {
      id: 1,
      value: "wallet",
      label: "Wallet",
    },
  {
    id: 2,
    value: "personalAccount",
    label: "Personal Account",
  },
];
const BeneficiaryDetailsOpt = [
  {
    id: 1,
    value: "beneficiaryAccount",
    label: "beneficiary Account",
  },
  {
    id: 2,
    value: "wallet",
    label: "Wallet",
  },
  {
    id: 3,
    value: "personalAccount",
    label: "Personal Account",
  },
];

const banks = [
    {
        id: 1,
        label: "UBA",
        value: "uba",
    }
]

const BeneficiaryData = [
    {
        id: 1,
        label: "Samson Sunday",
        value: "08038230722",
    }
]

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
  },
  Typography: {
    marginLeft: "10px",
  },
  button: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      flex: "1",
      marginTop: "30px"
  },
}));

const style = { padding: "1rem 20%" };
export const PaymentDetails = () => {
      const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem item xs={12}>
          <GridItem>
            <InputLabel className={classes.label}>
              Select a Payment Source
            </InputLabel>
          </GridItem>
          <GridItem>
            <Field
              name="payment0ption"
              options={options}
              component={RadioButton}
            />
          </GridItem>
        </GridItem>
        <GridItem xs={12} sm={6}>
          <GridItem>
            <InputLabel className={classes.label}>
              Select a Bank Account
            </InputLabel>
          </GridItem>
          <GridItem>
            <SelectWrapper
              variant="outlined"
              name="bankAccount"
              fullWidth
              data={banks}
            />
          </GridItem>
        </GridItem>
        <GridItem xs={12} sm={6}>
          <div className={classes.button}>
            <Button className="button-white" style={style}>
              Add Bank Account
            </Button>
          </div>
        </GridItem>
        <GridItem item xs={12} style={{ marginTop: "3rem" }}>
          <GridItem>
            <InputLabel className={classes.label}>Recepient Details</InputLabel>
          </GridItem>
          <GridItem>
            <Field
              defaultValue= "undefined"
              name="recipientType"
              options={BeneficiaryDetailsOpt}
              component={RadioButton}
            />
          </GridItem>
        </GridItem>
        <GridItem xs={12} sm={6}>
          <GridItem>
            <InputLabel className={classes.label}>
              Select Beneficiary
            </InputLabel>
          </GridItem>
          <GridItem>
            <SelectWrapper
              variant="outlined"
              name="beneficiaryAccount"
              fullWidth
              data={BeneficiaryData}
            />
          </GridItem>
        </GridItem>
        <GridItem xs={12} sm={6}>
          <div className={classes.button}>
            <Button className="button-white" style={style}>
              Add Beneficiary
            </Button>
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
};
