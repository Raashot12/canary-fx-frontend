import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import Table from "components/Table/Table.js";
import CardBody from "components/Card/CardBody.js";

const currencies = [
  {
    value: "All",
  },
  {
    value: "Transaction ID",
  },
  {
    value: "From Amount",
  },
  {
    value: "Rate",
  },
  {
    value: "Date",
  },
  {
    value: "Status",
  },
];

const useStyles = makeStyles((theme) => ({
  btnContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
  btnTransaction: {
    background: "#20B8EB",
    borderRadius: "32px",
    padding: "8px 52px",
    textTransform: "initial",
    fontSize: "18px",
    fontWeight: "300",
    color: "#FFFFFF",
    // zIndex: "-1",
    "&:hover": {
      backgroundColor: "#CDE7FB",
      color: "#0D5AE5",
    },
  },
  label: {
    padding: "0",
    border: "none",
    borderRadius: "32px",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    fontSize: "16px",
  },
  searchField: {
    width: "300px",
    display: "flex",
    justifyContent: "flex-end",
    border: "1px solid #C3C3C3",
    borderRadius: "6px",
  },
  iconButton: {
    padding: "0",
  },
  searchIcon: {
    background: "#4F88C7",
    padding: "7px 10px",
    borderRadius: "4px",
  },
  tableNav: {
    display: "flex",
    justifyContent: "space-between",
    height: "auto",
    marginTop: "48px",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
  },
  searchOptions: {
    // marginRight: "18px",
    width: "220px",
    outline: "none",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "18px",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      marginBottom: "18px",
    },
  },
}));

const AllTransaction = () => {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState("All");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <>
      <div className={classes.btnContainer}>
        <Button
          className={classes.label}
          variant="outlined"
          classes={{
            label: classes.btnTransaction,
          }}
        >
          New Transaction
        </Button>
      </div>
      <div className={classes.tableNav}>
        <div className={classes.searchField}>
          <InputBase
            className={classes.input}
            placeholder="Search"
            inputProps={{ "aria-label": "search" }}
          />
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
          >
            <SearchIcon className={classes.searchIcon} />
          </IconButton>
        </div>
        <div>
          <TextField
            className={classes.searchOptions}
            id="outlined-select-currency"
            select
            value={currency}
            onChange={handleChange}
            variant="outlined"
            size="small"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </div>

      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Paper component="form" className={classes.root}>
            <CardBody>
              <Table
                tableHeaderColor="primary"
                tableHead={[
                  "Transaction ID",
                  "Activity",
                  "From Amount",
                  "To Amount",
                  "Rate",
                  "Date",
                  "Status",
                ]}
                tableData={[
                  [
                    "testing",
                    "testing",
                    "testing",
                    "testing",
                    "testing",
                    "testing",
                    "testing",
                  ],
                  [
                    "testing",
                    "testing",
                    "testing",
                    "testing",
                    "testing",
                    "testing",
                    "testing",
                  ],
                ]}
              />
            </CardBody>
          </Paper>
        </GridItem>
      </GridContainer>
    </>
  );
};

AllTransaction.propTypes = {};

export default AllTransaction;
