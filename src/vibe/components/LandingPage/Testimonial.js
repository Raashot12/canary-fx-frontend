import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import PersonIcon from "@material-ui/icons/Person";
import Slider from "react-slick";
import Box from "@material-ui/core/Box";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cardDetails = [
  {
    image: "PersonIcon",
    title: "User Name",
    subtitle: "Profession",
    cardContent:
      "Make your foreign exchange orders directly from your computer or phone without contacting any personnel",
  },
  {
    image: "PersonIcon",
    title: "User Name",
    subtitle: "Profession",
    cardContent:
      "Make your foreign exchange orders directly from your computer or phone without contacting any personnel",
  },
  {
    image: "PersonIcon",
    title: "User Name",
    subtitle: "Profession",
    cardContent:
      "Make your foreign exchange orders directly from your computer or phone without contacting any personnel",
  },
  {
    image: "PersonIcon",
    title: "User Name",
    subtitle: "Profession",
    cardContent:
      "Make your foreign exchange orders directly from your computer or phone without contacting any personnel",
  },
  {
    image: "PersonIcon",
    title: "User Name",
    subtitle: "Profession",
    cardContent:
      "Make your foreign exchange orders directly from your computer or phone without contacting any personnel",
  },
  {
    image: "PersonIcon",
    title: "User Name",
    subtitle: "Profession",
    cardContent:
      "Make your foreign exchange orders directly from your computer or phone without contacting any personnel",
  },
  {
    image: "PersonIcon",
    title: "User Name",
    subtitle: "Profession",
    cardContent:
      "Make your foreign exchange orders directly from your computer or phone without contacting any personnel",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    boxShadow: "0px 12px 30px 6px rgba(46, 93, 144, 0.104891)",
    borderRadius: "22px",
    [theme.breakpoints.down("md")]: {
      maxWidth: "90%",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%",
    },
  },
}));

const Testimonial = () => {
  const classes = useStyles();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    autoplay: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    // autoplaySpeed: 3000,
  };

  return (
    <>
      <Box
        align="center"
        fontSize="h5.fontSize"
        fontWeight="fontWeightBold"
        color="#4F88C7"
        m={6}
      >
        Trusted by Users
      </Box>
      <Slider {...settings}>
        {cardDetails.map((slide, i) => {
          return (
            <Card className={classes.root} key={i}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe">
                    <PersonIcon />
                  </Avatar>
                }
                title={slide.title}
                subheader={slide.subtitle}
              />

              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {slide.cardContent}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Slider>
    </>
  );
};

export default Testimonial;
