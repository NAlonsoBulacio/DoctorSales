import React from "react";
import { useInView } from "react-intersection-observer";
import portada from "../../assets/portadaCap1.png";
const AboutUs = ({change}) => {
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
  return (
    <div className="py-14 lg:py-20">
      <div className="flex flex-wrap justify-center items-center px-4 lg:px-10">
        <div className="w-full" ref={ref1}>
          <h1
            className={`${
              inView1
                ? "opacity-100 transition-opacity duration-[1s]"
                : "opacity-0"
            } text-gray-200 text-4xl lg:text-5xl font-plus-400 tracking-wide`}
          >
           Sobre Nosotros
          </h1>
        </div>
        <div className="w-full flex justify-center ">
          <div className="w-3/5 lg:w-2/5">
            <hr className="my-8 border-[1.5px] border-purple-400" />
          </div>
        </div>
        <div className="w-full flex-wrap lg:flex justify-center items-start space-y-4">
          <div className="w-full lg:w-1/2 rounded-lg overflow-hidden mx-2 lg-mx-0"
          ref={ref3}
          >
            <img
              className={`${
                inView3
                  ? "opacity-100 transition-opacity duration-[1s]"
                  : "opacity-0"
              } w-full`}
              src={portada}
              alt="img-ds"
            />
          </div>
          <div
            className="w-full lg:w-1/2 flex flex-wrap text-left text-gray-200 poppins-400 text-xl space-y-4 px-2"
            ref={ref2}
          >
            <div>
              <h1
                className={`${
                  inView2
                    ? "opacity-100 transition-opacity duration-[1s]"
                    : "opacity-0"
                } text-xl`}
              >
               Nos destacamos por estar 100% enfocados en el sector SaaS durante más de 3 años. Esto nos permite aplicar un enfoque paso a paso de estrategias comprobadas que sabemos que funcionan en este mercado tan competitivo.

              </h1>
            </div>
            <div>
              <h1
                className={`${
                  inView2
                    ? "opacity-100 transition-opacity duration-[1s]"
                    : "opacity-0"
                } text-xl`}
              >
              Además, creamos un nuevo canal de ventas para nuestros clientes a través de esta fórmula, donde nuestra compensación se basa exclusivamente en los resultados obtenidos a partir de las suscripciones generadas por este embudo.

              </h1>
            </div>
            <div>
              <h1
                className={`${
                  inView2
                    ? "opacity-100 transition-opacity duration-[1s]"
                    : "opacity-0"
                } text-xl`}
              >
              También, cuando hemos iniciado una nueva relación con algunos de nuestros clientes, hemos complementado su equipo de marketing existente. Desarrollamos un nuevo embudo de ventas, distinto al que ya tenían en operación, con el único propósito de aumentar sus ingresos recurrentes.

              </h1>
            </div>
            <div>
              <h1
                className={`${
                  inView2
                    ? "opacity-100 transition-opacity duration-[1s]"
                    : "opacity-0"
                } text-xl`}
              >
               Lo que nos distingue es que no ofrecemos servicios genéricos como cualquier otra agencia; en su lugar, implementamos un embudo de ventas automatizado que llamamos "Caballo de Troya," diseñado específicamente por nosotros con un enfoque en marketing basado en el valor.

              </h1>
            </div>
            <div>
              <h1
                className={`${
                  inView2
                    ? "opacity-100 transition-opacity duration-[1s]"
                    : "opacity-0"
                } text-xl`}
              >
              Sorprendentemente, el 99% de las empresas SaaS aún no han implementado este modelo.
              </h1>
            </div>
            <div>
              <h1
                className={`${
                  inView2
                    ? "opacity-100 transition-opacity duration-[1s]"
                    : "opacity-0"
                } text-xl`}
              >
               
Esta singularidad nos permite destacar y alcanzar resultados mensuales de siete cifras con nuestros clientes.
              </h1>
            </div>
            <div className="w-full flex justify-center lg:justify-start py-2"
            ref={ref4}
            >
              <a href="#calendly">
                <button className={`${
                  inView4
                    ? "opacity-100 transition-opacity duration-[1s]"
                    : "opacity-0"
                } w-auto text-2xl font-poppins-400 text-white border-2 border-white rounded-3xl py-2 px-4 hover:bg-white hover:text-purple-900 transition duration-400`}>
                  Agendá Tu Llamada
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
