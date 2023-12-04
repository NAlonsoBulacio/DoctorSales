import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
import "./VideoMp4.css";
import { FaPlay } from "react-icons/fa";
const VideoMp4 = () => {
  const [playing, setPlaying] = useState(false);
  const [playingLoop, setPlayingLoop] = useState(true);
  const [videoClicked, setVideoClicked] = useState(false);
  const [viewed10Progress, setViewed10Progress] = useState(false);
  const [viewed60Progress, setViewed60Progress] = useState(false);
  const [viewedFull, setViewedFull] = useState(false);
  const playerRef = useRef(null);

  const togglePlay = () => {
    if (!playing && !videoClicked) {
      setVideoClicked(true); // Indica que se hizo clic en el video
      window.fbq("track", "ViewContent");
      window.fbq("trackCustom", "VideoPlay");
      setPlaying(true);
    }
  };
  const handleProgress = (progress) => {
    const { playedSeconds } = progress;
    if (playedSeconds >= 10 && !viewed10Progress) {
      window.fbq("trackCustom", "VideoViewed10Progress");
      setViewed10Progress(true);
    }
    if (playedSeconds >= 60 && !viewed60Progress) {
      window.fbq("trackCustom", "VideoViewed60Progress");
      setViewed60Progress(true);
    }
    if (playedSeconds >= 180 && !viewedFull) {
      window.fbq("trackCustom", "VideoViewedFull");
      setViewedFull(true);
    }
  };
  return (
    <div className="flex justify-center items-center">
      <div className="relative w-full md:h-[420px] md:w-[740px] overflow-hidden">
        {!playing ? (
          <div style={{ position: "relative", cursor: "pointer", width: "100%", height: "100%" }}>
            <ReactPlayer
              url="https://res.cloudinary.com/doczyujqf/video/upload/v1701724332/Doctor%20Sales/video_sinn_audio_sxpi7j.mp4"
              playing={playingLoop}
              loop
              muted
              width="100%"
              height="100%"
              onClick={togglePlay}
              style={{ display: "block" }}
            />
            <button
              onClick={togglePlay}
              className="play-button flex justify-center items-center rounded-xl text-white bg-purple-800 h-[100px] w-[145px]"
              style={{
                border: "none",
                cursor: "pointer",
                outline: "none",
              }}
            >
              <FaPlay size={70} />
            </button>
          </div>
        ) : (
          <ReactPlayer
            ref={playerRef}
            url="https://res.cloudinary.com/doczyujqf/video/upload/v1701287340/Doctor%20Sales/vsl_terminado_1_1_1_1_gipkj8.mp4"
            playing={playing}
            controls
            width="100%"
            height="100%"
            onProgress={handleProgress}
          />
        )}
      </div>
    </div>
  );
};

export default VideoMp4;
