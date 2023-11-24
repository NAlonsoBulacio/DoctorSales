import React, { useState } from "react";
import "./Diagrama.css";
import diagrama from "../../Multimedia/diagrama.png";
import diagrama_chico from '../../Multimedia/diagrama2.png';

const Diagrama = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);
  const [startDragPos, setStartDragPos] = useState({ x: 0, y: 0 });
  
  const handleImageClick = () => {
    if (!isFullScreen) {
      setIsFullScreen(true);
      setIsZoomed(false); // Resetear el zoom al abrir en pantalla completa
    } else {
      setIsZoomed(!isZoomed); // Alternar el estado de zoom al hacer clic en la imagen
    }
  };

  const handleExitFullScreen = () => {
    setIsFullScreen(false);
    setIsZoomed(false);
  };

  const handleDragStart = (e) => {
    setStartDragPos({ x: e.clientX, y: e.clientY });
    document.addEventListener('mousemove', handleDragging);
    document.addEventListener('mouseup', handleDragEnd);
  };

  const handleDragging = (e) => {
    const newX = e.clientX - startDragPos.x;
    const newY = e.clientY - startDragPos.y;
    setPosX(posX + newX);
    setPosY(posY + newY);
    setStartDragPos({ x: e.clientX, y: e.clientY });
  };

  const handleDragEnd = () => {
    document.removeEventListener('mousemove', handleDragging);
    document.removeEventListener('mouseup', handleDragEnd);
  };
  
  return (
    <div className="full-screen-container">
      {isFullScreen ? (
        <div className="full-screen-overlay">
          <button className="button-image" onClick={handleExitFullScreen}>X</button>
          <img
            className={`full-screen-image ${isZoomed ? 'full-screen-image-zoomed' : ''}`}
            src={diagrama}
            alt="Imagen en pantalla completa"
            onClick={handleImageClick} // Controlar el zoom al hacer clic en la imagen
            style={{ transform: `translate(${posX}px, ${posY}px)` }}
            onMouseDown={handleDragStart}
          />
        </div>
      ) : (
        <img
          className="normal-image"
          src={diagrama_chico}
          alt="Imagen normal"
          onClick={handleImageClick}
        />
      )}
    </div>
  );
};

export default Diagrama;
