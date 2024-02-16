import React from "react";
import meta from '../../assets/logos-tools/meta.png';
import google from '../../assets/logos-tools/google.png';
import klavijo from '../../assets/logos-tools/klavijo.svg';
import tiktok from '../../assets/logos-tools/tiktok.png';
const OurTools = () => {
  const icons = [
    meta,
    google,
    klavijo,
    tiktok
  ];

  return (
    <div className="">
      <div className="flex flex-wrap justify-center items-center space-y-10">
        <div className="w-full">
          <h1 className="text-gray-800 text-4xl font-poppins-400 tracking-wide">
            Nuestras Integraciones<span className="text-purple-800">:</span>
          </h1>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-y-4 lg:gap-y-0 gap-x-6 lg:gap-x-16 px-0 lg:px-20">
          {icons?.map((tool, index) => (
            <div className="w-1/3 lg:w-1/6" key={index}>
              <img className="w-full" src={tool} alt="tool" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTools;
