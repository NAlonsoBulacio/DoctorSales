import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";
import "./VideoMp4.css";
import { FaPlay } from "react-icons/fa";
import Gif from "../../assets/gif-ds.gif";
import vsl from "../../assets/vsl.mp4";
import vsl2 from "../../assets/vsl2.mp4";
const VideoMp4 = ({video}) => {
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
          {first ? (
            <div className="z-50 cursor-pointer bg-transparent absolute top-0 left-0 w-full h-full flex justify-end items-start px-4 py-4"
            onClick={togglePlay}
            >
              <div className="cursor-pointer px-2 py-2 rounded-3xl volume-button text-gray-100">Presiona para activar el volumen 🔊</div>
               </div>
          ) : (
            ""
          )}
          <div
            className={`${first ? "cursor-pointer" : ""}`}
            onClick={togglePlay}
          >
            <ReactPlayer
              ref={playerRef}
              url={video === "1" ? vsl : vsl2}
              playing={playing}
              controls
              width="100%"
              height="100%"
              muted={muted}
              autoPlay
              playsinline
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoMp4;
