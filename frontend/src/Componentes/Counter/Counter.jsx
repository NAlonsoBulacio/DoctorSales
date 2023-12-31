import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import "./Counter.css";
const Counter = () => {
  const [count1, setCount1] = useState(10);
  const [count2, setCount2] = useState(0);

  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const incrementCount = (currentCount, setCount, maxCount, increment) => {
    if (currentCount < maxCount) {
      setTimeout(() => {
        setCount(Math.min(currentCount + increment, maxCount));
      }, 500 / ((maxCount - currentCount) / increment));
    }
  };

  if (inView1) {
    incrementCount(count1, setCount1, 57, 1);
  }

  if (inView2) {
    incrementCount(count2, setCount2, 1.9, 0.1);
  }

  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex flex-wrap justify-center items-center px-10 notranslate">
        <div className="w-full md:w-1/3 flex flex-wrap justify-start items-center">
          <div
            ref={ref1}
            className="w-full flex justify-center md:justify-start items-start"
          >
            <p className="text-purple-800 font-noto-600 w-32 md:w-40 text-5xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-6xl">
              ${count1}K
            </p>
            <div className="flex items-start justify-start">
              <p
                ref={ref3}
                className={`${
                  inView3 ? "animatable-usd" : "initial-usd"
                } text-gray-800 mr-0 md:mr-[20px] text-md 2xl:text-lg`}
              >
                USD
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center md:justify-start px-6">
            <h1
              ref={ref3}
              className={`${
                inView3 ? "animatable-type" : "initial-type"
              } font-noto-400 text-gray-600 md:text-lg 2xl:text-2xl`}
            >
              Revenue
            </h1>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex flex-wrap justify-center items-center">
          <div
            ref={ref2}
            className="w-full flex justify-center md:justify-start items-start"
          >
            <p className="text-purple-800 font-noto-600 w-32 md:w-40 text-5xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-6xl">
              ${count2.toLocaleString(undefined, { minimumFractionDigits: 1 })}K
            </p>
            <div className="flex items-start justify-start">
              <p
                ref={ref3}
                className={`${
                  inView3 ? "animatable-usd" : "initial-usd"
                } text-gray-800 mr-0 md:mr-[20px] text-md 2xl:text-lg`}
              >
                USD
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center md:justify-start px-6">
            <h1
              ref={ref3}
              className={`${
                inView3 ? "animatable-type" : "initial-type"
              } font-noto-400 text-gray-600 md:text-lg 2xl:text-2xl`}
            >
              Expenses
            </h1>
          </div>
        </div>
        <div className="w-full h-full md:w-1/3 flex flex-wrap justify-center items-center">
          <div
            ref={ref1}
            className="w-full h-2/3 flex justify-center md:justify-start items-start"
          >
            <p className="text-purple-800 font-noto-600 w-32 md:w-40 text-5xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-6xl">
              $0,00
            </p>
            <div className="flex items-start justify-start">
              <p
                ref={ref3}
                className={`${
                  inView3 ? "animatable-usd" : "initial-usd"
                } text-gray-800 mr-0 md:mr-[20px] text-md 2xl:text-lg`}
              >
                USD
              </p>
            </div>
          </div>
          <div className="justify-center md:justify-start">
            <h1
              ref={ref3}
              className={`${
                inView3 ? "animatable-type" : "initial-type"
              } font-noto-400 text-gray-600 md:text-lg 2xl:text-2xl`}
            >
              Dividends Released
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
