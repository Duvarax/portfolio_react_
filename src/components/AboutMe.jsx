import React, { useEffect } from "react";
import person from "../assets/person.webp";
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutMe() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true
    });
  }, []);

  return (
    <div 
      data-aos="fade-up"
      className="flex flex-col md:flex-row items-center gap-10 w-full text-white bg-[rgba(0,0,49,0.55)] p-6 rounded-xl shadow-xl 
                    border border-[rgb(0,195,255)]/20 
                    backdrop-blur-md
                    md:max-w-4xl mx-auto"
    >
      
      <img 
        data-aos="fade-right"
        data-aos-delay="100"
        className="md:w-150 md:h-50 w-70 h-auto rounded-2xl" 
        src={person} 
        alt="Claudio Duvara" 
      />
      <p 
        data-aos="fade-left"
        data-aos-delay="200"
        className="text-sm md:text-lg leading-relaxed opacity-90"
      >
        Soy <span className="font-bold">Claudio Duvara</span> un <span className="font-semibold text-[rgb(0,195,255)] drop-shadow-[0_0_6px_rgb(0,195,255)]">
          desarrollador de software
        </span> recibido de la tecnicatura en desarrollo de software. 
        Tengo experiencia construyendo soluciones reales para pequeños negocios, 
        incluyendo la integración de <strong className="text-[rgb(0,195,255)]">MercadoPago</strong> y el desarrollo de interfaces 
        para aplicaciones móviles.
        <br /><br />
        Trabajo principalmente con 
        <span className="text-[rgb(0,195,255)] font-semibold"> <span className="text-[#9955cc] drop-shadow-[0_0_6px_rgb(153,85,204)]">.NET</span>, <span className="text-[rgb(0,195,255)] drop-shadow-[0_0_6px_rgb(0,195,255)]">React</span>  y <span className="text-yellow-400 drop-shadow-[0_0_6px_rgb(255,255,0)]">Python</span></span>, 
        combinando diseño funcional con una estética moderna y detallada. 
        Me apasiona crear software útil, optimizado y visualmente atractivo.
      </p>
    </div>
  );
}

export default AboutMe;
