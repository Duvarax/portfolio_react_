import React from 'react'
import imagen1 from "../assets/imagen1.jpg";

const proyectos = [
    { id: 1, title: 'Proyecto Uno', description: 'Descripción del proyecto uno.', imageUrl: imagen1 },
    { id: 2, title: 'Proyecto Dos', description: 'Descripción del proyecto dos.', imageUrl: imagen1 },
    { id: 3, title: 'Proyecto Tres', description: 'Descripción del proyecto tres.', imageUrl: imagen1 },
    { id: 4, title: 'Proyecto Cuatro', description: 'Descripción del proyecto cuatro.', imageUrl: imagen1 },
]

function ProjectsGrid() {
  return (
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
  );
}

export default ProjectsGrid;
