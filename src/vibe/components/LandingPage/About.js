import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Currency from "../../../assets/images/Currency.png";
import MakePayment from "../../../assets/images/MakePayment.png";
import DestinationAccount from "../../../assets/images/DestinationAccount.png";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const about = [
  {
    image: Currency,
    title: "Select a currency to buy or sell",
    content:
      "You can choose to make trades between your Nigerian Naira and American Dollars, UK Pounds, or Euros.",
  },
  {
    image: DestinationAccount,
    title: "Select a destination account",
    content:
      "Top up your virtual wallet or send the exchanged money directly to an account, the choice is yours.",
  },
  {
    image: MakePayment,
    title: "Make your payment",
    content:
      "It’s that easy! Make your payment and receive your foreign exchange in a few minutes.",
  },
];

const useStyles = makeStyles((theme) => ({
  aboutContainer: {
    border: "5px solid transparent",
    borderImage: "linear-gradient(to right, lightblue, orange)",
    borderImageSlice: "1",
    padding: "40px 0 60px",
  },
  aboutItems: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "left",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      textAlign: "center",
      padding: "0 16px",
    },
  },
  aboutText: { maxWidth: "500px", color: "#555555" },
  aboutTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    paddingBottom: "8px",
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        justify="center"
        align="center"
        className={classes.aboutContainer}
      >
        <Box
          textAlign="center"
          fontSize="h5.fontSize"
          fontWeight="fontWeightBold"
          color="#20B8EB"
        >
          How it Works
        </Box>
        {about.map((item) => {
          return (
            <Grid item xs={12} className={classes.aboutItems}>
              <img src={item.image} alt="" height="150px" />
              <div className={classes.aboutText}>
                <Typography className={classes.aboutTitle}>
                  {item.title}
                </Typography>
                <Typography>{item.content}</Typography>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default About;
