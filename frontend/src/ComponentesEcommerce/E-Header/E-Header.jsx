import React, { useState } from "react";
import logo from "../../assets/logo-white.png";
import MenuPhone from "../MenuPhone/MenuPhone";
import menu from "../../assets/menu.svg";
import "./E-Header.css";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div>
      <div
        className="mx-auto flex items-center px-10 py-2 pt-2 justify-between lg:hidden logo-header"
        style={{ maxWidth: "1150px", height: "110px" }}
      >
        <div className="flex items-center">
          <a href="/">
            <img className="w-[50px] " src={logo} alt="Logo" />
          </a>
        </div>
        <button className="hamburguer" onClick={handleMenuToggle}>
          <img src={menu} alt="MI-MENU" width={35} />
        </button>
      </div>
      <div className="hidden lg:flex w-full h-32 items-center justify-center px-20 bg-transparent">
        <div className="w-1/2 flex justify-start items-center space-x-6">
          <div className="flex">
            <a href="/">
              <img className="w-20 z-50" src={logo} alt="logo-white" />
            </a>
          </div>
          <div className="flex">
            <a href="/">
              <h1 className="font-poppins-500 text-3xl text-white select-none">
                Doctor Sales
              </h1>
            </a>
          </div>
        </div>
        <div className="w-1/2 flex justify-end items-center space-x-10">
          <div>
            <ul className="flex justify-center items-center space-x-10">
              <li>
                <a
                  href="/"
                  className="text-xl font-poppins-400 text-gray-200 underline-on-hover"
                >
                  Our Process
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-xl font-poppins-400 text-gray-200 underline-on-hover"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <a href="#calendly">
              <button className="text-xl font-poppins-400 text-white border-2 border-white rounded-3xl py-2 px-4 hover:bg-white hover:text-purple-900 transition duration-400">
              Discovery a Call
              </button>
            </a>
          </div>
        </div>
      </div>
      <div>
        {menuOpen ? <MenuPhone handleMenuToggle={handleMenuToggle} /> : ""}
      </div>
    </div>
  );
};

export default Header;
