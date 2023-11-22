import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count1, setCount1] = useState(85.75);
  const [count2, setCount2] = useState(739.26);
  const [count3, setCount3] = useState(125.01);

  useEffect(() => {
    const incrementCount1 = () => {
      if (count1 < 27385.75) {
        setTimeout(() => {
          setCount1(count1 + 300);
        }, 1500 / ((27385.75 - 85.75) / 300)); // Tiempo total dividido por la cantidad de incrementos
      }
    };

    incrementCount1();
  }, [count1]);

  useEffect(() => {
    const incrementCount2 = () => {
      if (count2 < 78739.26) {
        setTimeout(() => {
          setCount2(count2 + 1000);
        }, 1500 / ((78739.26 - 739.26) / 1000)); // Tiempo total dividido por la cantidad de incrementos
      }
    };

    incrementCount2();
  }, [count2]);

  useEffect(() => {
    const incrementCount3 = () => {
      if (count3 < 106125.01) {
        setTimeout(() => {
          setCount3(count3 + 1000);
        }, 1500 / ((106125.01 - 125.01) / 1000)); // Tiempo total dividido por la cantidad de incrementos
      }
    };

    incrementCount3();
  }, [count3]);

  return (
    <div className="w-full flex justify-center items-center">
      <div className="text-3xl">
        <div className="flex justify-start items-center space-x-3">
          <h1>Revenue</h1>
          <p className="text-purple-800">${count3.toFixed(2)}</p>
        </div>
        <div className="flex justify-start items-center space-x-3">
          <h1>Expenses</h1>
          <p className="text-purple-800">${count1.toFixed(2)}</p>
        </div>
        <div className="flex justify-start items-center space-x-3">
          <h1>Net Cash Flow</h1>
          <p className="text-purple-800">${count2.toFixed(2)}</p>
        </div>
        <div className="flex justify-start items-center space-x-3">
          <h1>Dividends Released</h1>
          <p className="text-purple-800">$0,00</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
