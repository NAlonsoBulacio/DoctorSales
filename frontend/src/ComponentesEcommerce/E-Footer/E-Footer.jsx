import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/logo-violette.png";
const Footer = () => {

  const scrollToProcess = () => {
    const processElement = document.getElementById("process");
    if (processElement) {
      const offset = 240; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = processElement.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth" 
      });
    }
  };
  return (
    <div>
      <div className="px-4 lg:px-32 pt-8 lg:pt-20 pb-0 lg:pb-16">
        <div className="w-full flex justify-center items-end space-x-4 lg:space-x-14">
          <a href="#about" className="cursor-pointer font-poppins-500 text-xl lg:text-2xl text-gray-700 hover:text-purple-700">
            Sobre <br /> Nosotros
          </a>
          <img className="w-20 lg:w-28" src={logo} alt="logo-violeta" />
          <a onClick={scrollToProcess} className="cursor-pointer font-poppins-500 text-xl lg:text-2xl text-gray-700 hover:text-purple-700">
            Nuestros <br /> Procesos
          </a>
        </div>
        <div className="w-full flex justify-center ">
          <div className="w-3/5">
            <hr className="my-6 border-[1.5px] border-purple-900" />
          </div>
        </div>
        {/* <div className="flex justify-center items-center space-x-6">
          <button className="flex justify-center bg-purple-600 items-center rounded-full h-10 w-10 transition-transform transform hover:scale-105">
            <FaInstagram className="text-white text-2xl" />
          </button>
          <button className="flex justify-center bg-purple-600 items-center rounded-full h-10 w-10 transition-transform transform hover:scale-105">
            <FaLinkedin className="text-white text-2xl" />
          </button>
          <button className="flex justify-center bg-purple-600 items-center rounded-full h-10 w-10 transition-transform transform hover:scale-105">
            <SiGmail className="text-white text-2xl" />
          </button>
          <button className="flex justify-center bg-purple-600 items-center rounded-full h-10 w-10 transition-transform transform hover:scale-105">
            <FaWhatsapp className="text-white text-2xl" />
          </button>
        </div> */}
        <div className="flex justify-center items-center">
          <div className="w-1/5 lg:w-1/3 flex justify-start">
            <img
              src="https://strapi.io/assets/white-hero/bottom-left.svg"
              alt="dots"
            />
          </div>
          <div className="w-3/5 lg:w-1/3 flex flex-wrap justify-center mt-6 space-x-0 lg:space-x-4 text-lg">
            <h1 className="w-full lg:w-auto">© Copyright 2023</h1>
            <a href="" className="w-full lg:w-auto text-gray-700 hover:text-black">Policy Terms</a>
          </div>
          <div className="w-1/5 lg:w-1/3 flex justify-end">
            <img
              className="scale-x-[-1]"
              src="https://strapi.io/assets/white-hero/bottom-left.svg"
              alt="dots"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
