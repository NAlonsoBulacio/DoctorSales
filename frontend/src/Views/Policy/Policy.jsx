import React from "react";
import Footer from "../../Componentes/Footer/Footer";
import logo from "../../assets/logo-white.png";
const Policy = () => {
  return (
    <div>
      <div className="w-full h-auto py-8 bg-purple-800 flex justify-center items-center">
        <a href="/"><img src={logo} alt="el_logo" className="max-w-[90px]" /></a>
      </div>
      <div className="flex justify-center items-start py-14">
        <div className="mx-4 md:mx-32 text-left text-gray-500 space-y-10 font-plus-400">
          <div>
            <h1 className="text-4xl text-purple-900 text-left font-plus-500">
              Política de Privacidad
            </h1>
          </div>
          <div className="space-y-8 w-full md:w-2/3 text-lg md:text-xl">
            <p className="">
              Gracias por visitar nuestra página. La privacidad de nuestros
              visitantes es de suma importancia para nosotros. Esta política de
              privacidad documenta la manera en que recopilamos, utilizamos,
              compartimos y almacenamos su información personal.
            </p>
            <div>
              <p className="font-noto-500 text-xl md:text-2xl text-gray-600">
                Recopilación de Información:
              </p>
              <p>
                Recopilamos información personal, como nombres y direcciones de
                correo electrónico, solo cuando se proporciona voluntariamente a
                través de formularios de contacto u otras interacciones en
                nuestro sitio.
              </p>
            </div>
            <div>
              <p className="font-noto-500 text-xl md:text-2xl text-gray-600">
                Uso de la Información:
              </p>
              <p>
                La información recopilada se utiliza para responder a consultas,
                procesar transacciones y enviar información relevante sobre
                nuestros productos o servicios.
              </p>
            </div>
            <div>
              <p className="font-noto-500 text-xl md:text-2xl text-gray-600">
                Compartir Información:
              </p>
              <p>
                No compartiremos su información personal con terceros sin su
                consentimiento, a menos que sea requerido por la ley.
              </p>
            </div>
            <div>
              <p className="font-noto-500 text-xl md:text-2xl text-gray-600">
                Cookies:
              </p>
              <p>
                Utilizamos cookies para mejorar la experiencia del usuario y
                analizar el tráfico del sitio. Puede gestionar las preferencias
                de cookies en cualquier momento a través de la configuración de
                su navegador.
              </p>
            </div>
            <div>
              <p className="font-noto-500 text-xl md:text-2xl text-gray-600">
                Seguridad:
              </p>
              <p>
                Implementamos medidas de seguridad para proteger la información
                personal, pero no podemos garantizar la seguridad absoluta. Al
                utilizar nuestro sitio, usted acepta los riesgos asociados con
                la transmisión de información por Internet.
              </p>
            </div>
            <div>
              <p className="font-noto-500 text-xl md:text-2xl text-gray-600">
                Cambios en la Política de Privacidad:
              </p>
              <p>
                Nos reservamos el derecho de actualizar esta política en
                cualquier momento. Le recomendamos revisar periódicamente esta
                página para estar informado sobre cualquier cambio.
              </p>
            </div>
            <div>
              <p className="font-noto-500 text-xl md:text-2xl text-gray-600">
              Al continuar utilizando nuestro sitio, usted acepta los términos de esta política de privacidad. Si tiene alguna pregunta o inquietud, no dude en ponerse en contacto con nosotros.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Policy;
