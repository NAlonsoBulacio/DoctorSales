import React from "react";
import { FaHandshake } from "react-icons/fa";
import PilaresDoctor from "../PilaresDoctor/PilaresDoctor";
const HelpYou = () => {
  return (
    <div className="w-full">
      <div className="w-full h-auto bg-gray-100 relative flex justify-center items-center pt-[240px] pb-[70px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute top-0"
        >
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,32L80,42.7C160,53,320,75,480,74.7C640,75,800,53,960,58.7C1120,64,1280,96,1360,112L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
        <div className="w-4/5">
          <h1 className="text-gray-900 text-5xl font-plus-400 flex">
            Si tu experiencia previa en marketing digital no te ha brindado los
            resultados que esperabas,
            <br /> estamos aquí para ayudarte 🤝
          </h1>
        </div>
      </div>
      <PilaresDoctor />
      <div className="relative">
        <div className="flex justify-center items-center mb-14">
          <hr className="border-t-2 border-purple-900 w-full" />
        </div>
        <div className="flex justify-center items-center">
          <button
            className="ov-btn-slide-left font-plus-400 max-w-[700px] bg-gradient-to-r from-purple-800 to-purple-900 text-white text-2xl py-2 px-4 rounded-xl mb-2 mx-4 my-0 md:my-2"
            style={{
              marginBottom: "3rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Agendá tu llamada con nosotros
          </button>
        </div>
        <div className="flex justify-center items-center">
          <h1 className="w-2/3 text-3xl font-noto-300 text-gray-600">
            Vas a poder demostrarle a tu rubro el valor que realmente tiene tu
            conocimiento y el valor que tienes para aportar... Imagina tener un
            equipo y campañas que consiguen clientes sin que dependas de enviar
            un solo mensaje. Tu única preocupación sería mejorar tus servicios y
            ofrecer resultados excepcionales a tus clientes.
          </h1>
        </div>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0">
        <path fill="#ffffff" fill-opacity="1" d="M0,32L80,42.7C160,53,320,75,480,80C640,85,800,75,960,96C1120,117,1280,171,1360,197.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg> */}
      </div>
    </div>
  );
};

export default HelpYou;
