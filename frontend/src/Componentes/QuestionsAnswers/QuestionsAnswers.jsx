import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./QuestionsAnswers.css";
const QuestionsAnswers = () => {
  const [answer, setAnswer] = useState("");

  const handleAnswer = (answerId) => {
    setAnswer((prevAnswer) => (prevAnswer === answerId ? "" : answerId));
  };

  return (
    <div className="w-full flex justify-center items-center my-6">
      <div className="w-full md:w-[950px] flex flex-wrap justify-center items-center text-xl md:text-4xl space-y-4 px-2">
        <div className="w-full text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-purple-800">FAQ's</h1>
        </div>
        <div className="w-full text-left">
          <button
            className="w-full py-4 px-4 flex justify-between items-center bg-gray-200 font-inter-600 space-x-2"
            onClick={() => {
              answer !== "answer1" ? handleAnswer("answer1") : handleAnswer("");
            }}
          >
              <span className="flex-grow text-left">
              ¿Cuánto tiempo se tarda en obtener resultados?
            </span>
            <IoIosArrowDown
            className="w-1/4 md:w-auto"
              style={{
                transform: `rotate(${answer === "answer1" ? 180 : 0}deg)`,
                transition: "transform 0.5s",
              }}
            />
          </button>
        </div>
        <div
          className={`w-full answer text-xl md:text-2xl ${
            answer === "answer1" ? "show" : ""
          }`}
        >
              <span className="flex-grow text-left">
          Si estás dispuesto, podrás ver resultados en cuestión de semanas.
          </span>
        </div>
        <div className="w-full">
          <button
            className="w-full py-4 px-4 flex justify-between items-center bg-gray-200 font-inter-600 space-x-2"
            onClick={() => {
              answer !== "answer2" ? handleAnswer("answer2") : handleAnswer("");
            }}
          >
              <span className="flex-grow text-left">
            ¿Funciona si vendo Software as a service?
            </span>
            <IoIosArrowDown
             className="w-1/4 md:w-auto"
              style={{
                transform: `rotate(${answer === "answer2" ? 180 : 0}deg)`,
                transition: "transform 0.5s",
              }}
            />
          </button>
        </div>
        <div
          className={`w-full answer text-xl md:text-2xl ${
            answer === "answer2" ? "show" : ""
          }`}
        >
            
          Nuestro sistema funciona especialmente bien en estos casos y ofrece
          los mejores resultados.
        </div>
        <div className="w-full">
          <button
            className="w-full py-4 px-4 flex justify-between items-center bg-gray-200 font-inter-600 space-x-2"
            onClick={() => {
              answer !== "answer3" ? handleAnswer("answer3") : handleAnswer("");
            }}
          >
              <span className="flex-grow text-left">¿Funciona si vendes productos de alto valor?</span>
              <IoIosArrowDown
               className="w-1/4 md:w-auto"
                style={{
                  transform: `rotate(${answer === "answer3" ? 180 : 0}deg)`,
                  transition: "transform 0.5s",
                }}
              />
          </button>
        </div>
        <div
          className={`w-full answer text-xl md:text-2xl ${
            answer === "answer3" ? "show" : ""
          }`}
        >
          Definitivamente, nos especializamos en construir y mejorar ofertas de
          alto valor. Si actualmente vendes productos a precios bajos y deseas
          elevar tus costos, podemos ayudarte a construir y validar una oferta
          de alto valor.
        </div>
        <div className="w-full">
          <button
            className="w-full py-4 px-4 flex justify-between items-center bg-gray-200 font-inter-600 space-x-2 text-left"
            onClick={() => {
              answer !== "answer4" ? handleAnswer("answer4") : handleAnswer("");
            }}
          >
            ¿Y si no obtengo los resultados prometidos?{" "}
            <IoIosArrowDown
             className="w-1/4 md:w-auto"
              style={{
                transform: `rotate(${answer === "answer4" ? 180 : 0}deg)`,
                transition: "transform 0.5s",
              }}
            />
          </button>
        </div>
        <div
          className={`w-full answer text-xl md:text-2xl ${
            answer === "answer4" ? "show" : ""
          }`}
        >
          Garantizamos los resultados por contrato. Si en 90 días no logramos
          los resultados en tu empresa, te reembolsamos todo tu dinero.
        </div>
      </div>
    </div>
  );
};

export default QuestionsAnswers;
