import React from "react";
import './ClientReview.css';
import { useInView } from "react-intersection-observer";
import review1 from "../../assets/clients-review/review1.jpeg";
import review2 from "../../assets/clients-review/review2.jpeg";
const ClientReview = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const reviews = [
    {
      reviewText: `"We're truly grateful for your service, very professional 👏🏼
      Thank you Ignacio for your help and support, I really appreciate it! "
`,
      name: "Kristina Tatarchuk",
      positionCompany: "Director of a Libertex franchise.",
      icon: review1,
    },
    {
      reviewText: `"I want to show you the numbers to let you see how well you're doing your job! Congratulations!!"
`,
      name: "Jorge Niel ",
      positionCompany: "CMO of Synagro",
      icon: review2,
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
            <div className="w-full flex flex-wrap justify-between">
              <div className="w-1/2 flex flex-wrap justify-start">
                <span className="w-full text-purple-900 text-2xl font-noto-400 text-left py-2">
                  {review.name}
                </span>
                <h1 className="w-full font-noto-300 text-md text-gray-600 text-left">
                  {review.positionCompany}
                </h1>
              </div>
              <div className="w-32 rounded-full overflow-hidden flex justify-end">
                <img className="w-full object-cover" src={review.icon} alt="foto-review" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientReview;
