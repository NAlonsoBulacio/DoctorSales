import React from "react";
import Header from "../E-Header/E-Header";
import VideoMp4 from "../../Componentes/VideoMp4/VideoMp4";
import "./Home.css";
const Home = () => {
  return (
    <div className="w-full h-[115vh] background-header flex flex-wrap justify-center space-y-4">
      <div className="w-full">
        <Header />
      </div>
      <div className="w-full flex flex-wrap justify-center items-center space-y-2">
        <div className="px-28">
          <h1
            className="text-5xl font-noto-500 text-gray-200"
            style={{ lineHeight: "1.3" }}
          >
            LA FÓRMULA GARANTIZADA DE 3 PASOS PARA ESCALAR<br/> UNA MARCA DE COSMÉTICA A 7/8 CIFRAS EN 2024.
          </h1>
        </div>
        <div>
          <h2 className="text-2xl font-noto-200 text-gray-200">
            Sin tener que depender de Facebook Adds, agencias o influencers
          </h2>
        </div>
      </div>
      <div className="flex justify-center pb-16">
        <VideoMp4 />
      </div>
    </div>
  );
};

export default Home;
