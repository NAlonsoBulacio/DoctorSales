import React from "react";
import Header from "../E-Header/E-Header";
import VideoMp4 from "../VideoMp4/VideoMp4";
import "./Home.css";
import { useInView } from "react-intersection-observer";
const Home = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <div className="w-full h-auto background-header flex flex-wrap justify-center space-y-6 lg:space-y-16">
      <div className="w-full">
        <Header />
      </div>
      <div className="w-full flex flex-wrap justify-center space-y-10">
        <div className="w-full flex flex-wrap justify-center items-center space-y-6 lg:space-y-8">
          <div ref={ref1} className={`px-4 lg:px-28`}>
            <h1
              className={`${
                inView1
                  ? "opacity-100 transition-opacity duration-[1s]"
                  : "opacity-0"
              } hidden lg:flex text-3xl lg:text-6xl font-plus-600 text-gray-200`}
              style={{ lineHeight: "1.3" }}
            >
              New x-minute video reveals the proven x-step system to scale an e-commerce brand to 7 figures
            </h1>
            <h1
              className={`${
                inView1
                  ? "opacity-100 transition-opacity duration-[1s]"
                  : "opacity-0"
              } lg:hidden text-3xl lg:text-6xl font-plus-600 text-gray-200`}
              style={{ lineHeight: "1.3" }}
            >
             New x-minute video reveals the proven x-step system to scale an<br/> e-commerce brand<br/> to 7 figures
            </h1>
          </div>
          <div ref={ref2}>
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
              Without having to rely on <br/>Facebook Ads, agencies, or influencers.
            </h2>
          </div>
        </div>
        <div id="process" className="flex justify-center pb-0 lg:pb-16">
          <VideoMp4 />
        </div>
      </div>
    </div>
  );
};

export default Home;
