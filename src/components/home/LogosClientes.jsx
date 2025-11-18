import React from "react";
import Logo1 from "../../images/home/google.png";
import Logo2 from "../../images/home/netflix.png";
import Logo3 from "../../images/home/microsoft.png";
import Logo4 from "../../images/home/mailbuster.png";
import Logo5 from "../../images/home/themewagon.png";

export default function LogosClientes() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 md:mt-28 relative z-10">
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-70">
          <img src={Logo1} alt="Google Logo" className="h-7"></img>
          <img src={Logo2} alt="Netflix Logo" className="h-7"></img>
          <img src={Logo3} alt="Microsoft Logo" className="h-7"></img>
          <img src={Logo4} alt="Mailbuster Logo" className="h-7"></img>
          <img src={Logo5} alt="Themewagon Logo" className="h-7"></img>
        </div>
      </div>
    </>
  );
}
