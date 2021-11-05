import React from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";
import {useField, useFormikContext } from "formik";

const FormikDatePicker = ({ label, field: { value, name }, ...rest }) => {
  const { setFieldValue } = useFormikContext();
  const [field, mata] = useField(name);


  return (
    <KeyboardDatePicker
      name={name}
      field={field}
      id="datepicker"
      disableToolbar
      label={label}
      inputVariant="outlined"
      keyboard="true"
      clearable
      autoOk
      format="dd/MM/yyyy"
      value={value}
      onChange={(value) => {
        setFieldValue(name, value);
      }}
      KeyboardButtonProps={{
        "aria-label": "change date",
      }}
    />
  );
};

export default FormikDatePicker;

// import { TextField } from '@material-ui/core';
// import { useField } from 'formik';

// const DateTimePicker = ({
//   name,
//   ...otherProps
// }) => {
//   const [field, meta] = useField(name);

//   const configDateTimePicker = {
//     ...field,
//     ...otherProps,
//     type: 'date',
//     variant: 'outlined',
//     fullWidth: true,
//     InputLabelProps: {
//       shrink: true
//     }
//   };

// if(meta && meta.touched && meta.error) {
//   configDateTimePicker.error = true;
//   configDateTimePicker.helperText = meta.error;
// }

//   return (
//     <TextField
//       {...configDateTimePicker}
//     />
//   );
// };

// export default DateTimePicker;
