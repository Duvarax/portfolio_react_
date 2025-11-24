import React from 'react'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Experience from './Experience'
import Button from './Button'
import Studies from './Studies'
import Contact from './Contact'

function Home() {
  return (
    <div className='flex flex-col items-center justify-center w-full gap-10'>
        <div id="home">
          <AboutMe/>
        </div>
        <Button text="Descargar CV" handleClick={() => {
            window.open('/CV_Duvara.pdf', '_blank');
          }}/>
           
        <div id='studies'>
          <Studies/>
        </div>
        <div id="projects">
          <Projects/>
        </div>
        {/* <div id="experience">
          <Experience/>
        </div> */}
        <div id='contact'>
          <Contact/>
        </div>
    </div>
  )
}

export default Home