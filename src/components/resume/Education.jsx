import React from 'react'
import { useTranslation } from 'react-i18next'

const Education = () => {

  const { t } = useTranslation()

  return (
    <div className='space-y-4'>
        <div className='w-full px-4 py-2 text-2xl border-b-[1px] border-base-content'>
            <h1>{t('resume.education.title')}</h1>
        </div>

        <div className='grid gap-4 grid-cols-1'>

        {/* Havas */}
        <details className="collapse collapse-arrow bg-primary text-primary-content">
          <summary className="collapse-title text-xl font-medium">{t('resume.education.box_1.box_title')}</summary>
          <div className="collapse-content"> 
            <div className="overflow-x-auto">
              <table className="table">
                <tbody>
                {/* row 1 */}
                <tr>
                    <td>
                    <div className='flex flex-col md:flex-row md:gap-6'>
                        <div className='font-bold text-base-100'>2017 - 2021</div>
                        <div>{t('resume.education.box_1.list.p_1')}</div>
                    </div>
                    </td>
                </tr>
                </tbody>
                </table>
            </div>
          </div>
        </details>

        {/* Schulbildung */}
        <details className="collapse collapse-arrow bg-secondary text-secondary-content">
          <summary className="collapse-title text-xl font-medium">{t('resume.education.box_2.box_title')}</summary>
          <div className="collapse-content"> 
            <div className="overflow-x-auto">
            <table className="table">
                    <tbody>
                      {/* row 1 */}
                      <tr>
                        <td>
                          <div className='flex flex-col md:flex-row md:gap-6'>
                            <div className='font-bold text-base-100'>2016 - 2017</div>
                            <div>{t('resume.education.box_2.list.p_1')}</div>
                          </div>
                        </td>
                      </tr>
                      {/* row 2 */}
                      <tr>
                        <td>
                          <div className='flex flex-col md:flex-row md:gap-6'>
                            <div className='font-bold text-base-100'>2015 - 2016</div>
                            <div>{t('resume.education.box_2.list.p_2')}</div>
                          </div>
                        </td>
                      </tr>
                      {/* row 3 */}
                      <tr>
                        <td>
                        <div className='flex flex-col md:flex-row md:gap-6'>
                            <div className='font-bold text-base-100'>2010 - 2014</div>
                            <div>{t('resume.education.box_2.list.p_3')}</div>
                          </div>
                        </td>
                      </tr>
                      {/* row 4 */}
                      <tr>
                        <td>
                        <div className='flex flex-col md:flex-row md:gap-6'>
                            <div className='font-bold text-base-100'>2006 - 2010</div>
                            <div>{t('resume.education.box_2.list.p_4')}</div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
            </div>
          </div>
        </details>

        </div>
        
    </div>
  )
}

export default Education