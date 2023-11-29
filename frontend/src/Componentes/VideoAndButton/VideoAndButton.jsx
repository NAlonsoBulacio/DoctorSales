import React from "react";
import VideoMp4 from "../../Componentes/VideoMp4/VideoMp4";
import QuestionAndNumber from "../QuestionAndNumber/QuestionAndNumber";
import "./VideoAndButton.css";

const VideoAndButton = () => {
  return (
    <div className="w-full h-auto flex justify-center items-start ">
      <div className="space-y-4">
      <div className="flex justify-center items-center">
          <a href="https://www.doctorsales.xyz/calendly">
          <button
            className="ov-btn-slide-left font-inter-600 max-w-[700px] bg-gradient-to-r from-yellow-700 to-yellow-800 text-white text-2xl py-2 px-4 rounded-xl mb-2 mx-8 md:mx-4 "
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
              HAZ CLICK PARA UN ANÁLISIS GRATUITO DE TU SAAS
          </button>
          </a>
        </div>
        <VideoMp4 />

        <QuestionAndNumber />
      </div>
    </div>
  );
};

export default VideoAndButton;
