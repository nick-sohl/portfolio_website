import React from 'react'
import { useTranslation } from 'react-i18next'

const Languages = () => {

  const { t } = useTranslation()

  return (
    <div className='space-y-4'>
        {/* Sprachen */}
        <div className='w-full px-4 py-2 text-2xl border-b-[1px] border-base-content'>
          <h1>{t('resume.languages.title')}</h1>
        </div>
        {/* Stats Container */}
        <div className='w-full'>
          <div className="w-full stats-vertical md:stats-horizontal text-center sm:text-start shadow grid grid-cols-1 sm:grid-cols-2 grid-rows-4 sm:grid-rows-2 xl:grid-rows-1 xl:grid-cols-4 border-[1px] border-base-content/50 rounded-xl">
            {/* Stats */}
            <div className="stat">
              <div className="stat-title text-secondary">{t('resume.languages.german.subtitle')}</div>
              <div className="stat-value text-lg">{t('resume.languages.german.language')}</div>
            </div>
            <div className="stat">
              <div className="stat-title text-secondary">{t('resume.languages.english.subtitle')}</div>
              <div className="stat-value text-lg">{t('resume.languages.english.language')}</div>
            </div>
            <div className="stat">
              <div className="stat-title text-secondary">{t('resume.languages.spanish.subtitle')}</div>
              <div className="stat-value text-lg">{t('resume.languages.spanish.language')}</div>
            </div>
            <div className="stat">
              <div className="stat-title text-secondary">{t('resume.languages.swiss_german.subtitle')}</div>
              <div className="stat-value text-lg">{t('resume.languages.swiss_german.language')}</div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Languages