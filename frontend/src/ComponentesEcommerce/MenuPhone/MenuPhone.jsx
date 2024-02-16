import React from "react";
import "./MenuPhone.css";
import { AiOutlineClose } from "react-icons/ai";
const MenuPhone = ({ menuOpen, handleMenuToggle }) => {
  return (
    <div className="menu-phone fixed top-0 right-0 w-full flex justify-center items-center font-poppins-400">
      <div className="menu-container w-full flex justify-center items-center pr-[34px]">
      <a href="/e-commerce">Inicio</a> 
      <a href="/e-commerce">Nuestro Proceso</a>
      <a href="/#about">Nosotros</a>
      <a href="/#calendly">Agendar Demo</a>
      <button onClick={handleMenuToggle}>
        <AiOutlineClose
          className=""
          style={{ height: "30px", width: "30px" }}
        />
      </button>
      </div>
    </div>
  );
};

export default MenuPhone;
