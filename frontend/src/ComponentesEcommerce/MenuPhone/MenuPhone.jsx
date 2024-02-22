import React, { useEffect } from "react";
import "./MenuPhone.css";
import { AiOutlineClose } from "react-icons/ai";
const MenuPhone = ({ menuOpen, handleMenuToggle }) => {
  useEffect(() => {
    // Al cambiar el estado de menuOpen, se establece el desbordamiento del cuerpo según sea necesario
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    // Limpia el estilo al desmontar el componente para evitar efectos secundarios
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]); // Se ejecuta cuando cambia menuOpen

  return (
    <div className="menu-phone absolute top-0 right-0 w-screen h-screen flex justify-center items-center font-poppins-400">
      <div className="menu-container w-full flex justify-center items-center pr-[34px]">
      <a href="/" onClick={handleMenuToggle}>Inicio</a> 
      <a href="#process" onClick={handleMenuToggle}>Nuestro Proceso</a>
      <a href="#about" onClick={handleMenuToggle}>Sobre Nosotros</a>
      <a href="#calendly" onClick={handleMenuToggle}>Agendar Demo</a>
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
