import React from "react";
import Icon1 from "../../images/service/icon1.png";
import Icon2 from "../../images/service/icon2.png";
import Icon3 from "../../images/service/icon3.png";
import Illustration from "../../images/service/illustration1.png";

export default function Services() {
  return (
    <section className="h-screen relative py-10">
      <img
        src={Illustration}
        alt="background circle"
        className="hidden md:block absolute left-50 top-35 w-50  pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Service</h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          We offer youth with chances for career development in their practice.
          We also support a wide range of services to ensure client
          satisfaction.
        </p>

        <div className="grid grid-cols-1 justify-center items-center md:grid-cols-3 gap-5 lg:mx-45">
          <article className="p-10 h-[450px] bg-white/5 backdrop-blur-sm border border-white/30 rounded-2xl shadow-lg">
            <div className="flex w-25 h-25  mx-auto items-center justify-center mb-6">
              <img
                src={Icon1}
                alt="icon1"
                className="w-12 h-12 lg:w-25 lg:h-25"
              />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-left">
              Send Texts Instantly
            </h3>
            <p className="text-gray-600 text-sm mb-4 text-left">
              Financial planning, forecasting and adjusting rapidly with
              customer demands and budgets.
            </p>
            <a
              className="text-indigo-600 font-medium inline-flex mt-15"
              href="#"
            >
              Learn More <span className="ml-2">→</span>
            </a>
          </article>

          <article className="p-10 h-[450px] bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl shadow-lg">
            <div className="w-25 h-25 bg-white rounded-xl mx-auto flex items-center justify-center mb-6">
              <img
                src={Icon2}
                alt="icon2"
                className="w-12 h-12 lg:w-25 lg:h-25"
              />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-left">
              Better Organized
            </h3>
            <p className="text-gray-600 text-sm mb-4 text-left">
              Latest technology and experienced guidance, trained HR specialists
              to keep updated.
            </p>
            <a
              className="text-indigo-600 font-medium inline-flex mt-15"
              href="#"
            >
              Learn More <span className="ml-2">→</span>
            </a>
          </article>

          <article className="p-10 h-[450px] bg-white/80 backdrop-blur-sm border border-white/30 rounded-2xl shadow-lg">
            <div className="w-25 h-25 bg-white rounded-xl mx-auto flex items-center justify-center mb-6">
              <img
                src={Icon3}
                alt="icon3"
                className="w-12 h-12 lg:w-25 lg:h-25"
              />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-left">
              Analytical Statistics
            </h3>
            <p className="text-gray-600 text-sm mb-4 text-left">
              Messages, real-time reminders, memos, and many more will keep your
              team in sync.
            </p>
            <a
              className="text-indigo-600 font-medium inline-flex mt-15"
              href="#"
            >
              Learn More <span className="ml-2">→</span>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
