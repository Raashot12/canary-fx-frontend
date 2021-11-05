import React from "react";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import TransactionSteps from "./TransactionSteps";
import { TransactionSummary } from "./Summary/TransactionSummary";
import data from "./StepperForm/StepsFormModel/data";
const { formField } = data;

const NewTransaction = () => {
  return (
    <div>
      <GridContainer>
        <GridItem item xs={12} sm={12} md={8}>
          <TransactionSteps formField={formField} />
        </GridItem>
        <GridItem item xs={12} sm={12} md={4}>
          <TransactionSummary />
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default NewTransaction;
