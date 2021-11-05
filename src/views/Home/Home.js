import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import Table from "components/Table/Table.js";
import CardBody from "components/Card/CardBody.js";
import { CardContent } from "@material-ui/core";

const styles = {
  root: {
    // marginTop: "55px",
    "& .MuiGrid-root .MuiGrid-item": {
      display: "flex",
      flexDirection: "row",
      boxSizing: "contentBox",
      marginTop: "-15px",
    },
  },
  cardCategory: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#91919C",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#91919C",
    marginTop: "100px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
  cardBodyText: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#000",
    fontSize: "26px",
    fontWeight: "900",
    width: "100%",
    margin: "1rem 0",
  },
  recentTransaction: {
    boxShadow: "0px 12px 30px 6px rgba(66, 113, 164, 0.104891)",
  },
};

const style = {
  marginTop: "10px",
  boxShadow: "0px 12px 30px 6px rgba(66, 113, 164, 0.104891)",
};

const useStyles = makeStyles(styles);

export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <GridContainer>
        <GridItem
          xs={12}
          sm={12}
          md={9}
          style={{ padding: "0" }}
          className={classes.root}
        >
          <GridItem container>
            <GridItem xs={12} sm={4} md={4} style={style}>
              <Card>
                <CardContent>
                  <CardHeader>
                    <p className={classes.cardCategory}>Wallet Balance</p>
                  </CardHeader>
                  <div>
                    <h5 className={classes.cardBodyText}>1500</h5>
                  </div>
                </CardContent>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4} style={style}>
              <Card>
                <CardContent>
                  <CardHeader>
                    <p className={classes.cardCategory}>
                      Successful Transactions
                    </p>
                  </CardHeader>
                  <div>
                    <h5 className={classes.cardBodyText}>40</h5>
                  </div>
                </CardContent>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4} style={style}>
              <Card>
                <CardContent>
                  <CardHeader>
                    <p className={classes.cardCategory}>Pending Transactions</p>
                  </CardHeader>
                  <div>
                    <h5 className={classes.cardBodyText}>4</h5>
                  </div>
                </CardContent>
              </Card>
            </GridItem>
          </GridItem>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <div className="btn-transactin-div">
            <a href="#/transact" className="button-blue">
              New Transaction
            </a>
          </div>
          <div className="btn-transactin-div">
            <a href="#/transact" className="button-white">
              Transfer Fund
            </a>
          </div>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <div>
            <h4 className={classes.cardTitleWhite}>Recent Transactions</h4>
          </div>
          <Card className={classes.recentTransaction}>
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
      </GridContainer>
    </div>
  );
}
