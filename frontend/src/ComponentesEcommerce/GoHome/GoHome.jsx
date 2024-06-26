import React from "react";
import { IoIosArrowDropup } from "react-icons/io";

const GoHomeButton = () => {
  return (
    <a href="/">
      <button
        className="hidden md:flex fixed bottom-[27px] lg:bottom-4 right-[14px] lg:right-4 h-[35px] lg:h-[50px] w-[35px] lg:w-[50px] bg-gray-200 hover:bg-gray-300 rounded-full justify-center items-center text-gray-800 z-10"
      >
        <IoIosArrowDropup size={35} />
      </button>
    </a>
  );
};

export default GoHomeButton;
