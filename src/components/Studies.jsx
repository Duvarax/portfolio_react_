import React from 'react'

function Studies() {
  const studies = [
    {
      title: "Tecnicatura en Desarrollo de Software",
      institution: "Universidad de la Punta",
      year: "2021 - 2025",
      description: "Formación completa en desarrollo de software con enfoque en tecnologías modernas y prácticas profesionales."
    },
    {
      title: "Técnico Electrónico",
      institution: "Colegio Técnico Fray Luis Beltrán",
      year: "Completado",
      description: "Educación técnica en electrónica con bases en sistemas digitales y circuitos."
    }
  ];

  return (
    <div className="w-full px-4">
      <h2 className="text-3xl font-bold text-center text-white ">Estudios</h2>
      <p className='text-center opacity-50 mb-8'> Aqui puedes ver mis estudios</p>
      <div className="grid gap-6">
        {studies.map((study, i) => (
          <div 
            key={i} 
            className="bg-[rgba(0,0,49,0.55)] p-6 rounded-xl border border-[rgb(0,195,255)]/20 backdrop-blur-md hover:border-[rgb(0,195,255)]/40 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-[rgb(0,195,255)] drop-shadow-[0_0_6px_rgb(0,195,255)]">
              {study.title}
            </h3>
            <p className="text-gray-300 mt-2">{study.institution}</p>
            <p className="text-sm text-gray-400 mt-1">{study.year}</p>
            <p className="text-gray-200 mt-3 leading-relaxed opacity-50">{study.description}</p>
          </div>
        ))}
        
      </div>
      
    </div>
  )
}

export default Studies