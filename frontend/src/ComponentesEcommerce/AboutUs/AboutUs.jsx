import React from "react";

const AboutUs = () => {
  return (
    <div className="py-20">
      <div className="flex flex-wrap justify-center items-center px-4 lg:px-10">
        <div className="w-full">
          <h1 className="text-gray-200 text-4xl lg:text-5xl font-noto-400 tracking-widest">
            Quienes Somos
          </h1>
        </div>
        <div className="w-full flex justify-center ">
          <div className="w-3/5 lg:w-2/5">
            <hr className="my-8 border-[1.5px] border-purple-400" />
          </div>
        </div>
        <div className="w-full flex flex-wrap justify-center items-center gap-y-4">
          <div className="w-full lg:w-1/2">
            <img
              className="w-full"
              src="https://growthpartner.app/wp-content/uploads/2023/06/image01-3.png"
              alt=""
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-wrap text-left text-gray-200 poppins-400 text-xl space-y-6 px-4 lg:px-32">
            <div>
              <h1 className="text-2xl">
                Habla de todas las cosas que te gustaria hablar en un primer
                enunciado sobre doctor sales
              </h1>
            </div>
            <div>
              <h1 className="text-2xl">
                Habla de todas las cosas que te gustaria hablar en un primer
                enunciado sobre doctor sales. Habla de todas las cosas que te
                gustaria hablar en un primer enunciado sobre doctor sales. Habla
                de todas las cosas que te gustaria hablar en un primer enunciado
                sobre doctor sales.
              </h1>
            </div>
            <div className="w-full flex justify-center lg:justify-start">
              <button className="w-auto text-2xl font-poppins-400 text-white border-2 border-white rounded-lg p-2 hover:bg-white hover:text-purple-900 transition duration-400">
                Agendar Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
