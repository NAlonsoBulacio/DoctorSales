import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import video from "../../Multimedia/video.mp4";
import "./VideoMp4.css";
import { FaPlay } from "react-icons/fa";
const VideoMp4 = () => {
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    setPlaying(!playing);
  };
  return (
    <div className="flex justify-center items-center">
      <div className="relative h-full w-full md:h-[460px] md:w-[740px]">
      <ReactPlayer
        url={video}// Reemplaza con la URL de tu video
        playing={playing}
        controls
        width="100%"
        height="100%"
      />
        {!playing && (
        <div className="play-button" onClick={togglePlay}>
          <FaPlay />
        </div>
      )}
      </div>
    </div>
  );
};

export default VideoMp4;
