import React from "react";
import { useFormikContext } from "formik";
import TransactionReview from "./Confirmation/TransactionReview";
import PaymentReview from "./Confirmation/PaymentReview";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

export const Comfirmation = ({ formField }) => {

  const { values: formValues } = useFormikContext();

  return (
    <GridContainer>
      <GridItem container spacing={2}>
        <TransactionReview formValues={formValues} formField={formField} />
        <PaymentReview formValues={formValues} />
      </GridItem>
    </GridContainer>
  );
};
