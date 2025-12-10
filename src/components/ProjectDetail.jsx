import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router';
import { proyectos } from '../assets/proyectos';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const proyecto = proyectos.find(p => p.id === parseInt(id));

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true
    });
  }, []);

  if (!proyecto) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Proyecto no encontrado</h2>
          <button
            onClick={() => navigate('/')}
            className="bg-[rgb(0,195,255)]/20 hover:bg-[rgb(0,195,255)]/30 border border-[rgb(0,195,255)]/50 text-[rgb(0,195,255)] py-2 px-6 rounded-lg transition duration-300"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      {/* Botón volver */}
      <button
        onClick={() => navigate('/')}
        data-aos="fade-right"
        className="flex items-center gap-2 text-[rgb(0,195,255)] hover:text-white mb-8 transition duration-300"
      >
        <ArrowLeft size={20} />
        Volver
      </button>

      {/* Imagen principal */}
      <div
        data-aos="fade-up"
        className="w-full h-96 rounded-xl overflow-hidden mb-8 border border-[rgb(0,195,255)]/20"
      >
        <img
          src={proyecto.imageUrl}
          alt={proyecto.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenido */}
      <div data-aos="fade-up" data-aos-delay="100" className="space-y-6">
        <h1 className="text-4xl font-bold text-white">{proyecto.title}</h1>

        <p className="text-gray-300 text-lg leading-relaxed">
          {proyecto.description}
        </p>

        {/* Skills */}
        <div>
          <h3 className="text-xl font-semibold text-[rgb(0,195,255)] mb-3">Tecnologías utilizadas</h3>
          <div className="flex gap-3 flex-wrap">
            {proyecto.skills.map((skill, idx) => (
              <span
                key={idx}
                className="bg-[rgb(0,195,255)]/20 border border-[rgb(0,195,255)]/40 text-[rgb(0,195,255)] px-4 py-2 rounded-lg"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        {/* Detalles adicionales */}
        {proyecto.details && (
          <div>
            <h3 className="text-xl font-semibold text-[rgb(0,195,255)] mb-3">Detalles</h3>
            <p className="text-gray-300 leading-relaxed">
              {proyecto.details}
            </p>
          </div>
        )}

        {/* Botones de acción */}
        <div className="flex gap-4 pt-6 border-t border-[rgb(0,195,255)]/20">
          
          {proyecto.github && (
            <a
              href={proyecto.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[rgb(0,195,255)]/20 hover:bg-[rgb(0,195,255)]/30 border border-[rgb(0,195,255)]/50 text-[rgb(0,195,255)] py-3 px-6 rounded-lg transition duration-300 font-semibold"
            >
              <Github size={20} />
              Ver código
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail