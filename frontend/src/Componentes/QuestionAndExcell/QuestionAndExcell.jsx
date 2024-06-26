import React from "react";
import img from "../../assets/excell.webp";
const QuestionAndExcell = () => {
  return (
    <div className="w-full px-14 ">
      <div className="flex flex-wrap justify-center items-center ">
        <div className="w-1/2 flex justify-center items-center px-6">
          <p className="text-3xl font-noto-400">
            ¿Cómo reaccionaría si te dijera que hemos ayudado a un cliente a que
            logre esta facturación simplemente aplicando sistemas bastante
            sencillos con una estrategia poco conocida?
          </p>
        </div>
        <div className="w-1/2 flex justify-center items-center px-6">
          <img src={img} alt="Excel Cliente" className="py-4" />
        </div>
      </div>
    </div>
  );
};

export default QuestionAndExcell;
