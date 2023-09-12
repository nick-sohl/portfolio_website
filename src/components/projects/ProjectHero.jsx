import React from 'react'

const ProjectHero = (props) => {

  const headline = props.title

  return (
    <div className='relative mb-8'>
        <h1 className='text-4xl lg:text-6xl font-bold text-center relative z-40'>{headline}</h1>
    </div>
  )
}

export default ProjectHero