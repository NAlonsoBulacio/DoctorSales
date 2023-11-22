import React from "react";
import { FaBullhorn, FaChartLine, FaMedal    } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
const PilaresDoctor = () => {
  return (
    <div className="w-full flex justify-center items-center bg-gray-100">
      <div>
        <hr className="border-t-1 border-purple-900 w-[1300px] my-12" />
        <h1 className="text-2xl">
          En Doctor Sales, nos enfocamos en establecer cinco pilares por los
          cuales hacemos que tu negocio crezca:
        </h1>
        <div className="flex flex-wrap justify-center items-center space-x-4 py-8">
          <div className="w-full flex flex-wrap justify-center items-start py-14">
            <div className="w-2/5 px-14 flex items-start">
              <div className="flex justify-center items-center">
                <div className="px-4 space-y-4">
                  <div className="flex justify-center items-center">
                    <FaBullhorn style={{ width: "50px", height: "50px", color: "#581c87" }} />
                  </div>
                  <div className="flex justify-center items-center">
                    <hr className="border-t-2 border-purple-900 w-2/3" />
                  </div>
                  <p className="text-xl">
                    Implementamos nuestro sistema de adquisición de clientes y
                    ventas en tu empresa utilizando todas las plataformas con un
                    equipo de: SDR(sell development representative) , contenido
                    orgánico y ADS. Así, no solo dependemos de la capacidad de
                    tu equipo de crecimiento, sino que también generamos un
                    nuevo activo de ventas para ti.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-2/5 px-14 flex items-start ">
              <div className="flex justify-center items-start">
                <div className="px-4 space-y-4">
                  <div className="flex justify-center items-start">
                    <FaPeopleGroup style={{ width: "50px", height: "50px", color: "#581c87" }} />
                  </div>
                  <div className="flex justify-center items-center">
                    <hr className="border-t-2 border-purple-900 w-2/3" />
                  </div>
                  <p className="text-xl">
                    Te proporcionaremos la estructura completa de ventas que
                    utilizan nuestros clientes, así como estrategias y tácticas
                    específicas, para que tu equipo comercial aumente la tasa de
                    conversión en las ventas y logre un mayor impacto en el
                    cierre de negocios de manera efectiva y exitosa.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-wrap justify-center items-start">
            <div className="w-2/5 px-14">
              <div className="flex justify-center items-start">
                <div className="px-4 space-y-4">
                  <div className="flex justify-center items-center">
                    <FaChartLine style={{ width: "50px", height: "50px", color: "#581c87" }} />
                  </div>
                  <div className="flex justify-center items-center">
                    <hr className="border-t-2 border-purple-900 w-2/3" />
                  </div>
                  <p className="text-xl">
                    Contarás con un content manager profesional que se encargará
                    de todo el trabajo tedioso relacionado con la gestión del
                    contenido. Lo único que tendrás que hacer es aparecer en
                    cámara durante una hora al día y cargar los videos para que
                    él los edite y publique en tu nombre.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-2/5 px-14">
              <div className="flex justify-center items-start">
                <div className="px-4 space-y-4">
                  <div className="flex justify-center items-center">
                    <FaMedal  style={{ width: "50px", height: "50px", color: "#581c87" }} />
                  </div>
                  <div className="flex justify-center items-center">
                    <hr className="border-t-2 border-purple-900 w-2/3" />
                  </div>
                  <p className="text-xl">
                    Crearemos una oferta irresistible aplicando el concepto de
                    product-market fit. Descubriremos por qué tu oferta no está
                    funcionando y aplicaremos mecanismos para aumentar su valor
                    percibido dos o incluso tres veces. Con una oferta
                    atractiva, podrás dominar tu rubro y lograr quedarte con la
                    mayor cantidad de clientes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="" alt="" />
    </div>
  );
};

export default PilaresDoctor;
