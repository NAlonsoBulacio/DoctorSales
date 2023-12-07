import React from "react";
import logo from "../../Multimedia/logo-white.png";
import './NavBar.css'
const NavBar = () => {
  return (
    <div className="w-full h-24 flex flex-wrap items-center justify-center bg-transparent absolute top-4 md:top-8 z-10 ">
      <a href="/"><img src={logo} alt="" className="logo"/></a>
      <div className="w-full h-10 flex justify-center items-center text-sm md:text-xl text-gray-100 font-noto-500">
      Video de 5 minutos explicando al detalle...
      </div>
    </div>
  );
};

export default NavBar;
