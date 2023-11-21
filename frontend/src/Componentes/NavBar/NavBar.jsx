import React from "react";
import logo from "../../Multimedia/logo-white.png";
const NavBar = () => {
  return (
    <div className="w-full h-24 flex items-center justify-center bg-transparent absolute top-0 z-10">
      <img src={logo} alt="" height={70} width={70} />
    </div>
  );
};

export default NavBar;
