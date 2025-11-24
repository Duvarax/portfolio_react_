import React from 'react'
import Proyectos from './ProjectsGrid'
function Projects() {
  return (
    <div className='max-w-5xl text-white flex flex-col items-center justify-center gap-2'>
        <h2 className='hover:drop-shadow-[0_0_10px_rgb(0,195,255)] transition-shadow duration-500'>Mis Proyectos</h2>
        <p className='opacity-50'>Aquí puedes ver algunos de mis proyectos destacados.</p>
        <Proyectos/>
    </div>
  )
}

export default Projects