import React from "react";
import logo from "../../assets/logo-violette.png";
const Footer = () => {
  const scrollToProcess = () => {
    const processElement = document.getElementById("process");
    if (processElement) {
      const offset = 240;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = processElement.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <div>
      <div className="px-4 lg:px-32 pt-8 lg:pt-20 pb-0 lg:pb-16">
        <div className="w-full flex justify-center items-end space-x-4 lg:space-x-14">
          <a
            href="#about"
            className="hidden lg:block cursor-pointer font-poppins-500 text-xl lg:text-2xl text-gray-700 hover:text-purple-700"
          >
            About <br /> Us
          </a>
          <a href="/">
            <img className="w-20 lg:w-28" src={logo} alt="logo-violeta" />
          </a>
          <a
            onClick={scrollToProcess}
            className="hidden lg:block cursor-pointer font-poppins-500 text-xl lg:text-2xl text-gray-700 hover:text-purple-700"
          >
            Our <br /> processes
          </a>
        </div>
        <div className="w-full flex justify-center ">
          <div className="w-3/5">
            <hr className="my-6 border-[1.5px] border-purple-900" />
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="w-1/5 lg:w-1/3 flex justify-start">
            <img
              src="https://strapi.io/assets/white-hero/bottom-left.svg"
              alt="dots"
            />
          </div>
          <div className="w-3/5 lg:w-1/3 flex flex-wrap justify-center mt-6 space-x-0 lg:space-x-4 text-lg">
            <h1 className="w-full lg:w-auto">© Copyright 2023</h1>
            <a
              href="/policy"
              className="w-full lg:w-auto text-gray-700 hover:text-black"
            >
              Policy Terms
            </a>
          </div>
          <div className="w-1/5 lg:w-1/3 flex justify-end">
            <img
              className="scale-x-[-1]"
              src="https://strapi.io/assets/white-hero/bottom-left.svg"
              alt="dots"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
