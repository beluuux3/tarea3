import React from "react";

export default function Nav() {
  const navLinks = [
    { name: "Home", path: "#" },
    { name: "Services", path: "#services" },
    { name: "Projects", path: "#projects" },
    { name: "Blog", path: "#blog" },
    { name: "Contact", path: "#contact" },
  ];

  const handleScroll = (e, path) => {
    e.preventDefault();
    if (path === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <>
      <header className="sticky w-full z-50 bg-white shadow-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <div className="text-xl font-bold text-indigo-700">Klean</div>

          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => handleScroll(e, link.path)}
                className="text-gray-600 hover:text-indigo-700 font-medium transition duration-300 relative 
                 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 
                 after:bg-indigo-700 after:transition-transform after:duration-300 after:scale-x-0 hover:after:scale-x-100"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex space-x-4">
            <button className="text-indigo-700 font-medium px-4 py-1.5 rounded-lg transition duration-300 hover:bg-indigo-50">
              Log In
            </button>
            <button className="bg-indigo-700 text-white font-medium px-4 py-1.5 rounded-lg shadow-md transition duration-300 hover:bg-indigo-800">
              Sign Up
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}
