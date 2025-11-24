import React, {useState} from 'react'
import Proyectos from './ProjectsGrid'
import Skills from './Skills'

function Projects() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  return (
    <div className='max-w-5xl text-white flex flex-col items-center justify-center gap-2'>
        <h2 className='hover:drop-shadow-[0_0_10px_rgb(0,195,255)] transition-shadow duration-500'>Mis Proyectos</h2>
        <p className='opacity-50'>Skills</p>
        <Skills selectedSkill={selectedSkill} setSelectedSkill={setSelectedSkill}/>
        <Proyectos selectedSkill={selectedSkill}/>
    </div>
  )
}

export default Projects