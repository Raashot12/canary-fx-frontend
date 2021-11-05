import React from "react";
import clsx from "clsx";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import { Button } from "@material-ui/core";
import AddCircleOutlined from "@material-ui/icons/AddCircle";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import TransactionHistory from "./TransactionHistory";
import CardBody from "components/Card/CardBody";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiGrid-root .MuiGrid-item": {
      display: "flex",
      flexDirection: "row",
      boxSizing: "contentBox",
      marginTop: "-15px",
    },
  },
  walletWrapper: {
    marginTop: "-15px",
    marginLeft: 0,
  },
  walletBox: {
    marginLeft: 0,
  },
  title: {
    fontSize: 14,
    marginBottom: theme.spacing(1),
    left: "1px",
    padding: "3px 10px",
    borderRadius: "5px",
    fontWeight: "700",
  },
  flex: {
    display: "flex",
    flexDirectin: "row",
    justifyContent: "flex-end",
  },
  usd: {
    color: "#0D5AE5",
    backgroundColor: "#CDE7FB",
  },
  gpd: {
    color: "#FA51D1D",
    backgroundColor: "#FBCDCD",
  },
  eur: {
    color: "#C8800C",
    backgroundColor: "#FBEDCD",
  },
  balance: {
    textAlign: "center",
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
  walletCard: {
    boxShadow: "0px 12px 30px 6px rgba(66, 113, 164, 0.104891)",
  },
  addWallet: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "26px",
    fontWeight: "900",
    width: "100%",
    margin: "2.5rem 0 1rem",
  },
}));

export default function Wallet() {
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
            <GridItem xs={12} sm={4} md={4}>
              <Card>
                <CardContent>
                  <div className={classes.flex}>
                    <Typography
                      className={clsx(classes.title, classes.usd)}
                      color="textSecondary"
                      gutterBottom
                      variant="h6"
                    >
                      NGN
                    </Typography>
                  </div>
                  <Divider variant="fullWidth" />
                  <div className={classes.balance}>
                    <Typography>Wallet Balance</Typography>
                  </div>
                  <CardBody>
                    <h5 className={classes.cardBodyText}>1500</h5>
                  </CardBody>
                </CardContent>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card>
                <CardContent>
                  <div className={classes.flex}>
                    <Typography
                      className={clsx(classes.title, classes.gpd)}
                      color="textSecondary"
                      gutterBottom
                      variant="h6"
                    >
                      GBP
                    </Typography>
                  </div>
                  <Divider variant="fullWidth" />
                  <div className={classes.balance}>
                    <Typography>Wallet Balance</Typography>
                  </div>
                  <div>
                    <h5 className={classes.cardBodyText}>40</h5>
                  </div>
                </CardContent>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card className={classes.walletCard}>
                <CardContent>
                  <div className={classes.addWallet}>
                    <Typography>Add Wallet</Typography>
                    <Button>
                      <AddCircleOutlined
                        style={{ fontSize: 31, marginTop: 12}}
                      />
                    </Button>
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
        <TransactionHistory />
      </GridContainer>
    </div>
  );
}
