import React from "react";

function NavBar() {
  return (
    <nav className=" w-full bg-[rgb(0,0,49)] text-white flex justify-between items-center px-8 py-4 ">
      {/* Logo / Nombre */}
      <h1 className="font-bold  tracking-wider hover:drop-shadow-[0_0_10px_rgb(0,195,255)] cursor-pointer hover:scale-103 transition-all duration-300">
        Duvara
      </h1>

      {/* Opciones */}
      <ul className="flex gap-8">
        {["Inicio", "Proyectos", "Estudios", "Noticias", "Contacto"].map(
          (item, i) => (
            <li
              key={i}
              className="relative cursor-pointer text-lg transition-all duration-300 hover:text-[rgb(0,195,255)] hover:drop-shadow-[0_0_10px_rgb(0,195,255)] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[rgb(0,195,255)] hover:after:w-full after:transition-all after:duration-300"
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
