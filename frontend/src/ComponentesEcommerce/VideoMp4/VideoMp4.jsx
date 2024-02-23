import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";
import "./VideoMp4.css";
import { FaPlay } from "react-icons/fa";
import Gif from "../../assets/gif-ds.gif";
import vsl from "../../assets/vsl.mp4";
const VideoMp4 = () => {
  const [playing, setPlaying] = useState(false);
  const [playingLoop, setPlayingLoop] = useState(false);
  const [videoClicked, setVideoClicked] = useState(false);
  const [playerLoaded, setPlayerLoaded] = useState(false);
  const playerRef = useRef(null);
  useEffect(() => {
    if (!playingLoop) {
      setTimeout(() => {
        setPlayingLoop(true);
      }, 2000);
    }
  }, [playingLoop]);

  const togglePlay = () => {
    if (!playing && !videoClicked) {
      setVideoClicked(true);
      setPlaying(true);
    }
  };
  const handlePlayerReady = () => {
    setPlayerLoaded(true);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center relative pb-6 lg:pb-0 w-5/6 lg:w-auto md:h-[420px] md:w-[740px] overflow-hidden">
        <div className="max-w-[410px] w-full h-[380px] md:h-[420px] ">
          {!playing ? (
            <div className="flex justify-center items-center absolute cursor-pointer w-full h-[380px] md:h-[420px] z-50 overflow-hidden">
              <img
                src={Gif}
                alt="GIF"
                onClick={togglePlay}
                className="cursor-pointer"
                style={{ cursor: "pointer", width: "100%", height: "100%" }}
              />
              <button
                onClick={togglePlay}
                className="play-button flex justify-center items-center rounded-xl text-white h-[62px] md:h-[100px] w-[100px] md:w-[145px]"
                style={{
                  border: "none",
                  cursor: "pointer",
                  outline: "none",
                }}
              >
                <FaPlay className="h-auto w-[37px] md:w-[70px]" />
              </button>
            </div>
          ) : (
            ""
          )}
          <ReactPlayer
            ref={playerRef}
            url={vsl}
            playing={playing}
            controls
            width="100%"
            height="100%"
            onReady={handlePlayerReady}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoMp4;
