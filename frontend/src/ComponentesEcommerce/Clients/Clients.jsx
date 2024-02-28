import React from "react";
import libertex from "../../assets/logos-clients/libertex.svg";
import agefit from "../../assets/logos-clients/agefit.svg";
import ogl from '../../assets/logos-clients/ogl.png';
import compex from '../../assets/logos-clients/compex.png';
import mistico from '../../assets/logos-clients/mistic.png';
import synagro from '../../assets/logos-clients/synagro.png';
import valk from "../../assets/logos-clients/valk.png";
import { useInView } from "react-intersection-observer";
const Clients = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const clients = [
    compex,
    mistico,
    "https://xpazul.com/financiera/wp-content/uploads/2024/01/Copia-de-XPAzul_logodic23_PRINCIPAL-1.png",
    synagro,
    ogl,
    libertex,
    agefit,
    valk,
  ];

  return (
    <div className="flex flex-wrap justify-center items-centerm gap-y-10">
      <div className="w-full flex justify-center items-center "
      ref={ref1}
      >
        <h1 className={`${
          inView1
            ? "opacity-100 transition-opacity duration-[1s]"
            : "opacity-0"
        } hidden lg:flex text-gray-800 text-2xl lg:text-5xl font-plus-400 tracking-wide`}>
          The Trusted &nbsp;<span className="text-purple-800 font-plus-500">Growth Partner</span>&nbsp;For
          <span className="text-purple-900">:</span>
        </h1>
        <h1 className={`${
          inView1
            ? "opacity-100 transition-opacity duration-[1s]"
            : "opacity-0"
        } lg:hidden text-gray-800 text-3xl font-plus-400 tracking-wide px-2`}>
          The Trusted <span className="text-purple-800 font-plus-500">Growth Partner</span>&nbsp;For
          <span className="text-purple-900">:</span>
        </h1>
      </div>
      <div className={`${
          inView2
            ? "opacity-100 transition-opacity duration-[1s]"
            : "opacity-0"
        } flex flex-wrap justify-center items-center px-4 lg:px-40`}
      ref={ref2}
      >
        {clients?.map((client, index) => (
          <div key={index} className="w-1/2 lg:w-1/4 flex justify-center items-center">
            <img src={client} alt="img-client" className="w-4/6" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
