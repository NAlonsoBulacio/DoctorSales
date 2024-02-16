import React from "react";
import libertex from "../../assets/logos-clients/libertex.svg";
import agefit from "../../assets/logos-clients/agefit.svg";
import ogl from '../../assets/logos-clients/ogl.png';
import compex from '../../assets/logos-clients/compex.png';
import mistico from '../../assets/logos-clients/mistic.png';
import synagro from '../../assets/logos-clients/synagro.png';
const Clients = () => {
  const clients = [
    compex,
    mistico,
    "https://xpazul.com/financiera/wp-content/uploads/2024/01/Copia-de-XPAzul_logodic23_PRINCIPAL-1.png",
    synagro,
    ogl,
    libertex,
    agefit,
  ];

  return (
    <div className="flex flex-wrap justify-center items-centerm gap-y-10">
      <div className="w-full flex justify-center items-center ">
        <h1 className="hidden lg:flex text-gray-800 text-2xl lg:text-5xl font-plus-400 tracking-wide">
          El Growth Partner De&nbsp;<span className="text-purple-800 font-plus-500">Confianza</span>&nbsp;Para
          <span className="text-purple-900">:</span>
        </h1>
        <h1 className="lg:hidden text-gray-800 text-3xl lg:text-4xl font-plus-400 tracking-wide">
          El Growth Partner<br/> De <span className="text-purple-800 font-plus-500">Confianza</span> Para
          <span className="text-purple-900">:</span>
        </h1>
      </div>
      <div className="flex flex-wrap justify-center items-center px-4 lg:px-40">
        {clients?.map((client, index) => (
          <div key={index} className="w-1/2 lg:w-1/4 flex justify-center items-center">
            <img src={client} alt="img-client" className="w-4/6" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
