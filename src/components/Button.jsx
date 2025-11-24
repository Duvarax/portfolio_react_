import { ArrowBigDownIcon } from 'lucide-react';
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Button({handleClick, text }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true
    });
  }, []);

  if (!handleClick) {
   return null; 
  }

  return (
    <button
      onClick={handleClick}
      data-aos="zoom-in"
      data-aos-delay="300"
      className="bg-[rgb(0,0,75)] hover:bg-[rgba(0,0,105,0.51)] cursor-pointer border border-[rgb(0,195,255)]/20 text-white 
                    backdrop-blur-md font-semibold py-2 px-4 rounded shadow-md 
                 hover:shadow-lg transition-all duration-300"
    >
      {text}<ArrowBigDownIcon className='inline-block ml-1' size={20}/>
    </button>
  )
}

export default Button