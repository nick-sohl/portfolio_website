import React from 'react'

import { useTranslation } from 'react-i18next'

import ProjectsTable from './ProjectsTable'

import {AiFillGithub} from 'react-icons/ai'

import workingLight from '../assets/value=working, color=negativ.svg'
import workingDark from '../assets/value=working, color=positiv.svg'

const viewportHeight = window.innerHeight

const Projects = ({theme}) => {

  const { t } = useTranslation()

  return (
    <div id='projects' className='grid justify-center items-center bg-accent relative border-b-[1px] border-base-content'>

      {/* BG Circles */}
      {/* <div className='mix-blend-multiply'>
        <div className='w-[500px] lg:w-[1200px] h-[500px] lg:h-[1200px] bg-primary/20 rounded-full blur-3xl absolute -top-[50px] lg:-top-[500px] -left-[300px] lg:-left-[1000px] z-0'></div>
        <div className='w-[500px] lg:w-[1200px] h-[500px] lg:h-[1200px] bg-primary/20 rounded-full blur-3xl absolute -bottom-[50px] lg:-bottom-[500px] -right-[300px] lg:-right-[1000px] z-0'></div>
      </div> */}

      <div className='px-8 md:px-16 lg:px-24 py-24 max-w-screen-4xl grid lg:grid-cols-2 gap-16 relative text-center lg:text-start items-center'>

        <div>
          {/* Illustration */}
          <div className='flex justify-center lg:justify-start z-40'>
            <img src={theme == 'dark' ? workingDark : workingLight} alt="working" className='w-[250px] md:w-[300px] lg:w-[400px] object-contain' />
          </div>

          {/* Text */}
          <div className='mt-12 z-40'>
            <h1 className='text-3xl md:text-4xl font-bold mb-2 text-base-100'>{t('projects.title')}</h1>
            <p className='text-base-100 max-w-xl'>
              {t('projects.text')}
            </p>
          </div>

          {/* GitHub */}
          <div className='lg:flex gap-4 items-center mt-8'>
            <div className="tooltip tooltip-primary mb-4 lg:mb-0" data-tip="GitHub">
              <a href='https://github.com/nick-sohl' target="_blank">
                <button className="btn bg-base-100/75 backdrop-blur-xl shadow-xl text-4xl p-0 aspect-1">
                  <AiFillGithub />
                </button>
              </a>
            </div>
            <p className='text-2xl text-base-100/75'>{t('projects.github')}</p>
          </div>

        </div>

        <div>
          {/* Table */}
          <ProjectsTable
            theme={theme}
          />

        </div>

      </div>

    </div>

  )
}

export default Projects