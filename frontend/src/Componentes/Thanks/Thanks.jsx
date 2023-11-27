import React from "react";
import logo from '../../Multimedia/logo.png'
const Thanks = () => {
  return (
    <div className="my-14 flex flex-wrap justify-center items-center pb-8">
        <div className="w-full flex justify-center items-center mb-20">
            <img src={logo} alt="logo-doctor-sales" className="w-[96px]"/>
        </div>
      <div className="font-inter-400 px-32 space-y-8">
        <h1 className="text-gray-800 text-4xl">Felicidades por agendar tu llamada.</h1>
        <p className="text-purple-800 font-inter-600 text-5xl">IMPORTANTE</p>
        <p className="text-gray-800 text-4xl">Te estaremos contactando para confirmar tu sesión, si no contestas le daremos tu lugar a otra persona que este lista.</p>
      </div>
    </div>
  );
};

export default Thanks;
