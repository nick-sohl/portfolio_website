import React from 'react'

import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import {TiWeatherPartlySunny} from 'react-icons/ti'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {BsFillMenuAppFill} from 'react-icons/bs'
import {BsCardChecklist} from 'react-icons/bs'
import {LiaSyncAltSolid} from 'react-icons/lia'

import { t } from 'i18next'

const ProjectsTable = ({theme}) => {

   const projects = [
      {
         project: {
            icon: "AG",
            title: t('projects.table.p1'),
            link: "https://agrons-birthday.ch/",
            datatip: "AG 40",
            target: "_blank"
         },
      },
      {
         project: {
            icon: <TiWeatherPartlySunny size={35} />,
            title: t('projects.table.p2'),
            link: "weather-app",
            datatip: t('projects.table.p2')
         },
      },
      {
         project: {
            icon: <AiOutlineShoppingCart size={35} />,
            title: t('projects.table.p3'),
            link: "ecommerce-shop",
            datatip: t('projects.table.p3')
         },
      },
      {
         project: {
            icon: <BsFillMenuAppFill size={35} />,
            title: t('projects.table.p4'),
            link: "projects/restaurant_menu/index.html",
            datatip: t('projects.table.p4'),
            target: "_blank"
         },
      },
      {
         project: {
            icon: <BsCardChecklist size={35} />,
            title: t('projects.table.p5'),
            link: "todo-list",
            datatip: t('projects.table.p5')
         },
      },
      {
         project: {
            icon: <LiaSyncAltSolid size={35} />,
            title: t('projects.table.p6'),
            link: "ajax",
            datatip: t('projects.table.p6')
         },
      }
   ]

  return (

    // Container
    <div className='bg-accent/50 text-base-100 backdrop-blur-xl shadow-2xl border-[1px] border-white/20 rounded-xl relative overflow-hidden text-center z-40'>

      {projects.map( (project, index) => (
        <div key={index} className={`grid grid-cols-3 justify-between projects-center p-4 hover:bg-base-100 ${theme == 'dark' ? 'hover:text-white' : 'hover:text-black'} hover:shadow-xl hover:shadow-primary/10`}>

            {/* Icon */}
            <div className='tooltip tooltip-bottom tooltip-accent justify-self-start' data-tip={project.project.datatip}>
                <button className='btn btn-primary text-base-100 w-[50px] h-[50px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px] m-0 p-0 aspect-square text-2xl'>{project.project.icon}</button>
           </div>

            {/* Project Name */}
            <div className='flex justify-center items-center'>
               <h3 className="text-sm md:text-lg xl:text-xl" >{project.project.title}</h3>
            </div>

            {/* Button */}
           <Link to={project.project.link} target={project.project.target} className='justify-self-end self-center'>
            <div>
            <p class="relative inline-flex items-center justify-center p-4 px-3 py-3 overflow-hidden font-medium text-primary transition duration-300 ease-out border-2 border-primary rounded-lg group">
               <span class="absolute inset-0 flex items-center justify-center w-full h-full text-base-100 duration-300 -translate-x-full bg-primary group-hover:translate-x-0 ease">
               <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
               </span>
               <span class="absolute flex items-center justify-center w-full h-full text-primary transition-all duration-300 transform group-hover:translate-x-full ease">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
               </span>
               <span class="relative invisible">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
               </span>
               </p>
            </div>
           </Link>
        </div>
       ) )}

    </div>
  )
}

export default ProjectsTable