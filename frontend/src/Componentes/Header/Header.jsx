import React from "react";
import banner from "../../Multimedia/banner.gif";
import NavBar from "../NavBar/NavBar";
import "./Header.css";
const Header = () => {
  return (
    <div className="header h-[54vh] lg:h-[73vh] 2xl:h-[80vh] w-full flex items-center justify-center relative">
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
          <div className="flex justify-center items-center absolute top-36 md:top-32 translate-x-0">
            <div className="w-full space-y-6 lg:space-y-12 px-3 mx-0 md:mx-20 md:px-0">
              <h1 className="font-noto-500 text-white text-2xl lg:text-5xl xl:text-6xl"  style={{ lineHeight: '1.2' }}>
                CÓMO AGREGAR A TU EMPRESA SAAS B2B, MÁS DE $2000 DÓLARES EXTRAS TODOS LOS MESES CON NUESTRO MÉTODO ACQUISITION SYSTEM EN AUTOMÁTICO 
              </h1>
              <div className="flex justify-center items-start xl:px-44">
                <h1 className="w-full font-noto-300 text-white text-lg md:text-xl lg:text-2xl">
                  En Doctor Sales, hemos desarrollado un sistema de adquisición
                  de clientes especialmente diseñado para empresas Saas como la
                  suya.
                </h1> 
              </div>
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
