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
           <button className='text-white cursor-pointer bg-[rgb(0,195,255)]/20 hover:bg-[rgb(0,195,255)]/30 border border-[rgb(0,195,255)]/50 text-[rgb(0,195,255)] py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transition duration-300'
  onClick={() => {
    window.location.href = "mailto:duvaraclaudiojavier@gmail.com?subject=Hola&body=Mensaje acá";
  }}
>
  Enviar correo
</button>
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