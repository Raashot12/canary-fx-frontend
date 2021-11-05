import React from "react";
import Container from "@material-ui/core/Container";
import HeroBanner from "../../vibe/components/LandingPage/HeroBanner";
import RatesCalculator from "../../vibe/components/LandingPage/RatesCalculator";
import About from "../../vibe/components/LandingPage/About";
import Footer from "../../vibe/components/LandingPage/Footer";
import GetStarted from "../../vibe/components/LandingPage/GetStarted";
import Testimonial from "../../vibe/components/LandingPage/Testimonial";
import Navbar from "vibe/components/LandingPage/Navbar";

const HowItWorks = () => {
  return (
    <Container style={{ overflow: "hidden" }}>
      <Navbar />
      <HeroBanner />
      <RatesCalculator />
      <About />
      <Testimonial />
      <GetStarted />
      <Footer />
    </Container>
  );
};

export default HowItWorks;
