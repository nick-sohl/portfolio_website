import React from 'react'
import { useTranslation } from 'react-i18next'

const Details = () => {

  const { t } = useTranslation()

  return (
    <div>
        {/* Details Container */}
        <div className='w-full'>
          <div className="w-full stats-vertical sm:stats-horizontal text-center sm:text-start shadow grid grid-cols-1 sm:grid-cols-2 grid-rows-4 sm:grid-rows-2 xl:grid-rows-1 xl:grid-cols-4 border-[1px] border-base-content/50 rounded-xl">
            {/* Details */}
            <div className="stat">
              <div className="stat-title text-secondary">{t('resume.info.residence.subtitle')}</div>
              <div className="stat-value text-lg">{t('resume.info.residence.title')}</div>
            </div>
            <div className="stat">
              <div className="stat-title text-secondary">{t('resume.info.birthdate.subtitle')}</div>
              <div className="stat-value text-lg">{t('resume.info.birthdate.title')}</div>
            </div>
            <div className="stat">
              <div className="stat-title text-secondary">{t('resume.info.nationality.subtitle')}</div>
              <div className="stat-value text-lg">{t('resume.info.nationality.title')}</div>
            </div>
            <div className="stat">
              <div className="stat-title text-secondary">{t('resume.info.birthplace.subtitle')}</div>
              <div className="stat-value text-lg">{t('resume.info.birthplace.title')}</div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Details