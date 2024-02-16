import React from "react";
import { useCalendlyEventListener, InlineWidget } from "react-calendly";

const Calendly = () => {
  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
    onEventTypeViewed: () => console.log("onEventTypeViewed"),
    onEventScheduled: (e) => {
      console.log(e.data.payload);
      window.location.href = 'https://www.doctorsales.xyz/doctor-thanks';
    },
  });

  return (
    <div className="">
      <InlineWidget url="https://calendly.com/doctorsales/30min" />
    </div>
  );
};

export default Calendly;
