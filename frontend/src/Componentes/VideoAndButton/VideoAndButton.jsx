import React from "react";
import VideoMp4 from "../../Componentes/VideoMp4/VideoMp4";
import QuestionAndNumber from "../QuestionAndNumber/QuestionAndNumber";
import "./VideoAndButton.css";

const VideoAndButton = () => {
  const handleButton = () => {
    window.fbq("track", "ViewContent");
  };
  return (
    <div className="w-full h-auto flex justify-center items-start ">
      <div className="space-y-4">
        <div className="flex justify-center items-start px-4 xl:px-72 my-3">
          <h1 className="w-full md:w-[740px] font-inter-500 text-gray-700 text-sm md:text-xl lg:text-2xl">
             En <span className="text-purple-800">Doctor Sales</span>, hemos
            desarrollado un sistema de{" "}
            <span className="text-purple-800">adquisición de clientes</span>{" "}
            especialmente diseñado para empresas{" "}
            <span className="text-purple-800">Saas</span> como la suya 🚀
          </h1>
        </div>
        <VideoMp4 />
        <div className="flex justify-center items-center">
          <a href="https://www.doctorsales.xyz/calendly">
            <button
              className="ov-btn-slide-left font-inter-600 max-w-[700px] bg-gradient-to-r from-yellow-700 to-yellow-800 text-white text-2xl py-2 px-4 rounded-xl mb-2 mx-8 md:mx-4 "
              style={{
                display: "flex",
                justifyContent: "center",
              }}
              onClick={handleButton}
            >
              HAZ CLICK PARA UN ANÁLISIS GRATUITO DE TU SAAS
            </button>
          </a>
        </div>
        <QuestionAndNumber />
      </div>
    </div>
  );
};

export default VideoAndButton;
