import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const defaultProps = {
  bgcolor: "background.paper",
  m: 6,
  style: {
    width: "100%",
    height: "10rem",
    borderRadius: "14px",
    backgroundColor: "#20B8EB",
    margin: "48px 0",
    paddingTop: "30px",
  },
};

const useStyles = makeStyles((theme) => ({
  label: {
    textTransform: "capitalize",
    fontSize: "1.125rem",
    background: "#ffffff",
    padding: "4px 64px",
    borderRadius: "16px",
    color: "#20B8EB",
    marginTop: "20px",
  },

  text: {
    color: "#ffffff",
    fontSize: "24px",
  },
}));

const GetStarted = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} align="center">
          <Box borderColor="primary.main" {...defaultProps}>
            <Typography className={classes.text}>
              Exchange is simply better with Canary FX
            </Typography>
            <Button
              classes={{
                label: classes.label,
              }}
            >
              Get Started
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default GetStarted;
