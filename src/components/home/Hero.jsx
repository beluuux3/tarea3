import React from "react";
import Illustration from "../../images/home/illustration1.png";
import LogosClientes from "./LogosClientes";

export default function Hero() {
  return (
    <>
      <div className="w-full h-screen">
        <div className="items-center">
          <img
            src={Illustration}
            alt="Illustration of people working"
            className="absolute w-[1,122px] h-[450px] left-[798px] drop-shadow-2xl"
          />

          <div className="relative max-w-7xl mx-auto text-center md:text-left  px-4 sm:px-6 lg:px-8 grid grid-cols-1 justify-between items-center h-16">
            <h1 className="mt-25 bg-linear-to-br from-[#C381DB] to-[#4E92F9] bg-clip-text text-transparent text-4xl md:text-5xl lg:text-102 font-bold">
              Bootstrap 5
            </h1>
            <h2 className="text-[#485466] text-3xl mt-2">
              crafted by <span className="font-bold">ThemeWagon</span>
            </h2>

            <p className="text-gray-600 text-sm mb-8 mt-5 max-w-lg mx-auto md:mx-0">
              ThemeWagon offers an wide array of category-oriented Free and
              Premium Bootstrap HTML Templates and Themes.
            </p>

            <button className="w-[10%] bg-linear-to-bl from-[#c381d8] to-[#4e92f9] text-white font-semibold py-1 px-3 rounded-lg shadow-xl">
              Check Demo
            </button>
          </div>
        </div>

        <div className="lg:mt-120 scale-125">
          <LogosClientes></LogosClientes>
        </div>
      </div>
    </>
  );
}
