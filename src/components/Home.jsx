import React from 'react'
import AboutMe from './AboutMe'
import Projects from './Projects'
function Home() {
  return (
    <div className='flex flex-col items-center justify-center w-full gap-10'>
        <AboutMe/>
        <Projects/>
    </div>
  )
}

export default Home