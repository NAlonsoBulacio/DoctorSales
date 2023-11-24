import React from "react";
import logo from "../../Multimedia/logo-white.png";
const Footer = () => {
  return (
    <div className="w-full bg-purple-800 flex justify-center items-center">
      <div className="px-8 py-12">
        <div className="flex justify-center items-center">
          <img src={logo} alt="logo" className="h-20"/>
        </div>
        <div className="flex justify-center items-center">
          <h1>Todos los derechos reservados Doctor Sales</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
