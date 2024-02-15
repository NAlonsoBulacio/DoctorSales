import React from "react";

const Clients = () => {
  const clients = [
    "https://sustentacorp.com/wp-content/uploads/2023/08/ose.png",
    "https://es.wikipedia.org/static/images/mobile/copyright/wikipedia-wordmark-en.svg",
    "https://static-mh.content.disney.io/matterhorn/assets/goc/disney_logo_dark@2x-45d70f7dd57b.png",
    "https://www.lagaceta.com.ar/assets/2022/images/brand.svg",
    "https://sustentacorp.com/wp-content/uploads/2023/09/logostiler.png",
    "https://shellbox.shell.com.ar/assets/images/logo-shell.svg",
  ];

  return (
    <div className="flex flex-wrap justify-center items-center">
      <div className="w-full flex justify-center items-center ">
        <h1 className="text-gray-800 text-4xl font-noto-400 tracking-widest">
          El Growth Partner De Confianza Para
          <span className="text-purple-900">:</span>
        </h1>
      </div>
      <div className="flex flex-wrap justify-center items-center px-40">
        {clients?.map((client, index) => (
          <div key={index} className="w-1/6">
            <img src={client} alt="img-client" className="w-4/6" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
