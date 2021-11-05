import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CardBody from "components/Card/CardBody.js";
import Table from "components/Table/Table.js";

const styles = {
  cardRoot: {
    minWidth: 230,
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    color: "#91919C",
  },
  pos: {
    marginBottom: 8,
    fontSize: 28,
    textAlign: "center",
    color: "#000000",
    fontWeight: "bold",
  },
  btnBeneficiary: {
    background: "#20B8EB",
    borderRadius: "32px",
    padding: "8px 52px",
    textTransform: "initial",
    fontSize: "18px",
    fontWeight: "300",
    color: "#FFFFFF",
    marginTop: "-70px",
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
  root: {
    marginTop: "55px",
    boxShadow: "0px 12px 30px 6px rgba(66, 113, 164, 0.104891)",
  },
};

const useStyles = makeStyles(styles);

export default function Beneficiaries() {
  const classes = useStyles();
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Card className={classes.cardRoot}>
          <CardContent>
            <Typography className={classes.title} color="primary" gutterBottom>
              Total Beneficiaries
            </Typography>
            <Typography className={classes.pos} color="primary">
              10
            </Typography>
          </CardContent>
        </Card>

        <Button
          className={classes.label}
          variant="outlined"
          classes={{
            label: classes.btnBeneficiary,
          }}
        >
          Add Beneficiary
        </Button>
      </div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <h4
            style={{
              color: "#91919C",
              marginBottom: "-45px",
              marginTop: "60px",
            }}
          >
            Beneficiaries
          </h4>
          <Paper component="form" className={classes.root} elevation={3}>
            <CardBody>
              <Table
                tableHeaderColor="primary"
                tableHead={[
                  "Bank Name",
                  "Account Name",
                  "Account Number",
                  "IBAN Number",
                  "Routing Number",
                  "Swift Code",
                  "Bank Sort Code",
                ]}
                tableData={[[""], [""]]}
              />
            </CardBody>
          </Paper>
        </GridItem>
      </GridContainer>
    </div>
  );
}
