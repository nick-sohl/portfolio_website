import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import lidl_img from '/src/assets/work/work-lidl-f12.png'
import proj_img from '/src/assets/work/work-projuventute-f12.png'
import bag_img from '/src/assets/work/work-bag-f12.png'
import hyundai_img from '/src/assets/work/work-hyundai-banner.png'
import arval_img from '/src/assets/work/work-arval-banner.png'
import hirz_img from '/src/assets/work/work-hirz-halfpage-ad.png'
import migros_img from '/src/assets/work/work_migros.jpeg'
import osoy_img from '/src/assets/work/work-osoy_cd.png'
import obscure_img from '/src/assets/work/work_sfga_obscure.png'

const projects = [
    {
      id: 1,
      name: 'Lidl',
    //   href: '#',
      imageSrc: lidl_img,
      imageAlt: 'Lidl – Preiskampagne',
    },
    {
      id: 2,
      name: 'Pro Juventute',
    //   href: '#',
      imageSrc: proj_img,
      imageAlt: 'Pro Juventute – Suizitprävention',
    },
    {
      id: 3,
      name: 'BAG',
    //   href: '#',
      imageSrc: bag_img,
      imageAlt: 'BAG Antibiotika-Kampagne',
    },
    {
      id: 4,
      name: 'Hyundai',
    //   href: '#',
      imageSrc: hyundai_img,
      imageAlt: 'Hyundai All Inclusive Kampagne',
    },
    {
      id: 5,
      name: 'Arval',
    //   href: '#',
      imageSrc: arval_img,
      imageAlt: 'Arval Retail Kampagne',
    },
    {
      id: 6,
      name: 'Hirz',
    //   href: '#',
      imageSrc: hirz_img,
      imageAlt: 'Hirz Hüttenkäse',
    },
    {
      id: 7,
      name: 'Migros Aare',
    //   href: '#',
      imageSrc: migros_img,
      imageAlt: 'Migros Aare',
    },
    {
      id: 8,
      name: 'Osoy',
    //   href: '#',
      imageSrc: osoy_img,
      imageAlt: 'Osoy CD Packaging',
    },
    {
      id: 9,
      name: 'Obscure',
    //   href: '#',
      imageSrc: obscure_img,
      imageAlt: 'Obscure Wrap Fold Flyer',
    },
  ]

export default function Work() {

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
      <div className='space-y-4'>
        <div className='w-full px-4 py-2 text-2xl border-b-[1px] border-base-content'>
          <h1>{t('resume.work.title')}</h1>
        </div>
        <div>
          <h2 className="sr-only">{t('resume.work.box_title')}</h2>

          {viewportWidth < 700 ? (
            <details className="collapse collapse-arrow bg-primary">
              <summary className="collapse-title text-xl font-medium text-primary-content">{t('resume.work.box_title')}</summary>
              <div className="collapse-content"> 
                <p>
                  <div className="collapse-content p-0"> 
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {projects.map((product) => (
                        <a key={product.id} href={product.href} className="group">
                          <div className={`aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-sm`}>
                            <img
                              src={product.imageSrc}
                              alt={product.imageAlt}
                              className="h-full w-full object-cover object-center group-hover:opacity-10"
                            />
                            <div className="opacity-0 hover:opacity-100 transition-opacity ease-in-out duration-300">
                              <p className="w-full h-full flex justify-center items-center text-md text-white">{product.name}</p>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </p>
              </div>
            </details>
          ) : (
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {projects.map((product) => (
                        <a key={product.id} href={product.href} className="group">
                          <div className={`aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-sm`}>
                            <img
                              src={product.imageSrc}
                              alt={product.imageAlt}
                              className="h-full w-full object-cover object-center group-hover:opacity-10"
                            />
                            <div className="opacity-0 hover:opacity-100 transition-opacity ease-in-out duration-300">
                              <p className="w-full h-full flex justify-center items-center text-md text-base-content">{product.name}</p>
                            </div>
                          </div>
                          {/* <h3 className="mt-4 text-md text-center">{product.name}</h3> */}
                        </a>
                      ))}
                    </div>
          ) }

        </div>
      </div>
    )
}