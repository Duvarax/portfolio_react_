import React from "react";

function AboutMe() {
  return (
    <div className="w-full text-white bg-[rgba(0,0,49,0.35)] p-6 rounded-xl shadow-xl 
                    border border-[rgb(0,195,255)]/10 
                    backdrop-blur-md
                    max-w-3xl mx-auto">

      

      <p className="text-sm md:text-lg leading-relaxed opacity-90">
        Soy <span className="font-semibold text-[rgb(0,195,255)] drop-shadow-[0_0_6px_rgb(0,195,255)]">
          desarrollador de software
        </span> recibido de la tecnicatura en desarrollo de software. 
        Tengo experiencia construyendo soluciones reales para pequeños negocios, 
        incluyendo la integración de <strong className="text-[rgb(0,195,255)]">MercadoPago</strong> y el desarrollo de interfaces 
        para aplicaciones móviles.
        <br /><br />
        Trabajo principalmente con 
        <span className="text-[rgb(0,195,255)] font-semibold"> <span className="text-[#9955cc] drop-shadow-[0_0_6px_rgb(153,85,204)]">.NET</span>, React y <span className="text-yellow-400 drop-shadow-[0_0_6px_rgb(255,255,0)]">Python</span></span>, 
        combinando diseño funcional con una estética moderna y detallada. 
        Me apasiona crear software útil, optimizado y visualmente atractivo.
      </p>
    </div>
  );
}

export default AboutMe;
