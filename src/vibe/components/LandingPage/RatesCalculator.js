import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "GBP",
    label: "£",
  },
  {
    value: "NGN",
    label: "₦",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // align:      "center",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column-reverse",
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column-reverse",
    },
  },

  label: {
    textTransform: "capitalize",
    fontSize: "1.125rem",
    background: "#20B8EB",
    padding: "4px 64px",
    borderRadius: "16px",
    color: "#FFFFFF",
  },

  ratesContainer: {
    width: "398px",
    height: "381px",
    background: "#FFFFFF",
    boxShadow: "0px 12px 30px 6px rgba(66, 113, 164, 0.104891)",
    borderRadius: "22px",
    paddingLeft: "50px",
    [theme.breakpoints.down("xs")]: {
      paddingBottom: "40px",
      paddingLeft: "20px",
    },
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "40px",
    },
  },

  ratesText: {
    paddingLeft: "50px",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      paddingBottom: "30px",
      paddingLeft: "0",
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      paddingBottom: "30px",
      paddingLeft: "0",
    },
  },

  currencyField: {
    paddingLeft: "8px",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "2px",
    },
  },

  ratesResponse: {
    width: "310px",
    background: "#D8D8D8",
    outline: "none",
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },

  text: {
    margin: "32px 0 8px",
  },
}));

const RatesCalculator = () => {
  const classes = useStyles();

  const [currency, setCurrency] = React.useState("EUR");
  const [currency2, setCurrency2] = React.useState("NGN");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleChange2 = (event) => {
    setCurrency2(event.target.value);
  };

  return (
    <>
      <Grid
        className={classes.root}
        container
        justify="center"
        alignItems="center"
        style={{ paddingBottom: "50px" }}
      >
        <Grid
          item
          xs={12}
          md={5}
          align="left"
          className={classes.ratesContainer}
        >
          <div>
            <p className={classes.text}>From</p>
            <TextField
              id="outlined-number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
            <TextField
              id="outlined-select-currency"
              select
              value={currency}
              onChange={handleChange}
              variant="outlined"
              className={classes.currencyField}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div>
            <p className={classes.text}>To</p>
            <TextField
              id="outlined-number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
            <TextField
              id="outlined-select-currency"
              select
              value={currency2}
              onChange={handleChange2}
              variant="outlined"
              className={classes.currencyField}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div>
            <p className={classes.text}>Rates</p>
            <TextField variant="outlined" className={classes.ratesResponse} />
          </div>
        </Grid>

        <Grid item xs={12} md={5} align="right" className={classes.ratesText}>
          <Typography component="div">
            <Box
              fontSize="h5.fontSize"
              fontWeight="fontWeightBold"
              color="#555555"
              m={2}
            >
              <span style={{ color: "#20B8EB" }}>Foreign</span>{" "}
              <span style={{ color: "#4F88C7" }}>Exchange</span> on the go
            </Box>
            <Box color="#555555" m={2}>
              Get debits and credits directly to your bank account with just a
              few simple steps
            </Box>
          </Typography>
          <Button
            classes={{
              label: classes.label,
            }}
          >
            Get Started
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
export default RatesCalculator;
