import React from "react";
import logo from "../../assets/logo.png";
const Thanks = () => {
  return (
    <div className="my-8 flex flex-wrap justify-center items-center">
      <div className="w-full flex justify-center items-center mb-6">
        <img src={logo} alt="logo-doctor-sales" className="w-[96px]" />
      </div>
      <div className="py-8">
        <div className="font-inter-500 px-14 md:px-32 space-y-4">
          <h1 className="text-gray-800 text-3xl md:text-5xl">
            Felicidades por agendar tu llamada!
          </h1>
          <div className="flex justify-center items-center">
            <video controls width="800">
              <source
                src="https://res.cloudinary.com/doczyujqf/video/upload/v1701194198/Doctor%20Sales/IMG_1169_yeiowp.mp4"
                type="video/mp4"
              />
              Tu navegador no admite la reproducción de videos.
            </video>
          </div>
          <p className="text-purple-800 font-inter-600 text-3xl md:text-5xl">IMPORTANTE</p>
          <p className="text-gray-800 text-2xl md:text-4xl">
            Te estaremos contactando para confirmar tu sesión, si no contestas
            le daremos tu lugar a otra persona que este lista.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
