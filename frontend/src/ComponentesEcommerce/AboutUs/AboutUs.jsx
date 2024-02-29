import React from "react";
import { useInView } from "react-intersection-observer";
import portada from "../../assets/portadaCap1.png";
const AboutUs = ({change}) => {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [ref4, inView4] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <div className="py-14 lg:py-20">
      <div className="flex flex-wrap justify-center items-center px-4 lg:px-10">
        <div className="w-full" ref={ref1}>
          <h1
            className={`${
              inView1
                ? "opacity-100 transition-opacity duration-[1s]"
                : "opacity-0"
            } text-gray-200 text-4xl lg:text-5xl font-plus-400 tracking-wide`}
          >
            About Us
          </h1>
        </div>
        <div className="w-full flex justify-center ">
          <div className="w-3/5 lg:w-2/5">
            <hr className="my-8 border-[1.5px] border-purple-400" />
          </div>
        </div>
        <div className="w-full flex-wrap lg:flex justify-center items-start space-y-4">
          <div className="w-full lg:w-1/2 rounded-lg overflow-hidden mx-2 lg-mx-0"
          ref={ref3}
          >
            <img
              className={`${
                inView3
                  ? "opacity-100 transition-opacity duration-[1s]"
                  : "opacity-0"
              } w-full`}
              src={portada}
              alt="img-ds"
            />
          </div>
          <div
            className="w-full lg:w-1/2 flex flex-wrap text-left text-gray-200 poppins-400 text-xl space-y-4 px-2"
            ref={ref2}
          >
            <div>
              <h1
                className={`${
                  inView2
                    ? "opacity-100 transition-opacity duration-[1s]"
                    : "opacity-0"
                } text-xl`}
              >
               We stand out for being 100% focused on e-commerce for over 5 years.
              </h1>
            </div>
            <div>
              <h1
                className={`${
                  inView2
                    ? "opacity-100 transition-opacity duration-[1s]"
                    : "opacity-0"
                } text-xl`}
              >
              This allows us to follow a step-by-step approach of proven strategies that we know work in the market.
              </h1>
            </div>
            <div>
              <h1
                className={`${
                  inView2
                    ? "opacity-100 transition-opacity duration-[1s]"
                    : "opacity-0"
                } text-xl`}
              >
               Additionally, we create a new sales channel for our clients through this formula, where our compensation is exclusively based on the results obtained from the profits generated by this funnel.
              </h1>
            </div>
            <div>
              <h1
                className={`${
                  inView2
                    ? "opacity-100 transition-opacity duration-[1s]"
                    : "opacity-0"
                } text-xl`}
              >
                Also, when we've initiated a new relationship with some of our clients, we've been able to complement their existing marketing team. We developed a new sales funnel, distinct from the one they already had in operation, with the sole aim of increasing their revenue.
              </h1>
            </div>
            <div>
              <h1
                className={`${
                  inView2
                    ? "opacity-100 transition-opacity duration-[1s]"
                    : "opacity-0"
                } text-xl`}
              >
               This distinction lies in the fact that we do not offer common services like any other agency; instead, we implement a new automated sales funnel that we call "Trojan Horse," designed from scratch by us with value-based marketing.
              </h1>
            </div>
            <div>
              <h1
                className={`${
                  inView2
                    ? "opacity-100 transition-opacity duration-[1s]"
                    : "opacity-0"
                } text-xl`}
              >
               {`Surprisingly, 99% of ${change} brands in the e-commerce space have yet to implement it.`}
              </h1>
            </div>
            <div>
              <h1
                className={`${
                  inView2
                    ? "opacity-100 transition-opacity duration-[1s]"
                    : "opacity-0"
                } text-xl`}
              >
               This uniqueness allows us to stand out and achieve seven-figure monthly results with our clients.
              </h1>
            </div>
            <div className="w-full flex justify-center lg:justify-start py-2"
            ref={ref4}
            >
              <a href="#calendly">
                <button className={`${
                  inView4
                    ? "opacity-100 transition-opacity duration-[1s]"
                    : "opacity-0"
                } w-auto text-2xl font-poppins-400 text-white border-2 border-white rounded-3xl py-2 px-4 hover:bg-white hover:text-purple-900 transition duration-400`}>
                  Discovery a Call
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
