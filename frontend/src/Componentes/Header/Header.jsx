import React from "react";
import banner from "../../assets/banner.gif";
import NavBar from "../NavBar/NavBar";
import "./Header.css";
const Header = () => {
  return (
    <div className="header sm:h-[250px] md:h-[300px] lg:h-[330px] xl:h-[310px] 2xl:h-[365px] w-full flex items-center justify-center relative">
      <div className="w-full h-full relative">
        <NavBar />
        <div className="w-full h-full overflow-hidden">
          <div className="w-full h-full">
            <div className="shadow-place absolute h-full w-full overflow-hidden"></div>
            <img
              src={banner}
              alt="video banner del banner"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex justify-center items-center absolute top-28 md:top-32 translate-x-0">
            <div className="w-full space-y-6 lg:space-y-12 px-3 mx-0 md:mx-10 lg:mx-12 md:px-0">
              <h1 className="titulo font-noto-500 text-white text-sm md:text-2xl 2xl:text-4xl"  style={{ lineHeight: '1.3' }}>
                CÓMO AGREGAR A TU EMPRESA SAAS B2B UN NUEVO CANAL DE VENTA PARA QUE FACTURE MÁS DE $2000 DÓLARES EXTRAS TODOS LOS MESES EN AUTOMÁTICO CON NUESTRO MÉTODO ACQUISITION SYSTEM.
              </h1>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="wave absolute bottom-[-5px] xl:bottom-0"
          >
            <path
              fill="#ffffff"
              fill-opacity="1"
              d="M0,256L80,250.7C160,245,320,235,480,245.3C640,256,800,288,960,277.3C1120,267,1280,213,1360,186.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
