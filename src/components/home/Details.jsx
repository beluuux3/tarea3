import React from "react";
import Illus1 from "../../images/details/illustration1.png";
import Illus2 from "../../images/details/illustration2.png";
import Illus3 from "../../images/details/illustration3.png";
import Illus6 from "../../images/details/illustration6.png";

export default function Details() {
  return (
    <section className="relative overflow-hidden py-20 max-w-7xl mx-auto">
      <img
        src={Illus1}
        alt="bg green"
        className="pointer-events-none absolute -left-20 top-8 w-64 "
      />
      <img
        src={Illus2}
        alt="bg orange"
        className="pointer-events-none absolute -right-20 bottom-8 w-64 "
      />

      <div className="px-4 lg:mx-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-24">
          <div className="flex justify-center lg:justify-start">
            <div className="imag1 p-6">
              <div className="w-72 h-72 lg:w-100 lg:h-100 ">
                <img
                  src={Illus3}
                  alt="detail image 3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="text-left lg:pl-12">
            <h3 className="text-2xl text-gray-700 font-bold mb-4">
              A creative team which builds stunning UI/UX
            </h3>
            <p className="text-gray-600 mb-6 text-[14px]">
              Today, I'd like to show you some incredible Sign Up screen app UI
              ideas and concepts that offer a modern user experience. The most
              stunning, cutting-edge UI/UX.
            </p>
            <p className="text-gray-600 mb-6 text-[14px]">
              Klean is a free Bootstrap 5 template for multipurpose landing
              pages. This design is a perfect choice, carefully curated by
              <span className="font-semibold"> ThemeWagon.</span>
            </p>
            <button className="px-4 py-2 border rounded-md text-indigo-700">
              Read More
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2  lg:order-1 lg:pr-12">
            <h3 className="text-2xl text-gray-700 font-bold mb-4">
              Devoted to defining the cutting edge
            </h3>
            <p className="text-gray-600 mb-4 text-[14px]">
              "This new creation is cutting-edge technology," says the
              researcher, "whose study originates from a business at the
              forefront of space science."
            </p>
            <p className="text-gray-600 mb-4 text-[14px]">
              Klean is a free Bootstrap 5 template for multipurpose landing
              pages. This design is a perfect choice, carefully curated by
              <span className="font-semibold"> ThemeWagon.</span>
            </p>
            <button className="px-4 py-2 border rounded-md text-indigo-700">
              Read More
            </button>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="p-6 imag2">
              <div className="w-72 h-72 lg:w-100 lg:h-100 ">
                <img
                  src={Illus6}
                  alt="detail image 6"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
