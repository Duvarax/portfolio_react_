import React from 'react'
import { proyectos } from '../assets/proyectos';
function Experience() {
  return (
    <div>
        <h2 className='text-center'>Experiencia Laboral</h2>
        <p className='opacity-50 text-center'>Aquí puedes ver algunos de mis proyectos destacados.</p>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5 w-full">
              {proyectos.map(proyecto => (
                <div key={proyecto.id} className="bg-gray-800 p-4 rounded-lg shadow-lg">
                  <img
                    src={proyecto.imageUrl}
                    alt={proyecto.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-xl font-bold mb-2">{proyecto.title}</h3>
                  <p className="text-gray-300">{proyecto.description}</p>
                </div>
              ))}
            </div>
    </div>
  )
}

export default Experience