import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// core components

const useStyles = makeStyles((theme) => ({
  table: {
    margin: "24px auto 0",
    width: "100%",
    maxWidth: "100%",
    backgroundColor: "#FEFEFE",
    borderSpacing: "0",
    borderCollapse: "collapse",
  },
  tableWrapper: {
    margin: "24px 26px",
    borderSpacing: "0",
    borderCollapse: "collapse",
    [theme.breakpoints.down("xs")]: {
      margin: "24px auto",
    },
  },
  tableHeadCell: {
    color: "inherit",
    "&, &$tableCell": {
      fontSize: "1em",
    },
  },
  tableCell: {
    lineHeight: "1.42857143",
    padding: "3px 8px",
    verticalAlign: "middle",
    fontSize: "0.8125rem",
    textAlign: "center",
  },
  tableResponsive: {
    width: "100%",
    marginTop: theme.spacing(2),
    overflowX: "auto",
  },
  tableHeadRow: {
    height: "40px",
    color: "#4F88C7",
    display: "table-row",
    outline: "none",
    verticalAlign: "middle",
  },
  tableBodyRow: {
    height: "48px",
    color: "inherit",
    display: "table-row",
    outline: "none",
    verticalAlign: "middle",
  },
}));

const ExchangeTabble = () => {
  const classes = useStyles();

  return (
    <div className={classes.tableWrapper}>
      <GridContainer>
        <GridItem>
          <Table className={classes.table}>
            <TableHead>
              <TableRow className={classes.tableHeadRow}>
                <TableCell
                  className={classes.tableCell + " " + classes.tableHeadCell}
                >
                  DATE
                </TableCell>
                <TableCell
                  className={classes.tableCell + " " + classes.tableHeadCell}
                  align="right"
                >
                  USD
                </TableCell>
                <TableCell
                  className={classes.tableCell + " " + classes.tableHeadCell}
                  align="right"
                >
                  GPD
                </TableCell>
                <TableCell
                  className={classes.tableCell + " " + classes.tableHeadCell}
                  align="right"
                >
                  EUR
                </TableCell>
              </TableRow>
            </TableHead>
            <TableHead>
              <TableRow className={classes.tableHeadRow}>
                <TableCell>DD-MM-YYYY</TableCell>
                <TableCell align="right">
                  <TableRow className={classes.tableHeadRow}>
                    <TableCell align="right">BUY</TableCell>
                    <TableCell align="right">SELL</TableCell>
                  </TableRow>
                </TableCell>
                <TableCell className={classes.tableCell} align="right">
                  <TableRow className={classes.tableHeadRow}>
                    <TableCell align="right">BUY</TableCell>
                    <TableCell align="right">SELL</TableCell>
                  </TableRow>
                </TableCell>
                <TableCell className={classes.tableCell} align="right">
                  <TableRow className={classes.tableHeadRow}>
                    <TableCell align="right">BUY</TableCell>
                    <TableCell align="right">SELL</TableCell>
                  </TableRow>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow className={classes.tableBodyRow}>
                <TableCell
                  className={classes.tableCell + " " + classes.tableHeadCell}
                >
                  01-02-2021
                </TableCell>
                <TableCell className={classes.tableCell} align="right">
                  <TableRow className={classes.tableBodyRow}>
                    <TableCell align="right">450</TableCell>
                    <TableCell align="right">500</TableCell>
                  </TableRow>
                </TableCell>
                <TableCell
                  className={classes.tableCell + " " + classes.tableHeadCell}
                  align="right"
                >
                  <TableRow className={classes.tableBodyRow}>
                    <TableCell align="right">450</TableCell>
                    <TableCell align="right">500</TableCell>
                  </TableRow>
                </TableCell>
                <TableCell
                  className={classes.tableCell + " " + classes.tableHeadCell}
                  align="right"
                >
                  <TableRow className={classes.tableBodyRow}>
                    <TableCell align="right">450</TableCell>
                    <TableCell align="right">500</TableCell>
                  </TableRow>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default ExchangeTabble;
