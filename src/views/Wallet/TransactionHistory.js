import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import Table from "components/Table/Table.js";
import CardBody from "components/Card/CardBody.js";

const styles = {
  cardTitleWhite: {
    color: "#91919C",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
  history: {
    margin: "100px auto 0 20px",
    boxShadow: "0px 12px 30px 6px rgba(66, 113, 164, 0.104891)",
    "& h4": {
      padding: 0,
    },
  },
};

const useStyles = makeStyles(styles);

const TransactionHistory = () => {
  const classes = useStyles();

  return (
    // <div className={classes.history}>
    <GridItem xs={12} sm={12} md={12} className={classes.history}>
      <div>
        <h4 className={classes.cardTitleWhite}>Transaction history</h4>
      </div>
      <Card>
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
                "yggdgds",
                "loan",
                "canary",
                "N100000",
                "N100000",
                "260",
                "Pending",
              ],
            ]}
          />
        </CardBody>
      </Card>
    </GridItem>
    // </div>
  );
};

export default TransactionHistory;
