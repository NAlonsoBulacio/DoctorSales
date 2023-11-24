import React from "react";
import logo from "../../Multimedia/logo-white.png";
const Footer = () => {
  return (
    <div className="w-full bg-purple-800 flex justify-center items-center">
      <div className="px-8 py-12 space-y-4">
        <div className="flex justify-center items-center">
          <img src={logo} alt="logo" className="h-20" />
        </div>
        <div className="hidden md:flex justify-center items-center">
          <h1 className="text-gray-400 hidden md:inline">
            © Copyright 2023 | &nbsp;
          </h1>
          <h1 className="text-white">Doctor Sales</h1>
          <h1 className="text-gray-400 hidden md:inline">
            &nbsp; | All Rights Reserved
          </h1>
        </div>
        <div className="md:hidden justify-center items-center">
          <h1 className="text-gray-400">© Copyright 2023</h1>
          <h1 className="text-white">Doctor Sales</h1>
          <h1 className="text-gray-400">All Rights Reserved</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
