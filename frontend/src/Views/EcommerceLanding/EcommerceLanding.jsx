import React from "react";
import Home from "../../ComponentesEcommerce/Home/Home";
import Calendly from "../../ComponentesEcommerce/Calendly/Calendly";
import Clients from "../../ComponentesEcommerce/Clients/Clients";
import AboutUs from "../../ComponentesEcommerce/AboutUs/AboutUs";
import ClientReview from "../../ComponentesEcommerce/ClientReview/ClientReview";
import OurTools from "../../ComponentesEcommerce/OurTools/OurTools";
import Footer from "../../ComponentesEcommerce/E-Footer/E-Footer";
import animatedImage from '../../assets/animated-shape.png';
import Flyer from "../../ComponentesEcommerce/Flyer/Flyer";
import "./EcommerceLanding.css";
const EcommerceLanding = () => {
  return (
    <div className="w-full">
      <Home />
      <div className="bg-gray-100 py-12 lg:py-24 space-y-14">
        <Calendly />
        <Clients />
      </div>
      <div id="about" className=""
       style={{ backgroundImage: `url(${animatedImage})` }}>
        <AboutUs />
      </div>
      <div className="bg-gray-100 space-y-14 lg:space-y-24 py-10 lg:py-20 ">
        <ClientReview />
        <div className="w-full flex justify-center ">
          <div className="w-full">
            <hr className="my-6 border-[1.5px] border-gray-400" />
          </div>
        </div>
        <OurTools />
        <Footer />
      </div>
    </div>
  );
};

export default EcommerceLanding;
