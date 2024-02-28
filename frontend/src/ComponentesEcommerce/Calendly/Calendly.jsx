import React from "react";
import { useCalendlyEventListener, InlineWidget } from "react-calendly";
import { useInView } from "react-intersection-observer";
const Calendly = () => {
  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
    onEventTypeViewed: () => console.log("onEventTypeViewed"),
    onEventScheduled: (e) => {},
  });
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <div
      id="calendly"
      className="w-full flex flex-wrap justify-center relative px-6 lg:px-0 "
    >
      <div className="w-full">
        <h1
          ref={ref3}
          className={`${
            inView3
              ? "opacity-100 transition-opacity duration-[1s]"
              : "opacity-0"
          } block lg:hidden font-plus-400 text-3xl lg:text-5xl text-gray-700`}
        >
          Schedule{" "}
          <span className="font-plus-500 text-purple-800">Your Meeting</span>{" "}
          <br />
          With Our Team
        </h1>
        <h1
          ref={ref1}
          className={`${
            inView1
              ? "opacity-100 transition-opacity duration-[1s]"
              : "opacity-0"
          } hidden lg:block font-plus-400 text-2xl lg:text-5xl text-gray-700 `}
        >
          Schedule{" "}
          <span className="font-plus-500 text-purple-800">Your Meeting</span>{" "}
          With Our Team
        </h1>
      </div>
      <div className="w-full flex justify-center ">
        <div className="w-2/5">
          <hr className="my-4 border-[1.5px] border-purple-900" />
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-center">
        {/* <div className="hidden lg:flex w-full justify-end absolute top-0 right-10">
          <img
            src="https://strapi.io/_next/static/images/05cae2bf306c44b4a82fda253514822e.svg"
            className=""
            alt="dots"
          />
        </div> */}
        <div
          ref={ref2}
          className={`${
            inView2
              ? " opacity-100 transition-opacity duration-1000"
              : "opacity-0"
          } h-[775px] lg:h-[688px] w-full`}
        >
          <InlineWidget
              url="https://calendly.com/doctorsales/discovery-call"
              pageSettings={{
                backgroundColor: "ffffff",
                hideEventTypeDetails: false,
                hideLandingPageDetails: true,
                primaryColor: "00a2ff",
                textColor: "4d5055",
              }}
              styles={{
                height: "100%",
              }}
          />
        </div>
      </div>
    </div>
  );
};

export default Calendly;
