import React from "react";
import Home from "../../ComponentesEcommerce/Home/Home";
import Calendly from "../../ComponentesEcommerce/Calendly/Calendly";
import Clients from "../../ComponentesEcommerce/Clients/Clients";
import AboutUs from "../../ComponentesEcommerce/AboutUs/AboutUs";
import ClientReview from "../../ComponentesEcommerce/ClientReview/ClientReview";
import OurTools from "../../ComponentesEcommerce/OurTools/OurTools";
import Footer from "../../ComponentesEcommerce/E-Footer/E-Footer";
import "./EcommerceLanding.css";
const EcommerceLanding = () => {
  return (
    <div className="w-full">
      <Home />
     <div className="bg-gray-100 py-12 lg:py-24 space-y-14">
        <Calendly />
        <Clients />
      </div>
      <div className="background-about">
        <AboutUs />
      </div> 
  <div className="bg-gray-100 space-y-24 py-20 ">
        <ClientReview />
        <OurTools />
        <Footer />
      </div>
    </div>
  );
};

export default EcommerceLanding;
