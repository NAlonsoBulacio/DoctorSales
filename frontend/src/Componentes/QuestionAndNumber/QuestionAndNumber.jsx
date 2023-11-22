import React from "react";
import Counter from "../Counter/Counter";
const QuestionAndNumber = () => {
  return (
    <div className="w-full px-14 ">
      <div className="flex flex-wrap justify-center items-center space-y-10">
        <div className="w-full flex justify-center items-center px-6">
          <p className="text-4xl font-noto-400">
            ¿Cómo reaccionaría si te dijera que hemos ayudado a un cliente a que
            logre esta facturación simplemente aplicando sistemas bastante
            sencillos con una estrategia poco conocida?
          </p>
        </div>
        <div className="w-full flex justify-center items-center px-6">
          <Counter />
        </div>
      </div>
    </div>
  );
};

export default QuestionAndNumber;
