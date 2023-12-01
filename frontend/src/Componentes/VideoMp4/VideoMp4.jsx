import React, { useState, useRef  } from "react";
import ReactPlayer from "react-player";
import "./VideoMp4.css";
import { FaPlay } from "react-icons/fa";
import frame from '../../Multimedia/frame.png'
const VideoMp4 = () => {
  const [playing, setPlaying] = useState(false);
  const [viewed10Progress, setViewed10Progress] = useState(false);
  const [viewed60Progress, setViewed60Progress] = useState(false);
  const [viewedFull, setViewedFull] = useState(false);
  const playerRef = useRef(null);
  const togglePlay = () => {
    if (!playing) {
      window.fbq("track", "ViewContent");
      window.fbq("trackCustom", "VideoPlay");
      console.log("Acabas de mandar estos eventos");
      setPlaying(!playing);
    }
  };
  const handleProgress = (progress) => {
    const { playedSeconds } = progress;
    if (playedSeconds >= 10 && !viewed10Progress) {
      console.log("10 segundos progress");
      window.fbq('trackCustom', 'VideoViewed10Progress');
      setViewed10Progress(true); 
    }
    if (playedSeconds >= 60 && !viewed60Progress) {
      console.log("60 segundos progress");
      window.fbq('trackCustom', 'VideoViewed60Progress');
      setViewed60Progress(true); 
    }
    if (playedSeconds >= 180 && !viewedFull) {
      console.log("180 segundos progress");
      window.fbq('trackCustom', 'VideoViewedFull');
      setViewedFull(true); 
    }
  };
  return (
    <div className="flex justify-center items-center">
      <div className="relative w-full md:h-[420px] md:w-[740px] overflow-hidden">
        <ReactPlayer
          ref={playerRef}
          url="https://res.cloudinary.com/doczyujqf/video/upload/v1701287340/Doctor%20Sales/vsl_terminado_1_1_1_1_gipkj8.mp4"
          playing={playing}
          controls
          width="100%"
          height="100%"
          onPlay={togglePlay}
          onProgress={handleProgress}
        />
        {!playing && (
          <>
          <img src={frame} alt="frame-video" className={`absolute inset-0 w-full h-full object-cover object-center opacity-transition ${playing ? 'opacity-0' : 'opacity-100'}`}/>
          <button className="play-button" onClick={togglePlay}>
            <FaPlay />
          </button>
          </>
        )}
      </div>
    </div>
  );
};

export default VideoMp4;
