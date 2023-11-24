import React from 'react'

const Options = () => {
  return (
    <div className="w-full my-8 md:my-20">
    <div className="px-8 md:px-32 space-y-4">
      <h1 className='text-3xl md:text-4xl font-noto-500'>En resumen, tienes dos opciones:</h1>
      <div className="flex flex-wrap justify-center items-center space-y-3 md:space-y-0">
        <div className="w-full md:w-2/5 flex justify-center items-center bg-gray-100 h-auto md:h-32 px-3 py-2 rounded-xl ">
          <p className='text-xl'>
            No tomar acción y seguir el mismo camino en el que has estado
            desde el principio, atado a lo que te impide crecer y escalar tu
            empresa.
          </p>
        </div>
        <div className='mx-4'>
          <p className='text-2xl font-noto-400'>O puedes</p>
        </div>
        <div className="w-full md:w-2/5">
          <div className="flex justify-center items-center">
            <button
               className="button-options flex justify-center items-center h-auto md:h-32 font-noto-400 max-w-[700px] bg-gradient-to-r from-purple-800 to-purple-900 text-white text-xl py-2 px-3 rounded-xl transition duration-300 ease-in-out transform hover:scale-105"
            >
              Agendar una llamada y evaluar la posibilidad de crecer sin
              ningún tipo de riesgo ya que te garantizamos los resultados
              para ser rentable.
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Options
