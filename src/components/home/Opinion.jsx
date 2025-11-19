import React from "react";
import Frame from "../../images/opinions/Frame_439.png";
import QuoteIcon from "../../images/opinions/Quote_Icon.png";

export default function Opinion() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* soft background circle */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-br from-blue-100 to-purple-100 rounded-full opacity-30 blur-3xl -translate-x-1/3"></div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">
            What our clients have to say
          </h2>
          <p className="text-gray-600 text-sm">
            Our success is determined on how satisfied our customers are with
            the service. These reviews say we have stuff to do.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -left-10 -top-10 w-80 h-80 bg-linear-to-br from-blue-200 to-purple-200 rounded-full opacity-40 blur-2xl"></div>
              <div className="relative z-10 w-80 h-80 rounded-3xl overflow-hidden ">
                <img
                  src={Frame}
                  alt="client"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="relative lg:pl-12">
            <img
              src={QuoteIcon}
              alt="quote"
              className="w-16 h-16 mb-6 opacity-80"
            />

            <h3 className="text-2xl font-bold text-indigo-600 mb-4">
              Outstanding!!
            </h3>

            <p className="text-gray-700 mb-6 leading-relaxed">
              I just wanted to drop you a little email to say thank you for all
              your hard work. I'm delighted I chose you as my partner. Your
              websites are quite simple to edit and maintain, which is
              fantastic.
            </p>

            <div className="flex gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="w-5 h-5 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>

            <div>
              <div className="font-semibold text-gray-900">
                Daniel Lane,{" "}
                <span className="text-gray-500 font-normal">Developer</span>
              </div>
            </div>

            {/* Pagination dots */}
            <div className="flex gap-2 mt-8">
              <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
