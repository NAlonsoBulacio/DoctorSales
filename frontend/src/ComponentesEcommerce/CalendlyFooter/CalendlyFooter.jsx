import React, { useState, useEffect } from "react";

const CalendlyFooter = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > window.innerHeight * 2) {
        // 200vh
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer
      className={`fixed bottom-0 left-0 w-screen h-[90px] bg-gray-200 flex justify-center border-t border-gray-400 items-center transition-all duration-500 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex justify-center items-center space-x-6">
        <h1 className="hidden lg:block text-3xl font-plus-400 text-gray-800">
          Schedule a Meeting With Our Team
        </h1>
        <div>
          <a href="#calendly">
            <button className="text-xl font-poppins-400 text-gray-800 border-2 border-gray-800 rounded-3xl py-2 px-4 hover:bg-purple-800 hover:text-gray-300 transition duration-400">
              Schedule a Meeting
            </button>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default CalendlyFooter;
