import React from 'react'

import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import portrait from "../assets/portrait.png"


const AboutMe = () => {

  const { t } = useTranslation()

  return (
    <div id='about-me' className='grid items-center bg-primary overflow-hidden border-b-[1px] border-base-content w-full px-8 sm:p-20 py-24 lg:py-48 relative'>


      <div className='z-0'>
        <div className='absolute -top-[100px] -left-[400px] w-[500px] md:w-[1000px] h-[500px] md:h-[1000px] bg-base-100/50 lg:bg-base-100/20 rounded-full blur-3xl'></div>
        <div className='absolute -bottom-[100px] -right-[400px] w-[300px] md:w-[700px] h-[300px] md:h-[700px] bg-base-100/20 lg:bg-base-100/20 rounded-full blur-3xl'></div>
      </div>

      <div className="card lg:card-side bg-base-100 shadow-xl md:max-w-2xl lg:max-w-4xl mx-auto">
        <figure><img src={portrait} alt="Album" className='w-full h-full object-cover'/></figure>
        <div className="card-body">
          <h2 className="card-title text-3xl md:text-4xl">{t('about_me.title')} ✌️</h2>
          <p>{t('about_me.text')}</p>
          <div className="w-full mt-4">
            {/* <Link to="resume">
              <button className="btn btn-primary mt-4 w-full">Resume</button>
            </Link> */}
            <Link to="resume" class="btn btn-primary w-full relative inline-flex items-center justify-center overflow-hidden transition duration-300 ease-out group">
              <span class="absolute inset-0 flex items-center justify-center w-full h-full duration-300 -translate-x-full bg-primary group-hover:translate-x-0 ease">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span class="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease">{t('about_me.button')}</span>
              <span class="relative invisible">{t('about_me.button')}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>

  )
}

export default AboutMe