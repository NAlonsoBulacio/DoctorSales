import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import "./VideoMp4.css";
import { FaPlay } from "react-icons/fa";
const VideoMp4 = () => {
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    setPlaying(!playing);
  };
  return (
    <div className="flex justify-center items-center">
      <div className="relative w-full md:h-[460px] md:w-[740px]">
      <ReactPlayer
        url="https://res.cloudinary.com/doczyujqf/video/upload/v1701287340/Doctor%20Sales/vsl_terminado_1_1_1_1_gipkj8.mp4"
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
