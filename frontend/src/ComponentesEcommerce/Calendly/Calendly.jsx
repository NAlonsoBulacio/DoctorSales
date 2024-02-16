import React from "react";
import { useCalendlyEventListener, InlineWidget } from "react-calendly";

const Calendly = () => {
  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
    onEventTypeViewed: () => console.log("onEventTypeViewed"),
    onEventScheduled: (e) => {},
  });

  return (
    <div id="calendly" className="w-full flex flex-wrap justify-center relative">
      <div className="w-full">
        <h1 className="font-plus-400 text-2xl lg:text-5xl text-gray-700">
          Agendá <span className="font-plus-500 text-purple-800">Tu Rreunión</span> Con Nosotros
        </h1>
      </div>
      <div className="w-full flex justify-center ">
        <div className="w-2/5">
          <hr className="my-4 border-[1.5px] border-purple-900" />
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-center">
        <div className="hidden lg:flex w-full justify-end absolute top-0 right-10">
          <img
            src="https://strapi.io/_next/static/images/05cae2bf306c44b4a82fda253514822e.svg"
            className=""
            alt="dots"
          />
        </div>
        <div className="w-full">
          <InlineWidget url="https://calendly.com/nicoalonso99-na/30min" />
        </div>
        {/* <div className="w-full flex justify-start">
          <img
            src="https://strapi.io/assets/white-hero/bottom-left.svg"
            alt="dots"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Calendly;
