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
            <p>
              Gracias por visitar nuestra página. La privacidad de nuestros
              visitantes es de suma importancia para nosotros. Esta política de
              privacidad documenta la manera en que recopilamos, utilizamos,
              compartimos y almacenamos su información personal.
            </p>

            <div>
              <p className="font-noto-500 text-xl md:text-2xl text-gray-600">
                Responsable del Tratamiento de los Datos Personales:
              </p>
              <p>
                DOCTOR SALES LLC es el responsable del tratamiento de los datos personales recabados a través de este formulario.
              </p>
            </div>

            <div>
              <p className="font-noto-500 text-xl md:text-2xl text-gray-600">
                Datos que Recopilamos:
              </p>
              <p>
                Recabamos la siguiente información con tu consentimiento explícito:
              </p>
              <ul className="list-disc list-inside">
                <li>Nombre completo</li>
                <li>Correo electrónico</li>
                <li>Número de teléfono</li>
                <li>
                  Información sobre tu negocio y necesidades específicas (según
                  las preguntas del formulario).
                </li>
              </ul>
            </div>

            <div>
              <p className="font-noto-500 text-xl md:text-2xl text-gray-600">
                Finalidad del Tratamiento de los Datos:
              </p>
              <p>
                Los datos personales proporcionados serán utilizados para:
              </p>
              <ul className="list-disc list-inside">
                <li>Contactarte y ofrecerte información relevante sobre nuestros servicios.</li>
                <li>Diseñar propuestas personalizadas adaptadas a tus necesidades.</li>
                <li>Gestionar la relación comercial, en caso de contratar nuestros servicios.</li>
                <li>Enviarte información promocional, solo si das tu consentimiento explícito.</li>
              </ul>
            </div>

            <div>
              <p className="font-noto-500 text-xl md:text-2xl text-gray-600">
                Protección de tus Datos:
              </p>
              <p>
                Nos comprometemos a proteger tu información personal mediante el uso de medidas de seguridad administrativas, técnicas y físicas para evitar el acceso, uso, divulgación o modificación no autorizada.
              </p>
            </div>

            <div>
              <p className="font-noto-500 text-xl md:text-2xl text-gray-600">
                Compartición de Datos:
              </p>
              <p>
                Tus datos personales no serán vendidos, transferidos ni compartidos con terceros sin tu consentimiento previo, salvo que sea requerido por una autoridad legal.
              </p>
            </div>

            <div>
              <p className="font-noto-500 text-xl md:text-2xl text-gray-600">
                Derechos ARCO (Acceso, Rectificación, Cancelación y Oposición):
              </p>
              <p>
                Tienes derecho a:
              </p>
              <ul className="list-disc list-inside">
                <li>Acceder a tus datos personales para saber cómo se utilizan.</li>
                <li>Solicitar la corrección de datos incorrectos o incompletos.</li>
                <li>Pedir la cancelación de tus datos, cuando sea posible.</li>
                <li>Oponerte al uso de tus datos personales para fines específicos.</li>
              </ul>
              <p>
                Para ejercer estos derechos, por favor, contáctanos en [correo electrónico de contacto].
              </p>
            </div>

            <div>
              <p className="font-noto-500 text-xl md:text-2xl text-gray-600">
                Cambios en la Política de Privacidad:
              </p>
              <p>
                Nos reservamos el derecho de actualizar esta política de privacidad. Cualquier cambio será notificado a través de nuestro sitio web o por correo electrónico.
              </p>
            </div>

            <div>
              <p className="font-noto-500 text-xl md:text-2xl text-gray-600">
                Consentimiento:
              </p>
              <p>
                Al enviar este formulario, aceptas que tus datos personales sean tratados de acuerdo con esta política de privacidad.
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
