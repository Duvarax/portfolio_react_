import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router";

function NavBar() {
  const navegar = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const handleNavigation = (sectionId) => {
    if(location.pathname === '/' && sectionId === 'home') {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
      return;
    }
    if (location.pathname !== '/') {
      navegar('/');
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    } else {
      scrollToSection(sectionId);
    }
  };

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navegar('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "Inicio", id: "home" },
    { label: "Estudios", id: "studies" },
    { label: "Proyectos", id: "projects" },
    { label: "Contacto", id: "contact" }
  ];

  return (
    <nav className="bg-transparent w-full max-w-7xl flex items-center md:justify-between z-10 text-white md:px-8 px-4 py-3">
      {/* Logo / Nombre */}
      <h1 
        className="nav-logo tracking-wider hover:drop-shadow-[0_0_10px_rgb(0,195,255)] cursor-pointer hover:scale-103 transition-all duration-300 flex-1 md:flex-0"
        onClick={handleLogoClick}
      >
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
        className={`flex md:flex md:gap-10 gap-6 items-center md:static absolute left-0 right-0 top-13 flex-col md:flex-row md:bg-transparent bg-gray-900/90 rounded-b-lg md:p-0 p-4 ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        {navItems.map((item) => (
          <li
            key={item.id}
            className="relative cursor-pointer md:text-lg transition-all duration-300 hover:text-[rgb(0,195,255)] hover:drop-shadow-[0_0_10px_rgb(0,195,255)] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[rgb(0,195,255)] hover:after:w-full after:transition-all after:duration-300"
            onClick={() => handleNavigation(item.id)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
