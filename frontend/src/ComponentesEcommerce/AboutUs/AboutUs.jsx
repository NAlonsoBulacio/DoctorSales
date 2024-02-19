import React from "react";
import { useInView } from "react-intersection-observer";
const AboutUs = () => {
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
    <div className="py-20">
      <div className="flex flex-wrap justify-center items-center px-4 lg:px-10">
        <div className="w-full" ref={ref1}>
          <h1
            className={`${
              inView1
                ? "opacity-100 transition-opacity duration-[1s]"
                : "opacity-0"
            } text-gray-200 text-4xl lg:text-5xl font-plus-400 tracking-wide`}
          >
            Quienes Somos
          </h1>
        </div>
        <div className="w-full flex justify-center ">
          <div className="w-3/5 lg:w-2/5">
            <hr className="my-8 border-[1.5px] border-purple-400" />
          </div>
        </div>
        <div className="w-full flex flex-wrap justify-center items-center gap-y-4">
          <div className="w-full lg:w-1/2"
          ref={ref3}
          >
            <img
              className={`${
                inView3
                  ? "opacity-100 transition-opacity duration-[1s]"
                  : "opacity-0"
              } w-full`}
              src="https://growthpartner.app/wp-content/uploads/2023/06/image01-3.png"
              alt=""
            />
          </div>
          <div
            className="w-full lg:w-1/2 flex flex-wrap text-left text-gray-200 poppins-400 text-xl space-y-6 px-4 lg:px-32"
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
                Nos diferenciamos por estar 100% enfocados en ecommerce, lo que
                nos permite tener un paso a paso de estrategias comprobadas que
                sabemos que funcionan en el mercado.
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
                También creamos con esta fórmula un nuevo canal de ventas para
                tu empresa donde nuestra remuneración se basa únicamente en las
                resultas obtenidas de las ganancias generadas por este embudo y
                nos completamos a tu equipo de marketing actual en algunas
                tareas, esto quiere decir que nos diferenciamos de todas las
                agencias ya que no ofrecemos servicios commodities, sino que
                implementamos un nuevo embudo de venta automatizado creado desde
                0 por nosotros, el cual el 99% de las marcas ecommerce no lo
                están implementando, lo que nos permite diferenciarnos llegar a
                las 7 cifras mensuales con nuestros clientes.
              </h1>
            </div>
            <div className="w-full flex justify-center lg:justify-start"
            ref={ref4}
            >
              <a href="#calendly">
                <button className={`${
                  inView4
                    ? "opacity-100 transition-opacity duration-[1s]"
                    : "opacity-0"
                } w-auto text-2xl font-poppins-400 text-white border-2 border-white rounded-3xl py-2 px-4 hover:bg-white hover:text-purple-900 transition duration-400`}>
                  Agendar Demo
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
