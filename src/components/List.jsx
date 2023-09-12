import React from 'react'
import { useState, useEffect } from 'react'

import { motion } from "framer-motion"
import { useTranslation } from 'react-i18next'

import { CheckBadgeIcon, ArrowRightCircleIcon } from '@heroicons/react/24/solid'

import growDark from '../assets/value=growing, color=negativ.svg'
import growLight from '../assets/value=growing, color=positiv.svg'

const List = ({theme}) => {

  const { t } = useTranslation()

  const [vpWidth, setVpWidth] = useState(window.innerWidth)

  useEffect( () => {
    const handleResize = () => {
      setVpWidth(window.innerWidth)
    }

    addEventListener('resize', handleResize)

    return () => {
      removeEventListener('resize', handleResize)
    }

  } )

  const keyPoints = {
    you: [
      {
        id: 1,
        point: t("list.keyPoints.keyPoints_accent.p1")
      },
      {
        id: 2,
        point: t("list.keyPoints.keyPoints_accent.p2")
      },
      {
        id: 3,
        point: t("list.keyPoints.keyPoints_accent.p3")
      },
      {
        id: 4,
        point: t("list.keyPoints.keyPoints_accent.p4")
      },
      {
        id: 5,
        point: t("list.keyPoints.keyPoints_accent.p5")
      },
    ],

    me: [
      {
        id: 1,
        point: t("list.keyPoints.keyPoints_secondary.p1")
      },
      {
        id: 2,
        point: t("list.keyPoints.keyPoints_secondary.p2")
      },
      {
        id: 3,
        point: t("list.keyPoints.keyPoints_secondary.p3")
      },
      {
        id: 4,
        point: t("list.keyPoints.keyPoints_secondary.p4")
      },
      {
        id: 5,
        point: t("list.keyPoints.keyPoints_secondary.p5")
      },
    ]
  }

  return (


    <motion.section
      className='w-full overflow-hidden bg-base-100'
      id='list-section'
      initial={{opacity: 0}}
      whileInView={{opacity:1}}
      transition={{delay: 0.1, duration: 0.5, ease: 'easeIn'}}
      // viewport={{once: true}}
    >
      {/* Background */}
        {/* Background Pattern */}
      {/* <div className='w-screen h-screen absolute top-0 left-0 z-0 bg-blend-multiply'>
        <div className='aspect-1 h-[65vh] xl:h-[80vh] bg-accent/10 rounded-full blur-3xl absolute -top-20 -left-20'></div>
        <div className='aspect-1 h-[35vh] lg:h-[50vh] xl:h-[80vh] bg-secondary/10 rounded-full blur-3xl absolute -bottom-20 -right-20'></div>
      </div> */}

      <div className='flex flex-col 2xl:flex-row items-center justify-center 2xl:gap-16 px-8 py-24 md:mt-8'>
        {/* Illustration */}
        <div className='w-[250px] md:w-[300px] lg:w-[400px] mb-12'>
          <img src={theme == 'dark' ? growDark : growLight} alt="growing" className='object-contain lg:my-auto'/>
        </div>

        {/* List Wrapper Mobile */}
        
        {vpWidth > 768 ? (
          <div className='w-full max-w-md md:max-w-2xl lg:max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 justify-center items-center text-accent-content'>

            {/* List Left */}
            <div className="w-full flex flex-col justify-center items-center gap-4 z-10">
                  {/* Title */}
                  <h3 className='text-2xl font-bold'>{t('list.title.title_accent')}</h3>
                  {keyPoints.you.map( point => (
                    <div key={point.id} className='w-full flex gap-4 items-center bg-accent/50 backdrop-blur-md border border-1 border-accent drop-shadow-lg rounded-md p-2'>
                      <CheckBadgeIcon className='self-center h-8 w-8 text-accent-content' />
                      <p className='text-xl'>{point.point}</p>
                    </div>
                  ) )}
            </div>

            {/* List Right */}
            <div className="w-full flex flex-col gap-4 items-center">
                  {/* Title */}
                  <h3 className='text-2xl font-bold'>{t('list.title.title_secondary')}</h3>
                  {keyPoints.me.map( point => (
                    <div key={point.id} className='w-full flex gap-4 items-center bg-secondary/25 backdrop-blur-md border border-1 border-secondary drop-shadow-lg rounded-md p-2'>
                      <ArrowRightCircleIcon className='self-center h-8 w-8 text-secondary-focus' />
                      <p className='text-xl'>{point.point}</p>
                    </div>
                  ) )}
            </div>

          </div>
          ) : (
            <div className='flex flex-col gap-4 w-full'>
              {/* List 1 */}
              <details className="collapse collapse-arrow bg-accent">
                <summary className={`collapse-title ${vpWidth < 378 ? 'text-[1.1rem]' : 'text-xl'} font-medium text-accent-content`}>{t('list.title.title_accent')}</summary>
                <div className="collapse-content text-accent-content"> 
                  <div className="w-full flex flex-col justify-center items-center gap-4 z-10">
                        {keyPoints.you.map( point => (
                          <div key={point.id} className='w-full flex gap-4 items-center'>
                            <CheckBadgeIcon className='self-center h-8 w-8' />
                            <p className='text-xl'>{point.point}</p>
                          </div>
                        ) )}
                  </div>
                </div>
              </details>

              {/* List 2 */}
              <details className="collapse collapse-arrow bg-secondary">
                <summary className={`collapse-title ${vpWidth < 378 ? 'text-[1.1rem]' : 'text-xl'} font-medium text-secondary-content`}>{t('list.title.title_secondary')}</summary>
                <div className="collapse-content text-secondary-content"> 
                  <div className="w-full flex flex-col justify-center items-center gap-4 z-10">
                        {keyPoints.me.map( point => (
                          <div key={point.id} className='w-full flex gap-4 items-center'>
                            <CheckBadgeIcon className='self-center h-8 w-8 text-secondary-content' />
                            <p className='text-xl'>{point.point}</p>
                          </div>
                        ) )}
                  </div>
                </div>
              </details>



            </div>
          )
        }
        {/* List Wrapper */}

      </div>
    </motion.section>

  )
}

export default List


