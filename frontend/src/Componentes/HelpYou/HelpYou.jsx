import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import PilaresDoctor from "../PilaresDoctor/PilaresDoctor";
import value from "../../Multimedia/value.svg";
import Diagrama from "../Diagrama/Diagrama";
const HelpYou = () => {
  return (
    <div className="w-full bg-gray-100">
      <div className="flex justify-center">
        <hr className="border-t-2 border-purple-800 w-full" />
      </div>
      <div className="w-full h-auto bg-gray-100 relative flex justify-center items-center py-6 mt-4">
        <div className="w-4/5">
          <h1 className="text-gray-900 text-2xl md:text-5xl font-plus-400 flex">
            Si tu experiencia previa en marketing digital no te ha brindado los
            resultados que esperabas,
            <br /> estamos aquí para ayudarte 🤝
          </h1>
        </div>
      </div>
      <PilaresDoctor />
      <div className="relative">
      <div className="flex justify-center">
        <hr className="border-t-2 border-purple-800 w-full" />
      </div>
        <div className="flex flex-wrap justify-center items-center px-6 md:px-12 pt-8 bg-white">
          <div className="w-full md:w-4/5 space-y-8 text-left">
            <div className="flex items-start justify-start">
              <div className="mx-2 pt-2">
                <FaCheckCircle className="check text-purple-800" />
              </div>
              <h1 className="text-2xl md:text-3xl font-noto-300 text-gray-600">
                Vas a poder demostrarle a tu rubro el valor que realmente tiene
                tu conocimiento y el valor que tienes para aportar...
              </h1>
            </div>
            <div className="flex items-start">
            <div className="mx-2 pt-2">
                <FaCheckCircle className="check text-purple-800" />
              </div>
              <h1 className="text-2xl md:text-3xl font-noto-300 text-gray-600">
                Imagina tener un equipo y campañas que consiguen clientes sin
                que dependas de enviar un solo mensaje.
              </h1>
            </div>
            <div className="flex items-start">
            <div className="mx-2 pt-2">
                <FaCheckCircle className="check text-purple-800" />
              </div>
              <h1 className="text-2xl md:text-3xl font-noto-300 text-gray-600">
                Tu única preocupación sería mejorar tus servicios y ofrecer
                resultados excepcionales a tus clientes.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpYou;
