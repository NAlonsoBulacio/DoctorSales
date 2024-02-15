import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/logo-violette.png";
const Footer = () => {
  return (
    <div>
      <div className="px-32 pt-20">
        <div className="w-full flex justify-center items-end space-x-14">
          <a href="" className="font-poppins-500 text-2xl text-gray-700">
            Sobre <br /> Nosotros
          </a>
          <img className="w-28" src={logo} alt="logo-violeta" />
          <a href="" className="font-poppins-500 text-2xl text-gray-700">
            Nuestros <br /> Procesos
          </a>
        </div>
        <div className="w-full flex justify-center ">
          <div className="w-3/5">
            <hr className="my-6 border-[1.5px] border-purple-900" />
          </div>
        </div>
        <div className="flex justify-center items-center space-x-6">
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
        </div>
        <div className="flex justify-center items-center">
          <div className="w-1/3 flex justify-start">
            <img
              src="https://strapi.io/assets/white-hero/bottom-left.svg"
              alt="dots"
            />
          </div>
          <div className="w-1/3 flex justify-center mt-6 space-x-4 text-lg">
            <h1>© Copyright 2023</h1>
            <a href="" className="text-gray-700 hover:text-black">Policy Terms</a>
          </div>
          <div className="w-1/3 flex justify-end">
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
