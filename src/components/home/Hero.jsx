import React from "react";
import Illustration from "../../images/home/illustration1.png";
import LogosClientes from "./LogosClientes";

export default function Hero() {
  return (
    <>
      <div className="w-full">
        <div className="items-center">
          <img
            src={Illustration}
            alt="Illustration of people working"
            className="absolute w-[1,122px] h-[596px] left-[798px] drop-shadow-2xl"
          />

          <div className="relative max-w-7xl mx-auto text-center md:text-left  px-4 sm:px-6 lg:px-8 grid grid-cols-1 justify-between items-center h-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
              Bootstrap 5 theme <br className="" />
              <span className="text-accent-purple">crafted by ThemeWagon</span>
            </h1>

            <p className="text-gray-600 text-lg mb-8 max-w-lg mx-auto md:mx-0">
              ThemeWagon offers an wide array of category-oriented Free and
              Premium Bootstrap HTML Templates and Themes.
            </p>

            {/* Botón Principal */}
            <button className="bg-linear-to-bl from-[#c381d8] to-[#4e92f9] text-white font-semibold py-3 px-8 rounded-lg shadow-xl">
              Check Demo
            </button>
          </div>

          <LogosClientes></LogosClientes>
        </div>
      </div>
    </>
  );
}
