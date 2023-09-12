import React from 'react'
import {useEffect, useState} from 'react'

import rocketLight from '../assets/value=rocket, color=negativ.svg'
import rocketDark from '../assets/value=rocket, color=positiv.svg'

const Hero = ({theme}) => {

  const handleClickScroll = () => {
    const element = document.getElementById('list-section')
    if (element) {
      element.scrollIntoView({behavior: "smooth"})
    }
  }

  const viewportHeight = window.innerHeight

  return (
    <div id='hero' className="hero min-h-screen bg-base-300 z-5 relative border-b-[1px] border-base-content">
        {/* Background Pattern */}
        {/* <div className='w-screen h-screen relative z-0 bg-blend-multiply'>
          <div className='aspect-1 h-full bg-primary/10 rounded-full blur-3xl m-auto'></div>
          <div className='aspect-1 h-[65vh] xl:h-[80vh] bg-accent/10 rounded-full blur-3xl absolute -top-20 -left-20'></div>
          <div className='aspect-1 h-[35vh] lg:h-[50vh] xl:h-[80vh] bg-accent/10 rounded-full blur-3xl absolute -bottom-20 -right-20'></div>
        </div> */}

        {/* Content */}
        <div className="hero-content flex-col xl:flex-row gap-8 xl:gap-16">
            {/* Image */}
            <div>
                <img src={theme == "dark" ? rocketLight : rocketDark} alt="rocket" className="object-contain w-[250px] sm:w-[300px] xl:w-[500px]" />
            </div>
            {/* Text */}
            <div className='flex flex-col items-center xl:items-start gap-4 xl:gap-8 text-center xl:text-start'>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold">Ihr sucht mich?<br/>Ich euch auch!</h1>
              <p className="max-w-md">Für neue Möglichkeiten braucht es Veränderung. Deshalb suche ich Euch um digital durchzustarten.</p>
              <button onClick={handleClickScroll} className="btn btn-primary">Let's go!</button>
            </div>
        </div>
    </div>
  )
}

export default Hero