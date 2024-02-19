import React from "react";
import './ClientReview.css';
import { useInView } from "react-intersection-observer";
const ClientReview = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
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
      <div ref={ref1} className={`${
          inView1
            ? "opacity-100 transition-opacity duration-[1s]"
            : "opacity-0"
        } flex flex-wrap justify-center items-center gap-y-8 lg:gap-y-0 gap-x-0 lg:gap-x-20 `}>
        {reviews?.map((review, index) => (
          <div
            key={index}
            className="w-full lg:w-1/3 flex flex-wrap justify-center items-center p-4 background-card-review shadow-lg rounded-xl"
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
