import React from "react";
import Counter from "../Counter/Counter";
const QuestionAndNumber = () => {
  return (
    <div className="w-full px-14 ">
      <div className="w-auto h-72 flex flex-wrap justify-center items-center shadow-3xl">
        <div className="w-1/2 h-full bg-purple-800 flex justify-center items-center rounded-l-3xl text-white">
          <p className="text-4xl font-noto-400">
            ¿Cómo reaccionaría si te dijera que hemos ayudado a un cliente a que
            logre esta facturación simplemente aplicando sistemas bastante
            sencillos con una estrategia poco conocida?
          </p>
        </div>
        <div className="w-1/2 h-full flex justify-center items-center bg-gray-300 rounded-r-3xl">
          <Counter />
        </div>
      </div>
    </div>
  );
};

export default QuestionAndNumber;
