import React, { useState, useRef  } from "react";
import ReactPlayer from "react-player";
import "./VideoMp4.css";
import frame from '../../Multimedia/potencia.png'
const VideoMp4 = () => {
  const [playing, setPlaying] = useState(false);
  const [start, setStart] = useState(false);
  const [viewed10Progress, setViewed10Progress] = useState(false);
  const [viewed60Progress, setViewed60Progress] = useState(false);
  const [viewedFull, setViewedFull] = useState(false);
  const playerRef = useRef(null);
  const togglePlay = () => {
    if (!playing) {
      window.fbq("track", "ViewContent");
      window.fbq("trackCustom", "VideoPlay");
      setPlaying(!playing);
      setTimeout(() => {
        setStart(true);
      }, 2000);
    }
  };
  const handleProgress = (progress) => {
    const { playedSeconds } = progress;
    if (playedSeconds >= 10 && !viewed10Progress) {
      window.fbq('trackCustom', 'VideoViewed10Progress');
      setViewed10Progress(true); 
    }
    if (playedSeconds >= 60 && !viewed60Progress) {
      window.fbq('trackCustom', 'VideoViewed60Progress');
      setViewed60Progress(true); 
    }
    if (playedSeconds >= 180 && !viewedFull) {
      window.fbq('trackCustom', 'VideoViewedFull');
      setViewedFull(true); 
    }
  };
  return (
    <div className="flex justify-center items-center">
      <div className="relative w-full md:h-[420px] md:w-[740px] overflow-hidden">
      {!playing ? (
          <img src={frame} alt="frame-video" onClick={togglePlay} className={`play-button`}/>)
          : <ReactPlayer
          ref={playerRef}
          url="https://res.cloudinary.com/doczyujqf/video/upload/v1701287340/Doctor%20Sales/vsl_terminado_1_1_1_1_gipkj8.mp4"
          playing={start}
          controls
          width="100%"
          height="100%"
          onPlay={togglePlay}
          onProgress={handleProgress}
        />}


      </div>
    </div>
  );
};

export default VideoMp4;
