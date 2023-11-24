import React from "react";
import Counter from "../Counter/Counter";
const QuestionAndNumber = () => {
  return (
    <div className="w-full px-6 md:px-14 ">
      <div className="w-auto h-[530px] md:h-72 flex flex-wrap justify-center items-center shadow-3xl">
        <div className="h-1/2 md:h-full w-full md:w-1/2  bg-purple-800 flex justify-center items-center rounded-t-3xl rounded-b-none md:rounded-r-none md:rounded-l-3xl text-white">
          <p className="text-3xl md:text-4xl font-noto-400 px-2 md:px-0">
            ¿Cómo reaccionaría si te dijera que hemos ayudado a un cliente a que
            logre esta facturación mensual?
          </p>
        </div>
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex justify-center items-center bg-gray-300 rounded-b-3xl rounded-t-none md:rounded-l-none  md:rounded-r-3xl">
          <Counter />
        </div>
      </div>
    </div>
  );
};

export default QuestionAndNumber;
