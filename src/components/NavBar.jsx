import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full max-w-7xl flex items-center md:justify-between sticky top-0 z-10 text-white md:px-8 md:py-4 px-4 py-3">
      {/* Logo / Nombre */}
      <h1 className="font-mono  tracking-wider hover:drop-shadow-[0_0_10px_rgb(0,195,255)] cursor-pointer hover:scale-103 transition-all duration-300 sm:flex-1 md:flex-0">
        Duvara
      </h1>

      {/* Botón acordeón - Solo visible en móvil */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white hover:text-[rgb(0,195,255)] transition-colors duration-300 ml-auto"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Opciones */}
      <ul
        className={`flex md:flex md:gap-10 gap-6 items-center md:static absolute left-0 right-0 top-16 flex-col md:flex-row md:bg-transparent bg-gray-900/90 rounded-b-lg md:p-0 p-4 ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        {["Inicio", "Proyectos", "Estudios", "Contacto"].map(
          (item, i) => (
            <li
              key={i}
              className="relative cursor-pointer md:text-lg transition-all duration-300 hover:text-[rgb(0,195,255)] hover:drop-shadow-[0_0_10px_rgb(0,195,255)] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[rgb(0,195,255)] hover:after:w-full after:transition-all after:duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </li>
          )
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
