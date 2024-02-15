import React from "react";
import "./MenuPhone.css";
import { AiOutlineClose } from "react-icons/ai";
const MenuPhone = ({ menuOpen, handleMenuToggle }) => {
  return (
    <div className="menu-phone fixed top-0 right-[34px] w-full flex justify-center items-center font-poppins-400">
      <a href="/">Inicio</a>
      <a href="/places">Propiedades</a>
      <a href="/about-us">Nosotros</a>
      <a href="/contact">Contacto</a>
      <button onClick={handleMenuToggle}>
        <AiOutlineClose
          className=""
          style={{ height: "30px", width: "30px" }}
        />
      </button>
    </div>
  );
};

export default MenuPhone;
