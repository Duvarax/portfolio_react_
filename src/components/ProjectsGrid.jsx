import React, { useEffect } from 'react'
import { proyectos } from '../assets/proyectos';
import { ExternalLink, Github } from 'lucide-react';
import { skills } from '../assets/skills';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router';

function ProjectsGrid({ selectedSkill }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true
    });
    AOS.refresh();
  }, [selectedSkill]);

  const filteredProyectos = selectedSkill !== null 
    ? proyectos.filter(proyecto => 
        proyecto.skills.some(skill => skill.name === skills[selectedSkill].name)
      )
    : proyectos;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 w-full">
      {filteredProyectos.length > 0 ? (
        filteredProyectos.map((proyecto, idx) => (
          <Link 
            to={`/proyecto/${proyecto.id}`}
            key={proyecto.id}
            data-aos="fade-up"
            data-aos-delay={idx * 100}
            className="bg-[rgba(0,0,49,0.55)] border border-[rgb(0,195,255)]/20 backdrop-blur-md cursor-pointer p-0
                       rounded-xl shadow-xl hover:border-[rgb(0,195,255)]/40 hover:shadow-[0_0_20px_rgba(0,195,255,0.2)]
                       transform transition duration-300 overflow-hidden group block"
          >
            {/* Imagen */}
            <div className="relative overflow-hidden h-48">
              <img
                src={proyecto.imageUrl}
                alt={proyecto.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
            </div>

            {/* Contenido */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[rgb(0,195,255)] transition duration-300">
                {proyecto.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {proyecto.description}
              </p>

              {/* Skills */}
              <div className="flex gap-2 mb-4 flex-wrap">
                {proyecto.skills.map((skill, idx) => (
                  <span key={idx} className="text-xs bg-[rgb(0,195,255)]/10 text-[rgb(0,195,255)] px-2 py-1 rounded">
                    {skill.name}
                  </span>
                ))}
              </div>

              {/* Botones */}
              <div className="flex gap-3 pt-4 border-t border-[rgb(0,195,255)]/10">
                {proyecto.link && (
                  <a
                    href={proyecto.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-[rgb(0,195,255)]/10 hover:bg-[rgb(0,195,255)]/20 
                               text-[rgb(0,195,255)] py-2 rounded-lg transition duration-300 text-sm font-semibold"
                  >
                    <ExternalLink size={16} />
                    Ver
                  </a>
                )}
                {proyecto.github && (
                  <a
                    href={proyecto.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-[rgb(0,195,255)]/10 hover:bg-[rgb(0,195,255)]/20 
                               text-[rgb(0,195,255)] py-2 rounded-lg transition duration-300 text-sm font-semibold"
                  >
                    <Github size={16} />
                    Código
                  </a>
                )}
              </div>
            </div>
          </Link>
        ))
      ) : (
        <div className="col-span-full text-center py-12" data-aos="fade">
          <p className="text-gray-400 text-lg">No hay proyectos con esta tecnología</p>
        </div>
      )}
    </div>
  );
}

export default ProjectsGrid;
