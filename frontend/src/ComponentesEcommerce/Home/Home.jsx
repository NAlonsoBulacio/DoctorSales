import React from "react";
import Header from "../E-Header/E-Header";
import VideoMp4 from "../../Componentes/VideoMp4/VideoMp4";
import "./Home.css";
const Home = () => {
  return (
    <div className="w-full h-auto background-header flex flex-wrap justify-center space-y-6 lg:space-y-16">
      <div className="w-full">
        <Header />
      </div>
      <div className="w-full flex flex-wrap justify-center space-y-10">
        <div className="w-full flex flex-wrap justify-center items-center space-y-2 lg:space-y-8">
          <div className="px-4 lg:px-28">
            <h1
              className="hidden lg:flex text-3xl lg:text-6xl font-plus-500 text-gray-200"
              style={{ lineHeight: "1.3" }}
            >
              Nuevo video de x minutos revela cual es el sistema probado de x pasos para escalar<br/> una marca ecommerce a 7 cifras
            </h1>
            <h1
              className="lg:hidden text-3xl lg:text-5xl font-plus-500 text-gray-200"
              style={{ lineHeight: "1.3" }}
            >
              Nuevo video de x minutos revela cual es el sistema probado de x pasos para escalar una marca ecommerce a 7 cifras
            </h1>
          </div>
          <div>
            <h2 className="hidden lg:flex text-xl lg:text-2xl font-plus-300 text-gray-200">
            Sin tener que depender de Facebook Adds, agencias o influencers.
            </h2>
            <h2  className="lg:hidden text-xl font-plus-200 text-gray-200">
              Sin tener que depender de <br />
              Facebook Adds, agencias o influencers.
            </h2>
          </div>
        </div>
        <div id="process" className="flex justify-center pb-0 lg:pb-16">
          <VideoMp4 />
        </div>
      </div>
    </div>
  );
};

export default Home;
