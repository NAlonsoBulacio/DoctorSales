import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phone: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [success, setSuccess] = useState("false");
  const [formSubmitted, setFormSubmitted] = useState(false);
  useEffect(() => {
    setSuccess(false);
  }, []);
  const serviceId = "service_yach6ep";
  const templateId = "template_uc455yu";
  const apiKey = "3MeXtRfkLGSSZff0v";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    validate({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true)
    if(Object.keys(errors).length === 0){
    emailjs.send(serviceId, templateId, formData, apiKey).then(
      (response) => {
        console.log("Correo electrónico enviado con éxito", response);
        // Puedes mostrar un mensaje de éxito o redirigir al usuario a una página de confirmación.
      },
      (error) => {
        console.error("Error al enviar el correo electrónico", error);
        // Puedes mostrar un mensaje de error al usuario.
        toast.error("Hubo un error al enviar el mensaje.");
      }
    );
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      phone: "",
    });
    window.fbq("trackCustom", "FormFilled");
    toast.success("¡Mensaje enviado exitosamente!");
    setSuccess(true);}
  };

  const validate = (registro) => {
    let errors = {};
    if (!registro.name) {
      errors.name = "Llenar con su nombre";
    }
    if (!registro.email) {
      errors.email = "Debes ingresar un email.";
    }
    if (registro.email) {
      const emailRegex =
        /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
      if (!emailRegex.test(registro.email)) {
        errors.email = "El email ingresado no es válido";
      }
    }
    if (!registro.phone) {
      errors.phone = "Ingresar su número.";
    }
    setErrors(errors);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="justify-center items-center h-auto md:h-screen max-w-[1600px] shadow-lg md:shadow-xl"
    >
      <div className="py-0 md:py-4">
        <div className="px-8 w-full ">
          <h1
            className="font-plus-500 text-purple-800 text-center md:text-left text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
          >
            CONTACTANOS
          </h1>
        </div>
        <div className="ml-0 px-3 md:px-8">
          <p
            className="font-roboto-500 font-bold text-center md:text-left text-lg md:text-2xl"
            style={{ color: "#001659" }}
          >
            Para recibir el mejor asesoramiento sobre como hacer crecer tu Saas.
          </p>
        </div>
        <div className="w-full max-w-6xl p-8 font-roboto-300">
          <div className="sm:flex pr-4">
            <div className="w-full sm:w-1/2 mb-6">
              <label
                htmlFor="name"
                className="block mb-2 text-left font-semibold text-lg text-gray-600"
              >
                Su nombre y apellido
              </label>
              <input
                className="w-full bg-gray-200 rounded-md"
                style={{ padding: "16px" }}
                placeholder="Ingrese su nombre y apellido"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {formSubmitted && errors.name && (
                <span className="text-red-500 text-left">{errors.name}</span>
              )}
            </div>
            <div className="w-full sm:w-1/2 ml-0 sm:ml-4 mb-6">
              <label
                htmlFor="phone"
                className="block mb-2 text-left font-semibold text-lg text-gray-600"
              >
                Su número de contacto
              </label>
              <input
                className="w-full bg-gray-200 rounded-md"
                style={{ padding: "16px" }}
                placeholder="Ingrese su número de contacto"
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              {formSubmitted && errors.phone && (
                <span className="text-red-500">{errors.phone}</span>
              )}
            </div>
          </div>
          <div className=" mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-left font-semibold text-lg text-gray-600"
            >
              Correo Electrónico
            </label>
            <input
              className="w-full bg-gray-200 rounded-md"
              style={{ padding: "16px" }}
              placeholder="Ingrese su Correo Electrónico"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {formSubmitted && errors.email && (
              <span className="text-red-500">{errors.email}</span>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="block mb-2 text-left font-semibold text-lg text-gray-600"
            >
              Asunto
            </label>
            <input
              className="w-full bg-gray-200 rounded-md"
              style={{ padding: "16px" }}
              placeholder="Ingrese el asunto del mensaje"
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          <div className="mb-2">
            <label
              htmlFor="message"
              className="block mb-2 text-left font-semibold text-lg text-gray-600"
            >
              Mensaje
            </label>
            <textarea
              className="w-full bg-gray-200 rounded-md"
              style={{ padding: "16px" }}
              placeholder="Ingrese tu mensaje"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-end relative">
            <button
              className="py-2 px-4 mt-2 bg-purple-800 text-white text-lg font-semibold w-full md:w-1/5 rounded-md transform transition-transform hover:scale-105"
              type="submit"
              style={{  padding: "12px" }}
            >
              {success ? "Enviado" : "Enviar"}
            </button>
          </div>
        </div>
      </div>

    </form>
  );
};

export default ContactForm;
