import React from "react";
import { IoIosArrowDropup } from "react-icons/io";

const GoHomeButton = () => {
  return (
    <a href="#home">
      <button
        className="fixed bottom-4 right-4 bg-gray-200 hover:bg-gray-300 rounded-full h-32 w-32 flex justify-center items-center text-gray-800 z-10"
        style={{ height: "50px", width: "50px" }}
      >
        <IoIosArrowDropup size={35} />
      </button>
    </a>
  );
};

export default GoHomeButton;
