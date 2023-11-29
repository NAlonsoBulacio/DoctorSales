import React from "react";
import { FaBullhorn, FaChartLine, FaMedal } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import Diagrama from "../Diagrama/Diagrama";
import { useInView } from "react-intersection-observer";
import "./PilaresDoctor.css";
const PilaresDoctor = () => {
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
    threshold: 0.5,
  });
  const [ref4, inView4] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [ref5, inView5] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [ref6, inView6] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <div className="w-full flex justify-center items-center bg-gray-100 pb-16">
      <div>
        <div className="flex justify-center items-center">
          <hr className="border-t-2 border-purple-900 w-full md:w-[1300px] my-8" />
        </div>
        <div className="px-4 flex justify-center">
          <h1
            ref={ref1}
            className={`${
              inView1
                ? "opacity-100 transition-opacity duration-[1s]"
                : "opacity-0"
            } w-full md:w-1/2 text-2xl text-gray-600 font-noto-400`}
          >
            En <span className="text-purple-800">Doctor Sales</span> nos
            enfocamos en establecer{" "}
            <span className="text-purple-800">4 pilares</span> por los cuales
            hacemos que tu negocio crezca:
          </h1>
        </div>
        <div className="flex flex-wrap justify-center items-center space-x-0 md:space-x-4 py-4">
          <div className="w-full flex flex-wrap justify-center items-start py-10 text-gray-600">
            <div
              ref={ref2}
              className={`${
                inView2
                  ? "opacity-100 transition-opacity duration-[1s]"
                  : "opacity-0"
              } w-full md:w-2/5 px-14 flex items-start`}
            >
              <div className="flex justify-center items-center">
                <div className="px-0 md:px-4 space-y-4 mb-8 md:mb-0">
                  <div className="flex justify-center items-center">
                    <FaBullhorn
                      style={{
                        width: "50px",
                        height: "50px",
                        color: "#581c87",
                      }}
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <hr className="border-t-2 border-purple-900 w-2/3" />
                  </div>
                  <h1 className="text-xl font-bold text-black">
                    NUEVOS CANALES DE VENTA
                  </h1>
                  <p className="text-lg md:text-xl text-gray-600">
                    Implementamos nuestro{" "}
                    <span className="text-gray-800 font-bold">
                      Sistema de Adquisición
                    </span>{" "}
                    de clientes y ventas en tu empresa utilizando todas las
                    plataformas con un equipo de:{" "}
                    <span className="text-gray-800 font-bold">
                      SDR (Sell Development Representative), contenido orgánico
                      y ADS
                    </span>
                    . Así, no solo dependemos de la{" "}
                    <span className="text-gray-800 font-bold">
                      capacidad de tu equipo
                    </span>{" "}
                    de crecimiento, sino que también generamos un{" "}
                    <span className="text-gray-800 font-bold">
                      nuevo activo de ventas
                    </span>{" "}
                    para ti.
                  </p>
                </div>
              </div>
            </div>
            <div
              ref={ref3}
              className={`${
                inView3
                  ? "opacity-100 transition-opacity duration-[1s]"
                  : "opacity-0"
              } w-full md:w-2/5 px-14 flex items-start`}
            >
              <div className="flex justify-center items-start">
                <div className="px-0 md:px-4 space-y-4 ">
                  <div className="flex justify-center items-start">
                    <FaPeopleGroup
                      style={{
                        width: "50px",
                        height: "50px",
                        color: "#581c87",
                      }}
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <hr className="border-t-2 border-purple-900 w-2/3" />
                  </div>
                  <h1 className="text-xl font-bold text-black">
                    AGENDAS CON CLIENTES POTENCIALES 100% CALIFICADOS
                  </h1>
                  <p className="text-lg md:text-xl text-gray-600">
                    Te proporcionaremos la{" "}
                    <span className="text-gray-800 font-bold">
                      estructura completa de ventas que utilizan nuestros
                      clientes
                    </span>
                    , así como{" "}
                    <span className="text-gray-800 font-bold">estrategias</span>{" "}
                    y tácticas específicas, para que tu equipo comercial{" "}
                    <span className="text-gray-800 font-bold">aumente</span> la
                    tasa de{" "}
                    <span className="text-gray-800 font-bold">
                      conversión en las ventas
                    </span>{" "}
                    y logre un mayor impacto en el cierre de negocios de manera
                    efectiva y exitosa.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            ref={ref4}
            className={`${
              inView4
                ? "opacity-100 transition-opacity duration-[1s]"
                : "opacity-0"
            } w-full flex flex-wrap justify-center items-start text-gray-600`}
          >
            <div className="w-full md:w-2/5 px-14">
              <div className="flex justify-center items-start">
                <div className="px-0 md:px-4 space-y-4 mb-8 md:mb-0">
                  <div className="flex justify-center items-center">
                    <FaChartLine
                      style={{
                        width: "50px",
                        height: "50px",
                        color: "#581c87",
                      }}
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <hr className="border-t-2 border-purple-900 w-2/3" />
                  </div>
                  <h1 className="text-xl font-bold text-black">
                    CONTENIDO QUE CONVIERTE
                  </h1>
                  <p className="text-lg md:text-xl text-gray-600">
                    Contarás con un{" "}
                    <span className="text-gray-800 font-bold">
                      content manager profesional
                    </span>{" "}
                    que se{" "}
                    <span className="text-gray-800 font-bold">encargará</span>
                    de todo el{" "}
                    <span className="text-gray-800 font-bold">
                      trabajo tedioso
                    </span>{" "}
                    relacionado con la gestión del contenido. Lo único que
                    tendrás que hacer es aparecer en cámara durante una hora a
                    la semana y cargar los videos para que él los edite y
                    publique en tu nombre.
                  </p>
                </div>
              </div>
            </div>
            <div
              ref={ref5}
              className={` ${
                inView5
                  ? "opacity-100 transition-opacity duration-[1s]"
                  : "opacity-0"
              } w-full md:w-2/5 px-14`}
            >
              <div className="flex justify-center items-start">
                <div className="px-0 md:px-4 space-y-4 ">
                  <div className="flex justify-center items-center">
                    <FaMedal
                      style={{
                        width: "50px",
                        height: "50px",
                        color: "#581c87",
                      }}
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <hr className="border-t-2 border-purple-900 w-2/3" />
                  </div>
                  <h1 className="text-xl font-bold text-black">
                    CREACIÓN DE UNA OFERTA IRRESISTIBLE
                  </h1>
                  <p className="text-lg md:text-xl text-gray-600">
                    <span className="text-gray-800 font-bold">
                      Crearemos una oferta irresistible
                    </span>{" "}
                    aplicando el concepto de
                    <span className="text-gray-800 font-bold">
                      product-market fit
                    </span>
                    . Descubriremos por qué{" "}
                    <span className="text-gray-800 font-bold">
                      tu oferta no está funcionando
                    </span>{" "}
                    y aplicaremos mecanismos para{" "}
                    <span className="text-gray-800 font-bold">
                      aumentar su valor percibido dos o incluso tres veces
                    </span>
                    . Con una oferta atractiva, podrás dominar tu rubro y lograr
                    quedarte con la mayor cantidad de clientes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center py-3">
          <div
            ref={ref6}
            className={`${
              inView6
                ? "opacity-100 transition-opacity duration-[1s]"
                : "opacity-0"
            } w-full md:w-3/4 cursor-pointer my-3`}
          >
            <Diagrama />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <a href="https://www.doctorsales.xyz/calendly">
            <button
              className="ov-btn-slide-left font-inter-600 max-w-[700px] bg-gradient-to-r from-yellow-700 to-yellow-800 text-white text-2xl py-2 px-4 rounded-xl mb-2 mx-8 md:mx-4 my-0 md:my-2"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              HAZ CLICK PARA UN ANÁLISIS GRATUITO DE TU SAAS
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PilaresDoctor;
