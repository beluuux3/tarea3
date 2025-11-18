import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "News", path: "/news" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <>
      <header className="sticky w-full z-50 bg-white shadow-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          {/* Logo/Nombre del Sitio (Ajusta el texto según el Figma) */}
          <div className="text-xl font-bold text-indigo-700">Klean</div>

          {/* Links de Navegación (Desktop) */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                // Estilos base de Tailwind
                className={({ isActive }) =>
                  `text-gray-600 hover:text-indigo-700 font-medium transition duration-300 relative 
                 ${
                   isActive
                     ? "text-indigo-700 font-bold after:scale-x-100" // Estilo activo
                     : "after:scale-x-0" // Estilo inactivo
                 }
                 // Implementación de la animación (Opcional):
                 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 
                 after:bg-indigo-700 after:transition-transform after:duration-300 hover:after:scale-x-100`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Botones de Acción */}
          <div className="hidden md:flex space-x-4">
            <button className="text-indigo-700 font-medium px-4 py-1.5 rounded-lg transition duration-300 hover:bg-indigo-50">
              Log In
            </button>
            <button className="bg-indigo-700 text-white font-medium px-4 py-1.5 rounded-lg shadow-md transition duration-300 hover:bg-indigo-800">
              Sign Up
            </button>
          </div>

          {/* Menú Hamburguesa (Mobile - Implementación omitida por brevedad, pero necesaria para responsividad) */}
          {/* ... */}
        </nav>
      </header>
    </>
  );
}
