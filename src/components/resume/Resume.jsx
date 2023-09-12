import React from 'react'

// Components
import Card from './Card'
import Work from './Work'
import Experience from './Experience'
import Education from './Education'
import Languages from './Languages'
import Hobbys from './Hobbys'
import Details from './Details'

const Resume = () => {

  return (
    <div id='resume' className='max-w-4xl m-auto py-24 px-8 flex flex-col gap-4 md:gap-8'>
        <Card />
        <Details />
        <Experience />
        <Work />
        <Education />
        <Languages />
        <Hobbys />
    </div>
  )
}

export default Resume