import React from "react";
import Header from "../E-Header/E-Header";
import VideoMp4 from "../VideoMp4/VideoMp4";
import "./Home.css";
import { useInView } from "react-intersection-observer";
const Home = ({change, video, videoId}) => {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <div className="w-full h-auto background-header flex flex-wrap justify-center space-y-6 lg:space-y-10">
      <div className="w-full">
        <Header />
      </div>
      <div className="w-full flex flex-wrap justify-center space-y-4 lg:space-y-10">
        <div className="w-full flex flex-wrap justify-center items-center space-y-4 lg:space-y-8">
          <div ref={ref1} className={`px-[10px] lg:px-10`}>
            <h1
              className={`${
                inView1
                  ? "opacity-100 transition-opacity duration-[1s]"
                  : "opacity-0"
              } hidden xl:flex lg:text-7xl font-lato-700 text-gray-200`}
              style={{ lineHeight: "1.2", fontSize: "68px" }}
            >
              {`New 2-minute video reveals the proven 3-step system to scale ${change} brand to 7 figures`}
            </h1>
            <h1
              className={`${
                inView1
                  ? "opacity-100 transition-opacity duration-[1s]"
                  : "opacity-0"
              } hidden lg:flex xl:hidden text-3xl lg:text-6xl font-lato-700 text-gray-200`}
              style={{ lineHeight: "1.2", fontSize: "57px" }}
            >
              {`New 2-minute video reveals the proven 3-step system to scale ${change} brand to 7 figures`}
            </h1>
            <h1
              className={`${
                inView1
                  ? "opacity-100 transition-opacity duration-[1s]"
                  : "opacity-0"
              } lg:hidden lg:text-6xl font-lato-700 text-gray-200`}
              style={{ lineHeight: "1.2", fontSize:"27px" }}
            >
             {`New 2-minute video reveals the proven 3-step system to scale ${change} brand to 7 figures`}
            
            </h1>
          </div>
          <div ref={ref2} className="px-[10px] lg:px-0">
            <h2 className={`${
                inView2
                  ? "opacity-100 transition-opacity duration-[1s]"
                  : "opacity-0"
              } hidden lg:flex text-xl lg:text-2xl font-plus-300 text-gray-200`}>
             Without having to rely on Facebook Ads, agencies, or influencers.
            </h2>
            <h2 className={`${
                inView2
                  ? "opacity-100 transition-opacity duration-[1s]"
                  : "opacity-0"
              } lg:hidden text-xl lg:text-2xl font-plus-300 text-gray-200`}>
              Without having to rely on Facebook Ads, agencies, or influencers.
            </h2>
          </div>
        </div>
        <div id="process" className="flex justify-center pb-0 lg:pb-16">
          <VideoMp4 vsl={video} videoId={videoId} />
        </div>
      </div>
    </div>
  );
};

export default Home;
