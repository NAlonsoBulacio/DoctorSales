import React from "react";

const ClientReview = () => {
  const reviews = [
    {
      reviewText: `"Nos hemos apoyado de las soluciones de Doctor Sales porque estas nos van
  a ayudar a llegar a todos esos clientes que tenemos, de manera
  ágil, de manera rápida"
`,
      name: "Pedro Suarez",
      positionCompany: "CEO de Shell Brothers",
      icon: "https://cloud.strapi.io/assets/people/visma--rasmus-theilso-madsen.png",
    },
    {
      reviewText: `"Nos hemos apoyado de las soluciones de Doctor Sales porque estas nos van
  a ayudar a llegar a todos esos clientes que tenemos, de manera
  ágil, de manera rápida"
`,
      name: "Pedro Suarez",
      positionCompany: "CEO de Shell Brothers",
      icon: "https://cloud.strapi.io/assets/people/visma--rasmus-theilso-madsen.png",
    },
  ];

  return (
    <div className="w-full flex flex-wrap justify-center items-center px-4 lg:px-20 ">
      <div className="flex justify-center items-center gap-x-0 lg:gap-x-20 ">
        {reviews?.map((review, index) => (
          <div
            key={index}
            className="w-full lg:w-1/3 flex flex-wrap justify-center items-center p-4 bg-gray-200 shadow-lg rounded-xl"
          >
            <div className="w-full flex justify-center items-center ">
              <h1 className="font-noto-italic-400 text-xl text-gray-700 text-left">
                {review.reviewText}
              </h1>
            </div>
            <div className="w-full flex flex-wrap">
              <div className="w-1/2 flex flex-wrap justify-start">
                <span className="w-full text-purple-900 text-2xl font-noto-400 text-left py-2">
                  {review.name}
                </span>
                <h1 className="w-full font-noto-300 text-md text-gray-600 text-left">
                  {review.positionCompany}
                </h1>
              </div>
              <div className="w-1/2 flex justify-end">
                <img src={review.icon} alt="foto-review" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientReview;
