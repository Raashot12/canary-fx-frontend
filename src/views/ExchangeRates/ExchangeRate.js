import React from "react";
import clsx from "clsx";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import Table from "components/Table/Table.js";

import ExchangeCalculator from "./ExchangeCalculator";
import DailyRate from "./DailyRate";
import ExchangeTabble from "./ExchangeTabble";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "-15px",
  },
  title: {
    fontSize: 14,
    marginBottom: theme.spacing(1),
    left: "1px",
    padding: "3px 10px",
    borderRadius: "5px",
    fontWeight: "700",
  },
  tableData: {
    color: "red",
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
}));

const exchangeCalculator = {
  marginTop: "2rem",
};

export default function ExchangeRate() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GridContainer spacing={4}>
        <GridItem xs={12} sm={12} md={8}>
          <div>
            <Grid container>
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
                        USD
                      </Typography>
                    </div>
                    <Divider variant="fullWidth" />
                    <Table
                      tableHeaderColor="primary"
                      tableHead={["BUY", "SELL"]}
                      tableData={[["N45O", "N470"]]}
                    />
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
                    <Table
                      tableHeaderColor="primary"
                      tableHead={["BUY", "SELL"]}
                      tableData={[["N45O", "N470"]]}
                    />
                  </CardContent>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={4} md={4}>
                <Card>
                  <CardContent>
                    <div className={classes.flex}>
                      <Typography
                        className={clsx(classes.title, classes.eur)}
                        color="textSecondary"
                        gutterBottom
                        variant="h6"
                      >
                        EUR
                      </Typography>
                    </div>
                    <Divider variant="fullWidth" />
                    <Table
                      tableHeaderColor="primary"
                      tableHead={["BUY", "SELL"]}
                      tableData={[["N45O", "N470"]]}
                    />
                  </CardContent>
                </Card>
              </GridItem>
            </Grid>
          </div>
        </GridItem>
        <GridItem xs={12} sm={6} md={4} style={exchangeCalculator}>
          <ExchangeCalculator />
        </GridItem>
      </GridContainer>
      <GridItem xs={12} sm={12} md={8}>
        <DailyRate />
        <ExchangeTabble />
      </GridItem>
    </div>
  );
}
