import React from 'react'
import { useTranslation } from 'react-i18next'

const Hobbys = () => {

    const { t } = useTranslation()

  return (
    <div className='space-y-4'>
        {/* Hobbys */}
        <div className='w-full px-4 py-2 text-2xl border-b-[1px] border-base-content'>
            <h1>{t('resume.hobbys.title')}</h1>
        </div>
        {/* Stats Container */}
        <div className='w-full'>
            <div className="w-full stats-vertical sm:stats-horizontal text-center sm:text-start shadow grid grid-cols-1 sm:grid-cols-3 grid-rows-2 sm:grid-rows-2 border-[1px] border-base-content/50 rounded-xl">
                {/* Stats */}
                <div className="stat">
                    <div className="stat-value text-lg">{t('resume.hobbys.hobby_1')}</div>
                </div>
                <div className="stat">
                    <div className="stat-value text-lg">{t('resume.hobbys.hobby_2')}</div>
                </div>
                <div className="stat">
                    <div className="stat-value text-lg">{t('resume.hobbys.hobby_3')}</div>
                </div>
                <div className="stat">
                    <div className="stat-value text-lg">{t('resume.hobbys.hobby_4')}</div>
                </div>
                <div className="stat">
                    <div className="stat-value text-lg">{t('resume.hobbys.hobby_5')}</div>
                </div>
                <div className="stat">
                    <div className="stat-value text-lg">{t('resume.hobbys.hobby_6')}</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hobbys