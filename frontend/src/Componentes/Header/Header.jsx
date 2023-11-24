import React from "react";
import banner from "../../Multimedia/banner.gif";
import NavBar from "../NavBar/NavBar";
import "./Header.css";
const Header = () => {
  return (
    <div className="header h-[60vh] lg:h-[84vh] xl:h-[96vh] w-full flex items-center justify-center relative">
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
            <div className="w-full md:w-2/3 space-y-6 md:space-y-12 px-3 md:px-0">
              <h1 className="font-noto-400 text-white text-2xl lg:text-5xl xl:text-6xl">
                Cómo lograr que tu empresa Saas B2B sume más de 4 ventas al mes
                gracias a nuestro método de Adquisición System, sin que dependa
                de tu esfuerzo.
              </h1>
              <div className="flex justify-center items-start">
                <h1 className="w-full font-noto-300 text-white text-lg md:text-2xl">
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
            className="absolute bottom-0 lg:bottom-[-40px] xl:bottom-0"
          >
            <path
              fill="#ffffff"
              fill-opacity="1"
              d="M0,256L60,240C120,224,240,192,360,192C480,192,600,224,720,240C840,256,960,256,1080,245.3C1200,235,1320,213,1380,202.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
