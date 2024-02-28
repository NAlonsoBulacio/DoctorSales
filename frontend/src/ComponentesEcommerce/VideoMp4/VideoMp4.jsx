import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";
import "./VideoMp4.css";
import { FaPlay } from "react-icons/fa";
import Gif from "../../assets/gif-ds.gif";
import vsl from "../../assets/vsl.mp4";
const VideoMp4 = () => {
  const [playing, setPlaying] = useState(true);
  const [playingLoop, setPlayingLoop] = useState(false);
  const [videoClicked, setVideoClicked] = useState(false);
  const [muted, setMuted] = useState(true);
  const [first, setFirst] = useState(true);
  const playerRef = useRef(null);
  useEffect(() => {
    if (!playingLoop) {
      setTimeout(() => {
        setPlayingLoop(true);
      }, 2000);
    }
  }, [playingLoop]);

  const togglePlay = () => {
    if (first === true) {
      setMuted(false);
      playerRef.current.seekTo(0);
      setFirst(false);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center relative pb-6 lg:pb-0 w-[370px] lg:w-auto md:h-[420px] md:w-[740px] overflow-hidden">
        <div className="max-w-[410px] w-full  h-[380px] md:h-[420px]">

          <div
            className={`${first ? "cursor-pointer" : ""}`}

          >
            <ReactPlayer
              ref={playerRef}
              url={vsl}
              playing={playing}
              controls
              width="100%"
              height="100%"
              muted={muted}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoMp4;
