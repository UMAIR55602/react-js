import React from "react";
import Header from "./Header";
import Herosection from "./hero-section";
import Domainsection from "./domain-section";
import Portfoliosection from "./portfolio-section";
import AboutSection from "./about-section";
import StatsSection from "./statssection";
import TestimonialSection from "./testimonialsection";
import Nexenlovesection from "./nexezlove-section";
import ContactUS from "./contact-us";
import Footer from "./footer";
function MainNexen() {
  return (
    <>
      <Herosection />
      <Domainsection />
      <Portfoliosection/>
      <AboutSection/>
      <StatsSection/>
      <TestimonialSection/>
      <Nexenlovesection/>
      <ContactUS/>
      <Footer/>
    </>
  );
}

export default MainNexen;
