import React from "react";
import VideoMp4 from "../../Componentes/VideoMp4/VideoMp4";
import QuestionAndExcell from "../QuestionAndExcell/QuestionAndExcell";
import "./VideoAndButton.css";

const VideoAndButton = () => {
  return (
    <div className="w-full h-auto flex justify-center items-start py-10">
      <div className="space-y-8">
        <VideoMp4 />
        <div className="flex justify-center items-center">
          <button
            className="ov-btn-slide-left font-plus-400 max-w-[700px] bg-gradient-to-r from-purple-800 to-purple-900 text-white text-2xl py-2 px-4 rounded-xl mb-2 mx-4 my-0 md:my-2"
            style={{
              marginBottom: "3rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Agendá una llamada con nosotros
          </button>
        </div>
        <div className="flex justify-center">
        <hr className="border-t-1 border-gray-300 w-[1300px] my-12" />
        </div>
        <QuestionAndExcell />
      </div>
    </div>
  );
};

export default VideoAndButton;
