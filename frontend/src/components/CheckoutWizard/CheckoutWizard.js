import { Step, StepLabel, Stepper } from '@material-ui/core';
import React from 'react';
// import useStyles from '../utils/styles';

 const CheckoutWizard = ({ activeStep = 0 }) => {
//   const classes = useStyles();
  return (
    <Stepper
    //   className={classes.transparentBackgroud}
      activeStep={activeStep}
      alternativeLabel
    >
      {['Login', 'Shipping Address', 'Comfirm Order', 'Success'].map(
        (step) => (
          <Step key={step}>
            <StepLabel>{step}</StepLabel>
          </Step>
        )
      )}
    </Stepper>
  );
}


export default CheckoutWizard;