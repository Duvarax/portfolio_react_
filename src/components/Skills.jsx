import React from 'react'
import { skills } from '../assets/skills'


function Skills({ selectedSkill, setSelectedSkill }) {
  return (
    <div>
        <ul className='flex gap-5 flex-wrap items-center justify-center'>
            {skills.map((skill, index) => (
                <li 
                  key={index} 
                  onClick={() => { if (selectedSkill === index) { setSelectedSkill(null); } else { setSelectedSkill(index); } }}
                  className={`md:w-20 md:h-20 flex flex-col items-center gap-2 mb-2 border backdrop-blur-md px-5 py-3 cursor-pointer rounded-lg transition-all duration-300 
                    ${selectedSkill === index 
                      ? 'border-[rgb(0,195,255)] bg-[rgb(0,195,255)]/30 shadow-[0_0_15px_rgb(0,195,255)] scale-110' 
                      : 'border-[rgb(0,195,255)]/20 hover:border-[rgb(0,195,255)]/40 hover:scale-105'
                    }`}
                >
                    <img src={skill.icon} alt={skill.name} className="w-6 h-6"/>
                    <span className="text-white text-sm">{skill.name}</span>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Skills