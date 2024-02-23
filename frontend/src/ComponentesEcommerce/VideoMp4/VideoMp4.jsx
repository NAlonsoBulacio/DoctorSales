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
  const [viewed10Progress, setViewed10Progress] = useState(false);
  const [viewed60Progress, setViewed60Progress] = useState(false);
  const [viewedFull, setViewedFull] = useState(false);

  useEffect(() => {
    if (!playingLoop) {
      setTimeout(() => {
        setPlayingLoop(true);
      }, 2000);
    }
  }, [playingLoop]);

  const togglePlay = () => {
    if (!playing && !videoClicked) {
      setVideoClicked(true); // Indica que se hizo clic en el video
      window.fbq("track", "ViewContent");
      window.fbq("trackCustom", "VideoPlay");
      setPlaying(true);
    }
  };
  // const handleProgress = (progress) => {
  //   const { playedSeconds } = progress;
  //   if (playedSeconds >= 10 && !viewed10Progress) {
  //     window.fbq("trackCustom", "VideoViewed10Progress");
  //     setViewed10Progress(true);
  //   }
  //   if (playedSeconds >= 60 && !viewed60Progress) {
  //     window.fbq("trackCustom", "VideoViewed60Progress");
  //     setViewed60Progress(true);
  //   }
  //   if (playedSeconds >= 180 && !viewedFull) {
  //     window.fbq("trackCustom", "VideoViewedFull");
  //     setViewedFull(true);
  //   }
  // };
  const playerRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const handleClick = () => {
    const player = playerRef.current;
    if (!playing) {
      player.seekTo(0);
      setMuted(false);
      setPlaying(true);
    } else {
      player.seekTo(0);
    }
  };
  return (
    <div className="flex justify-center items-center">
      <div className="relative pb-6 lg:pb-0 w-5/6 lg:w-auto md:h-[420px] md:w-[740px] overflow-hidden">
        {!playing ? (
          <div className="flex justify-center items-center absolute cursor-pointer w-full h-full z-50">
            <img
              src={Gif}
              alt="GIF"
              onClick={togglePlay}
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
        />
      </div>
    </div>
  );
};

export default VideoMp4;
