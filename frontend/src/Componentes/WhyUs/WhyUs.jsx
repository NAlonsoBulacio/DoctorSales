import React from "react";
import { useInView } from "react-intersection-observer";
const WhyUs = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.3,
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
  return (
    <div className="bg-gray-100">
      <div className="w-full bg-gray-100 relative flex justify-center items-center pt-10 md:pt-28">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute top-[-5px] md:top-0"
        >
          <path
            fill="#581c87"
            fill-opacity="1"
            d="M0,32L80,42.7C160,53,320,75,480,74.7C640,75,800,53,960,58.7C1120,64,1280,96,1360,112L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
        <div className="flex flex-wrap justify-center items-start space-y-10">
          <div className="w-full">
            <h1
              ref={ref1}
              className={`${
                inView1
                  ? "opacity-100 transition-opacity duration-[1s]"
                  : "opacity-0"
              } text-5xl font-plus-500 text-gray-600`}
            >
              Al agendar una llamada, vas a comprender:
            </h1>
          </div>
          <div className="w-full md:w-4/5 px-14 py-10 bg-white border-white border-4 rounded-3xl flex flex-wrap justify-center items-start shadow-2xl mx-3 md:mx-0 space-y-3 md:space-y-0">
            <div
              ref={ref2}
              className={`${
                inView2
                  ? "opacity-100 transition-opacity duration-[1s]"
                  : "opacity-0"
              } w-full md:w-1/4 px-2`}
            >
              <div>
                <h1 className="text-6xl text-purple-800 font-noto-600">1</h1>
              </div>
              <div className="flex justify-center items-center">
                <hr className="border-2 border-purple-900 w-3/5 my-2" />
              </div>
              <div>
                <p className="text-xl text-gray-500">
                  Cómo podemos llenar tu agenda de llamadas sin depender de ti.
                </p>
              </div>
            </div>
            <div
              ref={ref3}
              className={`${
                inView3
                  ? "opacity-100 transition-opacity duration-[1s]"
                  : "opacity-0"
              } w-full md:w-1/4 px-2`}
            >
              <div>
                <h1 className="text-6xl text-purple-800 font-noto-600">2</h1>
              </div>
              <div className="flex justify-center items-center">
                <hr className="border-2 border-purple-900 w-3/5 my-2" />
              </div>
              <div>
                <p className="text-xl text-gray-500">
                  Cómo podemos aumentar el valor percibido de tu <br />
                  Saas a tus clientes.
                </p>
              </div>
            </div>
            <div
              ref={ref4}
              className={`${
                inView4
                  ? "opacity-100 transition-opacity duration-[1s]"
                  : "opacity-0"
              } w-full md:w-1/4 px-2`}
            >
              <div>
                <h1 className="text-6xl text-purple-800 font-noto-600">3</h1>
              </div>
              <div className="flex justify-center items-center">
                <hr className="border-2 border-purple-900 w-3/5 my-2" />
              </div>
              <div>
                <p className="text-xl text-gray-500">
                  Cómo podemos crear tu propio funnel para mantener un flujo
                  constante de interesados en tu oferta.
                </p>
              </div>
            </div>
            <div
              ref={ref5}
              className={`${
                inView5
                  ? "opacity-100 transition-opacity duration-[1s]"
                  : "opacity-0"
              } w-full md:w-1/4 px-2`}
            >
              <div>
                <h1 className="text-6xl text-purple-800 font-noto-600">4</h1>
              </div>
              <div className="flex justify-center items-center">
                <hr className="border-2 border-purple-900 w-3/5 my-2" />
              </div>
              <div>
                <p className="text-xl text-gray-500">
                  Cómo podemos escalar tu empresa para que tus clientes estén
                  dispuestos a pagar más de lo que ofreces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center my-6 py-6">
        <a href="https://www.doctorsales.xyz/calendly">
          <button
            className="ov-btn-slide-left font-plus-400 max-w-[700px] bg-gradient-to-r from-purple-800 to-purple-900 text-white text-2xl py-2 px-4 rounded-xl mb-2 mx-4 my-0 md:my-2"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            Haz click para agendar una llamada
          </button>
        </a>
      </div>
    </div>
  );
};

export default WhyUs;
