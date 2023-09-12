import React from 'react'
import { useTranslation } from 'react-i18next'

const Experience = () => {

  const { t } = useTranslation()

  return (
    
    <div className='space-y-4'>
    {/* Expercience */}
    <div className='w-full px-4 py-2 text-2xl border-b-[1px] border-base-content'>
      <h1>{t('resume.experience.title')}</h1>
    </div>

    <div className='grid gap-4 grid-cols-1'>

      {/* Havas */}
      <details className="collapse collapse-arrow bg-primary text-primary-content">
        <summary className="collapse-title text-xl font-medium">Havas Switzerland</summary>
        <div className="collapse-content"> 
          <div className="overflow-x-auto">
            <table className="table">
              <tbody>
                {/* row 1 */}
                <tr>
                  <td>
                    {t('resume.experience.box_1.list.p_1')}
                  </td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td>
                  {t('resume.experience.box_1.list.p_2')}
                  </td>
                </tr>
                {/* row 3 */}
                <tr>
                  <td>
                  {t('resume.experience.box_1.list.p_3')}
                  </td>
                </tr>
                {/* row 4 */}
                <tr>
                  <td>
                  {t('resume.experience.box_1.list.p_4')}
                  </td>
                </tr>
                {/* row 5 */}
                <tr>
                  <td>
                  {t('resume.experience.box_1.list.p_5')}
                  </td>
                </tr>
                {/* row 6 */}
                <tr>
                  <td>
                  {t('resume.experience.box_1.list.p_6')}
                  </td>
                </tr>
                {/* row 7 */}
                <tr>
                  <td>
                  {t('resume.experience.box_1.list.p_7')}
                  </td>
                </tr>
                {/* row 8 */}
                <tr>
                  <td>
                  {t('resume.experience.box_1.list.p_8')}
                  </td>
                </tr>
                {/* row 9 */}
                <tr>
                  <td>
                  {t('resume.experience.box_1.list.p_9')}
                  </td>
                </tr>
                {/* row 10 */}
                <tr>
                  <td>
                  {t('resume.experience.box_1.list.p_10')}
                  </td>
                </tr>
                {/* row 10 */}
                <tr>
                  <td>
                  {t('resume.experience.box_1.list.p_11')}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </details>

      {/* Brandkitchen */}
      <details className="collapse collapse-arrow bg-secondary text-secondary-content">
        <summary className="collapse-title text-xl font-medium">Brandkitchen</summary>
        <div className="collapse-content"> 
          <div className="overflow-x-auto">
          <table className="table">
              <tbody>
                {/* row 1 */}
                <tr>
                  <td>
                    {t('resume.experience.box_2.list.p_1')}
                  </td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td>
                    {t('resume.experience.box_2.list.p_2')}
                  </td>
                </tr>
                {/* row 3 */}
                <tr>
                  <td>
                   {t('resume.experience.box_2.list.p_3')}
                  </td>
                </tr>
                {/* row 4 */}
                <tr>
                  <td>
                    {t('resume.experience.box_2.list.p_4')}
                  </td>
                </tr>
                {/* row 5 */}
                <tr>
                  <td>
                    {t('resume.experience.box_2.list.p_5')}
                  </td>
                </tr>
                {/* row 6 */}
                <tr>
                  <td>
                    {t('resume.experience.box_2.list.p_6')}
                  </td>
                </tr>
                {/* row 7 */}
                <tr>
                  <td>
                    {t('resume.experience.box_2.list.p_7')}
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

export default Experience