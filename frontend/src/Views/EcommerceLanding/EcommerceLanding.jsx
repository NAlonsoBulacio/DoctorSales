import React, { useState, useEffect } from "react";
import Home from "../../ComponentesEcommerce/Home/Home";
import Calendly from "../../ComponentesEcommerce/Calendly/Calendly";
import Clients from "../../ComponentesEcommerce/Clients/Clients";
import AboutUs from "../../ComponentesEcommerce/AboutUs/AboutUs";
import ClientReview from "../../ComponentesEcommerce/ClientReview/ClientReview";
import OurTools from "../../ComponentesEcommerce/OurTools/OurTools";
import Footer from "../../ComponentesEcommerce/E-Footer/E-Footer";
import animatedImage from '../../assets/animated-shape.png';
import GoHomeButton from "../../ComponentesEcommerce/GoHome/GoHome";
import CalendlyFooter from "../../ComponentesEcommerce/CalendlyFooter/CalendlyFooter";
import ecommerceVsl from "../../assets/vsl.mp4";

import "./EcommerceLanding.css";
const EcommerceLanding = () => {

 const [showGoHomeButton, setShowGoHomeButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPosition = window.innerHeight * 0.65;

      setShowGoHomeButton(scrollPosition > triggerPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="home" className="w-full">
      <Home change="an E-Commerce" video={ecommerceVsl}/>
      <div className="bg-gray-100 py-12 lg:py-24 space-y-14">
        <Calendly />
        <Clients />
      </div>
      <div id="about" className=""
       style={{ backgroundImage: `url(${animatedImage})` }}>
        <AboutUs change="E-Commerce"/>
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
        <CalendlyFooter />
      </div>
       {showGoHomeButton && <GoHomeButton />}
    </div>
  );
};

export default EcommerceLanding;
