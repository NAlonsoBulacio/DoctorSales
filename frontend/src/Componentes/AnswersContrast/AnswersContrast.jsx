import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
const AnswersContrast = () => {
  return (
    <div className="w-full relative flex justify-center items-center py-12">
    <div className="w-4/5 px-14 py-4  border-white border-2 rounded-xl flex justify-center items-center">
      <div className="space-y-6">
        <h1 className="w-4/5 text-5xl text-left mb-8 font-noto-600">
          Ahora, déjame hacerte una pregunta: <br />
          <span className="text-purple-800">
            ¿Qué te impide vender más?
          </span>
        </h1>
        <h1 className="w-4/5 text-3xl text-left mb-8 font-noto-500 text-gray-700">
          Si tu respuesta es una de las siguientes, podemos ayudarte:
        </h1>
        <div className="flex justify-start items-start space-x-4 text-left">
          <div
            className="flex items-center pt-1"
            style={{ width: "35px", height: "35px" }}
          >
             <FaCheckCircle className="check text-purple-800" />
          </div>
          <div className="flex justify-start items-start">
            <p className="text-2xl">
              No tienes un sistema automático para conseguir llamadas sin
              depender de ti.
            </p>
          </div>
        </div>
        <div className="flex justify-start items-start space-x-4 text-left">
          <div
            className="flex items-center pt-1"
            style={{ width: "35px", height: "35px" }}
          >
            <FaCheckCircle className="check text-purple-800" />
          </div>
          <p className="text-2xl">
            No sabes cómo comunicar el verdadero valor de tu producto a tus
            prospectos.
          </p>
        </div>
        <div className="flex justify-start items-start space-x-4 text-left">
          <div
            className="flex items-center pt-1"
            style={{ width: "35px", height: "35px" }}
          >
            <FaCheckCircle className="check text-purple-800" />
          </div>
          <p className="text-2xl">
            No cuentas con un equipo que haga crecer tu negocio sin que tú
            tengas que intervenir.
          </p>
        </div>
        <div className="flex justify-start items-start space-x-4 text-left">
          <div
            className="flex items-center pt-1"
            style={{ width: "35px", height: "35px" }}
          >
            <FaCheckCircle className="check text-purple-800" />
          </div>
          <p className="text-2xl">
            Tienes mucho conocimiento en tu área, pero no sabes cómo
            comunicarlo a los demás.
          </p>
        </div>
        <div className="flex justify-start items-start space-x-4 text-left">
          <div
            className="flex items-center pt-1"
            style={{ width: "35px", height: "35px" }}
          >
            <FaCheckCircle className="check text-purple-800" />
          </div>
          <p className="text-2xl">
            Dependes de referidos, estrategias orgánicas, networking o
            recomendaciones de terceros, y eso limita tu control sobre tu
            negocio.
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AnswersContrast
