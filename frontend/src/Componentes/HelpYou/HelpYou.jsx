import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import PilaresDoctor from "../PilaresDoctor/PilaresDoctor";
import { useInView } from "react-intersection-observer";
import "./HelpYou.css";
const HelpYou = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <div className="w-full bg-gray-100">
      <div className="flex justify-center">
        <hr className="border-t-2 border-purple-800 w-full" />
      </div>
      <div className="w-full h-auto bg-gray-100 relative flex justify-center items-center py-6 mt-4">
        <div className="w-full md:w-4/5 px-6">
          <h1
            ref={ref1}
            className={`${
              inView1 ? "animate-help" : "initial-help"
            } text-gray-900 text-3xl md:text-5xl font-plus-500 `}
          >
            Si tu experiencia previa en marketing digital no te ha brindado los
            resultados que esperabas,
            <br />{" "}
            <span className="text-purple-800 text-3xl md:text-5xl font-plus-500">
              estamos aquí para ayudarte 🤝
            </span>
          </h1>
        </div>
      </div>
      <PilaresDoctor />
      <div className="relative">
        <div className="flex justify-center">
          <hr className="border-t-2 border-purple-800 w-full" />
        </div>
        <div className="flex flex-wrap justify-center items-center px-6 md:px-12 pt-8 bg-white">
          <div 
          ref={ref2}
          className={`${inView2 ? "opacity-100 transition-opacity duration-[1s]"
          : "opacity-0"} w-full md:w-4/5 space-y-8 text-left`}>
            <div className="flex items-start justify-start">
              <div className="mx-2 pt-2">
                <FaCheckCircle className="check text-purple-800" />
              </div>
              <h1 className="text-2xl md:text-3xl font-noto-300 text-gray-600">
                Vas a poder <span className="font-noto-600">demostrarle a tu rubro el valor que realmente tiene
                tu conocimiento</span> y el valor que tienes para <span className="font-noto-600">aportar</span>...
              </h1>
            </div>
            <div className="flex items-start">
              <div className="mx-2 pt-2">
                <FaCheckCircle className="check text-purple-800" />
              </div>
              <h1 className="text-2xl md:text-3xl font-noto-300 text-gray-600">
              <span className="font-noto-600">Imagina tener un equipo y campañas que consiguen clientes sin
                que dependas de enviar un solo mensaje</span>.
              </h1>
            </div>
            <div className="flex items-start">
              <div className="mx-2 pt-2">
                <FaCheckCircle className="check text-purple-800" />
              </div>
              <h1 className="text-2xl md:text-3xl font-noto-300 text-gray-600">
                Tu única <span className="font-noto-600">preocupación</span> sería mejorar tus <span className="font-noto-600">servicios y ofrecer resultados excepcionales</span> a tus clientes.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpYou;
