import React, { useState } from "react";
import diagrama from "../../assets/diagrama.png";
import diagrama2 from "../../assets/diagrama2.png";

const Diagrama = () => {
  const [showFullScreen, setShowFullScreen] = useState(false);

  const handleImageClick = () => {
    setShowFullScreen(true);
    // Aquí puedes deshabilitar el scroll de la página principal si es necesario
    document.body.style.overflow = "hidden";
  };
  const handleButtonClick = () => {
    setShowFullScreen(false);
    // Aquí puedes deshabilitar el scroll de la página principal si es necesario
    document.body.style.overflow = "auto";
  };

  return (
    <div className="w-full h-auto">
      <img
        src={diagrama2}
        alt="Miniatura"
        onClick={handleImageClick}
        className="w-full"
      />

      {showFullScreen && (
        <div className="fixed top-0 left-0 w-full h-full flex flex-wrap items-center justify-center z-50 bg-white bg-opacity-95 overflow-y-auto">
            <button
              onClick={handleButtonClick}
              className="absolute top-4 right-10 z-10 font-semibold text-black text-5xl"
            >
              X
            </button>
          <div className="max-w-full h-auto relative">
            <img
              src={diagrama}
              alt="Imagen Completa"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Diagrama;
