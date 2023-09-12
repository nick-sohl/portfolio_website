import React from 'react'

import { useTranslation } from 'react-i18next'

import resumeDark from '../assets/value=resume, color=negativ.svg'
import resumeLight from '../assets/value=resume, color=positiv.svg'
import mapDark from '../assets/journey-map_dark.svg'
import mapLight from '../assets/journey-map_light.svg'

const Roadmap = ({theme}) => {

  const { t } = useTranslation()
  
  return (
    <section className="bg-base-300 overflow-hidden border-b-[1px] border-base-content px-8 py-16 md:py-32 flex">

      {/* BG Circles */}
      {/* <div className={`${theme === 'dark' ? 'mix-blend-lighten' : 'mix-blend-multiply' }`}>
        <div className='w-[500px] lg:w-[1500px] h-[500px] lg:h-[1200px] bg-primary/10 rounded-full blur-3xl absolute -top-[50px] lg:-top-[500px] -left-[300px] lg:-left-[800px] z-0'></div>

        <div className='w-[800px] lg:w-[1200px] h-[800px] lg:h-[1200px] bg-accent/10 rounded-full blur-3xl absolute left-0 right-0 top-0 bottom-0 z-0'></div>

        <div className='w-[500px] lg:w-[1200px] h-[500px] lg:h-[1200px] bg-primary/10 rounded-full blur-3xl absolute -bottom-[50px] lg:-bottom-[500px] -right-[300px] lg:-right-[800px] z-0'></div>
      </div> */}

      <div className="gap-24 items-center mx-auto max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl lg:grid lg:grid-cols-2">
          <div className='flex flex-col items-center lg:items-start'>
              <img src={theme == "dark" ? resumeDark : resumeLight} alt="resume" className='w-[250px] md:w-[300px] lg:w-[350px] mb-10' />
              <h2 className="mb-4 text-3xl md:text-4xl font-extrabold text-center lg:text-start">
                {t('roadmap.title')}
              </h2>
              <p className="mb-4 text-base max-w-xl text-center lg:text-start ">
                {t('roadmap.text')}
              </p>
          </div>
          <div className="order-first">
              <img className="w-full rounded-lg max-h-[700px]" src={theme == "dark" ? mapDark : mapLight} alt="digital roadmap" />
          </div>
      </div>
    </section>
  )
}

export default Roadmap