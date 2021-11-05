import React from "react";
import { Radio, FormControlLabel, RadioGroup } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const style = {
  dislay: "inline-block",
};

const useStyles = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  icon: {
    borderRadius: "50%",
    width: 16,
    height: 16,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "#f5f8fa",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: "#ebf1f5",
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
    },
  },
  checkedIcon: {
    backgroundColor: "#20B8EB",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: "#106ba3",
    },
  },
});

// Inspired by blueprintjs
function StyledRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

const renderOptions = (options) => {
  return (
    options &&
    options.map((option) => (
      <div style={style} key={option.id}>
        <FormControlLabel
          value={option.value}
          control={<StyledRadio />}
          label={option.label}
        />
      </div>
    ))
  );
};

const RadioButton = ({
  label,
  legend,
  options,
  field,
  name,
  children,
  ...props
}) => {
  const fieldName = name || field.name;

  return (
    <RadioGroup
      defaultValue="wallet"
      style={{ flexDirection: "row" }}
      {...field}
      {...props}
      name={fieldName}
    >
      {options ? renderOptions(options) : children}
    </RadioGroup>
  );
};

export default RadioButton;
