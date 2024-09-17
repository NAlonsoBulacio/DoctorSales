import React from "react";
import VideoWistiaWpp from "../Video/VideoWistiaWpp";
const TitleAndVideo = ({ video }) => {
  return (
    <div className="flex flex-wrap justify-center items-start text-center space-y-4 px-2 lg:px-32">
      <h1 className="block lg:hidden font-lato-500 text-gray-200 text-2xl lg:text-5xl  text-balance uppercase px-0 lg:px-20">
        Cómo logramos facturar más de{" "}
        <span className=" font-lato-700 text-[#D4AF37]   ">$300.000 mensuales usd</span> <br/>para
        nuestros clientes SaaS aplicando <span className=" font-lato-700 text-[#D4AF37]   ">sistemas de adquisición</span>
       {" "} de clientes online
      </h1>
      <h1 className="hidden lg:block font-lato-500 text-gray-200 text-2xl lg:text-5xl  text-balance uppercase px-0 lg:px-20">
        Cómo logramos facturar más de{" "}
        <span className=" font-lato-700 text-[#D4AF37]   ">$300.000 mensuales usd</span> para
        nuestros clientes SaaS aplicando <span className=" font-lato-700 text-[#D4AF37]   ">sistemas de adquisición</span>
       {" "} de clientes online
      </h1>
      <p className="text-gray-200 italic text-md lg:text-xl text-balance">
        Sin tener que hacer eventos, depender del boca en boca o
        prospección en frío
      </p>
      <div className="flex justify-center w-full">
        {video === "wpp" && <VideoWistiaWpp />}
      </div>
    </div>
  );
};

export default TitleAndVideo;
