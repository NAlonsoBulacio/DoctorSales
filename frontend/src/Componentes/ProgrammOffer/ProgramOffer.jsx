import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import "./ProgramOffer.css";
import { useInView } from "react-intersection-observer";
const ProgramOffer = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <div
      className="w-full relative flex justify-center items-center py-2"
      style={{ backgroundColor: "#581c87" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute top-[-5px] md:top-0"
      >
        <path
          fill="#ffffff"
          fill-opacity="1"
          d="M0,32L80,42.7C160,53,320,75,480,74.7C640,75,800,53,960,58.7C1120,64,1280,96,1360,112L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
      <div 
      ref={ref1}
      className={`${inView1 ? "opacity-100 transition-opacity duration-[1s]"
      : "opacity-0"} w-4/5 px-6 md:px-14 py-6 md:py-10 mt-10 md:mt-36 border-white border-2 rounded-xl flex justify-center items-center`}>
        <div className="text-white space-y-6">
          <h1 className="w-full md:w-4/5 text-3xl md:text-4xl text-left mb-8 font-noto-600">
            Entonces, ¿Que incluye nuestro programa?
          </h1>
          <div 
          className={`flex justify-start items-start space-x-4 text-left`}>
            <div className="w-[24px] md:w-[35px] h-[24px] md:h-[35px] flex items-center pt-1">
              <FaCheckCircle className="check" />
            </div>
            <div className="flex justify-start items-start">
              <p className="text-xl md:text-2xl">
                Un equipo de adquisición de clientes en menos de 2 semanas que
                generará llamadas por ti.
              </p>
            </div>
          </div>
          <div className="flex justify-start items-start space-x-4 text-left">
            <div className="w-[24px] md:w-[35px] h-[24px] md:h-[35px] flex items-center pt-1">
              <FaCheckCircle className="check" />
            </div>
            <p className="text-xl md:text-2xl">
              Una oferta estructurada que te permitirá dominar el rubro.
            </p>
          </div>
          <div className="flex justify-start items-start space-x-4 text-left">
            <div className="w-[24px] md:w-[35px] h-[24px] md:h-[35px] flex items-center pt-1">
              <FaCheckCircle className="check" />
            </div>
            <p className="text-xl md:text-2xl">
              Un módulo de capacitación para que tus comerciales aumenten la
              tasa de conversión.
            </p>
          </div>
          <div className="flex justify-start items-start space-x-4 text-left">
            <div className="w-[24px] md:w-[35px] h-[24px] md:h-[35px] flex items-center pt-1">
              <FaCheckCircle className="check" />
            </div>
            <p className="text-xl md:text-2xl">
              Un content manager que gestionará la estructuración, edición y
              promoción de tu contenido en tus redes sociales.
            </p>
          </div>
          <div className="flex justify-start items-start space-x-4 text-left">
            <div className="w-[24px] md:w-[35px] h-[24px] md:h-[35px] flex items-center pt-1">
              <FaCheckCircle className="check" />
            </div>
            <p className="text-xl md:text-2xl">
              Creación de campañas con plantillas probadas de lanzamiento de
              anuncios en todas las plataformas.
            </p>
          </div>
          <div className="flex justify-start items-start space-x-2 text-left">
            <div className="w-[24px] md:w-[35px] h-[24px] md:h-[35px] flex items-center pt-1">
              <FaCheckCircle className="check" />
            </div>
            <p className="text-xl md:text-2xl">
              La creación de un funnel (VSL) con la estructura perfecta para
              lograr la mayor cantidad de agendas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramOffer;
