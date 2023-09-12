import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import Profile from './Profile'

// Images
import portrait from '/src/assets/portrait_2.jpg'
import portrait_mobile from '/src/assets/portrait_2_mobile.jpg'

const Card = () => {

  const { t } = useTranslation()

  const [viewportWidth, setViewportWidth] = useState(window.innerWidth)

  useEffect( () => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }

  } )


  return (
    <div>
      {/* Card */}
      <div className='shadow-xl rounded-2xl bg-base-100 grid grid-cols-1 md:grid-cols-6 overflow-hidden'>

        {/* Portrait */}
        <div className='col-span-2'>
          <img src={viewportWidth < 768 ? portrait_mobile : portrait} alt="" className='object-cover w-full h-full' />
        </div>

        {/* Text */}
        <div className='p-6 flex flex-col gap-8 col-span-4'>
          <div className='flex flex-col gap-4 text-center md:text-start'>
            {/* Title */}
            <h3 className='text-xl font-bold'>{t('resume.intro.title')}</h3>
            {/* Text */}
            <p className='text-base'>
              {t('resume.intro.text')}
            </p>
            <p>
              {t('resume.intro.text_2')}
            </p>
          </div>

          {/* Modal */}
          <div>
            <div className='w-full flex justify-center md:justify-start'>
              {/* Button */}
              <button className="btn btn-primary" onClick={()=>window.my_modal_3.showModal()}>{t('resume.intro.button')}</button>
            </div>
            {/* Open Modal */}
            <dialog id="my_modal_3" className="modal">
              <form method="dialog" className="modal-box">
              <button className="btn btn-square btn-outline absolute right-2 top-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
                <Profile />
              </form>
            </dialog>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Card