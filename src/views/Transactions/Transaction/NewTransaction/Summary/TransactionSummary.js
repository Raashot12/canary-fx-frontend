import {
  Card,
  CardContent,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import GridContainer from "components/Grid/GridContainer";
import React from "react";

const useStyles = makeStyles((theme) => ({
  summary: {
    display: "block",
    margin: "5rem 2rem",
    color: "#91919c",
  },
  card: {
    width: "100%",
    boxShadow: "0px 12px 30px 6px rgba(66, 113, 164, 0.104891)",
    color: "#91919c",
  },
  header: {
    color: "#0D5AE5",
    fontSize: 18,
    fontWeight: "600",
    margin: "1rem auto",
  },
  head: {
    color: "#91919c",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: "0.5rem",
    marginTop: "1rem",
  },
}));

export const TransactionSummary = () => {
  const classes = useStyles();

  return (
    <div className={classes.summary}>
      <GridContainer>
        <Card className={classes.card}>
          <CardContent>
            <Grid>
              <Typography className={classes.header} gutterBottom>
                Payment
              </Typography>
            </Grid>
            <React.Fragment>
              <Grid>
                <Typography className={classes.head} gutterBottom>
                  Payment
                </Typography>
              </Grid>
              <Grid container spacing={5}>
                <Grid item xs={6}>
                  <Typography gutterBottom>NGN</Typography>
                  <Typography gutterBottom>USD</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>4000000</Typography>
                  <Typography gutterBottom>4000000</Typography>
                </Grid>
              </Grid>
            </React.Fragment>
            <React.Fragment>
              <Grid>
                <Typography className={classes.head} gutterBottom>
                  charges
                </Typography>
              </Grid>
              <Grid container spacing={5}>
                <Grid item xs={6}>
                  <Typography gutterBottom>Bank Charges</Typography>
                  <Typography gutterBottom>Total</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>4000000</Typography>
                  <Typography gutterBottom>4000000</Typography>
                </Grid>
              </Grid>
            </React.Fragment>
          </CardContent>
        </Card>
      </GridContainer>
    </div>
  );
};
