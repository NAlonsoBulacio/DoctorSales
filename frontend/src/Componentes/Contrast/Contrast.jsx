import React from "react";
import "./Contrast.css";
import { GoDotFill } from "react-icons/go";
const Contrast = () => {
  return (
    <div className="w-full flex justify-center items-center py-12">
      <div className="w-5/6 h-[395px] flex flex-wrap justify-center items-center ">
        <div className="w-1/2 h-full flex flex-wrap justify-center items-center bg-gray-100 rounded-l-3xl px-4 ">
          <div className="h-1/5 flex items-center">
            <h1 className="text-4xl text-left font-noto-500">
              Nuestro programa te brinda soluciones si:
            </h1>
          </div>
          <div className="h-3/5 flex items-start">
            <div className="w-full text-left space-y-2 text-2xl">
              <p className="">
                ● Has llegado a un punto en el que te das cuenta de que lo que
                has estado haciendo hasta ahora no te permite aumentar tus
                ventas.
              </p>
              <p className="">
                ● Te resulta difícil incrementar el número de las agendas que
                recibes.
              </p>
              <p className="">
                ● Sientes que tienes todo para crecer más pero estás estancado.
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full flex flex-wrap justify-center items-start bg-purple-800 text-white rounded-r-3xl px-4">
          <div className="h-1/5 w-full flex items-center font-noto-500">
            <h1 className="text-4xl w-full text-left">En resumen:</h1>
          </div>
          <div className="h-3/5 flex items-start">
            <div className="w-full space-y-2">
              <p className="text-2xl text-left">
                ● Sabes que el producto que ofreces a tus clientes es valioso,
                pero no sabes como mostrarle a tus prospectos que realmente lo
                necesitan.
              </p>
              <p className="text-2xl text-left">
                ● Te entiendo, hemos pasado por lo mismo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contrast;
