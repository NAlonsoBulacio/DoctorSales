import React from "react";
import VideoMp4 from "../../Componentes/VideoMp4/VideoMp4";
import QuestionAndNumber from "../QuestionAndNumber/QuestionAndNumber";
import "./VideoAndButton.css";

const VideoAndButton = () => {
  return (
    <div className="w-full h-auto flex justify-center items-start ">
      <div className="space-y-4">
        <VideoMp4 />
        <div className="flex justify-center items-center">
          <button
            className="ov-btn-slide-left font-plus-400 max-w-[700px] bg-gradient-to-r from-purple-800 to-purple-900 text-white text-2xl py-2 px-4 rounded-xl mb-2 mx-4 "
            style={{
              marginBottom: "3rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
              Haz click para agendar una llamada
          </button>
        </div>
        <QuestionAndNumber />
      </div>
    </div>
  );
};

export default VideoAndButton;
