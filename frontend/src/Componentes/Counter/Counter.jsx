import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

const Counter = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });


  const incrementCount = (currentCount, setCount, maxCount, increment) => {
    if (currentCount < maxCount) {
      setTimeout(() => {
        setCount(Math.min(currentCount + increment, maxCount));
      }, 500 / ((maxCount - currentCount) / increment));
    }
  };

  if (inView1) {
    incrementCount(count1, setCount1, 57000, 1000);
  }

  if (inView2) {
    incrementCount(count2, setCount2, 1900, 100);
  }

  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex justify-center items-center space-x-8">
        <div className="w-full text-3xl space-y-4">
          <div ref={ref1} className="flex justify-start items-center">
            <h1 className="font-noto-400 text-gray-600">Revenue:</h1>
          </div>
          <div ref={ref2} className="flex justify-start items-center ">
            <h1 className="font-noto-400 text-gray-600">Expenses:</h1>
          </div>
          <div className="flex justify-start items-center ">
            <h1 className="font-noto-400 text-gray-600">Dividends Released:</h1>
          </div>
        </div>
        <div className="w-1/2 text-5xl h-48">
          <div ref={ref1} className="w-full flex justify-start items-center">
            <p className="text-purple-800 font-noto-600 w-40 text-right">
              ${count1.toLocaleString(undefined, { minimumFractionDigits: 2 })}
            </p>
          </div>
          <div ref={ref2} className="flex justify-start items-center ">
            <p className="text-purple-800 font-noto-600 w-40 text-right">
              ${count2.toLocaleString(undefined, { minimumFractionDigits: 2 })}
            </p>
          </div>
          <div className="flex justify-start items-center">
            <p className="text-purple-800 font-noto-600 w-40 text-left">
              $0,00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
