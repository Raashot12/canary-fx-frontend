import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import { TransactionDetails } from "./StepperForm/TransactionDetails";
import { PaymentDetails } from "./StepperForm/PaymentDetails";
import { Comfirmation } from "./StepperForm/Confirmation";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import GridItem from "components/Grid/GridItem";import data from "./StepperForm/StepsFormModel/data";
import { useStyles, BootstrapButton, BootstrapButton2 } from "./stepsStyle"
const { formField } = data;


function getSteps() {
  return ["Transaction Details", "Payment Details", "Comfirmation"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <TransactionDetails formField={formField} />;
    case 1:
      return <PaymentDetails formField={formField} />;
    case 2:
      return <Comfirmation formField={formField} />;
    default:
      return <div>Not Found</div>;
  }
}

const FORM_VALIDATION = Yup.object().shape({
  from: Yup.number().required("Required"),
  to: Yup.number().required("Required"),
});

const formInitialValues = {
  transactionType: "",
  from: "",
  to: "",
};


 

export default function TransactionSteps(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const isLastStep = activeStep === steps.length - 1;



  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  function _sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function submitForm(values, actions) {
    await _sleep(1000);
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
    setActiveStep(activeStep + 1);
  }

  function handleSubmit(values, actions) {
    // console.log(values, actions);
    if (isLastStep) {
      submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <React.Fragment>
        {activeStep === steps.length ? (
          <div>
            <Comfirmation />
          </div>
        ) : (
          <Formik
            initialValues={formInitialValues}
            validationSchema={FORM_VALIDATION}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div style={{ margin: "2rem" }}>
                  {getStepContent(activeStep)}

                  <div className={classes.buttonsDiv}>
                      <GridItem xs={12} sm={6} md={6}>
                        {activeStep !== 0 && (
                          <BootstrapButton2
                            onClick={handleBack}
                            variant="contained"
                            color="primary"
                            disableRipple
                            fullWidth
                          >
                            <Typography className={classes.prevbuttonColor}>
                              Previous
                            </Typography>
                          </BootstrapButton2>
                        )}
                      </GridItem>
                      <GridItem xs={12} sm={6} md={6}>
                        <BootstrapButton
                          disabled={isSubmitting}
                          type="submit"
                          variant="contained"
                          color="secondary"
                          disableRipple
                          fullWidth
                        >
                          {isLastStep ? (
                            <Typography className={classes.buttonColor}>
                              Confirm
                            </Typography>
                          ) : (
                            <Typography className={classes.buttonColor}>
                              Next
                            </Typography>
                          )}
                        </BootstrapButton>
                      </GridItem>
                      {isSubmitting && (
                        <CircularProgress
                          size={24}
                          className={classes.buttonProgress}
                        />
                      )}
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </React.Fragment>
    </div>
  );
}
