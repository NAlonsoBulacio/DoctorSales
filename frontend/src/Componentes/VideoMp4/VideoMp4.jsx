import React from "react";
import video from "../../Multimedia/video.mp4";
const VideoMp4 = () => {
  return (
    <div className="flex justify-center items-center ">
      <div>
        {/* <h1 className="font-noto-400 text-gray-700 text-2xl">Nos apalancamos insertando un equipo de expertos en setters, copywriters, community managers, diseñadores y editores de vídeo, media buyer para la creación de campañas efectivas.</h1> */}
        <video width="740" height="460" controls>
          <source src={video} type="video/mp4" />
          Tu navegador no soporta la etiqueta de video.
        </video>
      </div>
    </div>
  );
};

export default VideoMp4;
