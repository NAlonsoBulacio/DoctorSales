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
    </div>
  );
};

export default HelpYou;
