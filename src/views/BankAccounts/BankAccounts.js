import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

// core components
import GTBank_logo from "assets/images/GTBank_logo.png";

const styles = {
  btnTransaction: {
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
  cardRoot: {
    minWidth: 200,
    borderRadius: "8px",
    marginLeft: "18px",
    boxShadow: "0px 12px 30px 6px rgba(66, 113, 164, 0.104891)",
  },
  bankName: {
    fontSize: 18,
    color: "#91919C",
    marginTop: "-6px",
  },
  bankLogo: {
    width: "40px",
    height: "40px",
    objectFit: "cover",
  },
  title: {
    fontSize: 14,
    textAlign: "center",
    color: "#91919C",
    marginTop: "10px",
  },
  accountNumber: {
    fontSize: 22,
    textAlign: "center",
    color: "#000000",
    fontWeight: "bold",
  },
  cardRoot2: {
    display: "flex",
    justifyContent: "center",
  },
  addBank: {
    fontSize: 18,
    textAlign: "center",
    color: "#91919C",
    marginTop: "10px",
  },
  addIcon: {
    display: "flex",
    justifyContent: "center",
    fontSize: 32,
    color: "#91919C",
    marginTop: "20px",
  },
};

const useStyles = makeStyles(styles);

export default function BankAccounts() {
  const classes = useStyles();
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <Card className={classes.cardRoot}>
            <CardContent>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p className={classes.bankName}>GTBank</p>
                <img
                  src={GTBank_logo}
                  alt="bank logo"
                  className={classes.bankLogo}
                />
              </div>
              <Typography
                className={classes.title}
                color="primary"
                gutterBottom
              >
                Account Number
              </Typography>
              <Typography className={classes.accountNumber}>
                0039878839
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.cardRoot}>
            <CardContent className={classes.cardRoot2}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography className={classes.addBank} gutterBottom>
                  Add Bank
                </Typography>
                <AddCircleOutlineIcon
                  align="center"
                  className={classes.addIcon}
                />
              </div>
            </CardContent>
          </Card>
        </div>
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
    </div>
  );
}
