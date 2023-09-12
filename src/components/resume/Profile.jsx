import React from 'react'
import { useTranslation } from 'react-i18next'

import lebenslauf from '/src/assets/Lebenslauf_Nick_Sohl.pdf'
import resume from '/src/assets/Resume_Nick_Sohl.pdf'

const Profile = () => {

    const { t } = useTranslation()

  return (
    <div>
    <div class="px-4 sm:px-0">
        <h3 class="text-base font-semibold leading-7 text-base-content">{t('resume.module.title')}</h3>
    </div>
    <div class="mt-6 border-t border-base-content">
        <dl class="divide-y border-base-content/50">
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-base-content">{t('resume.module.table.name.title')}</dt>
            <dd class="mt-1 text-sm leading-6 text-base-content sm:col-span-2 sm:mt-0">{t('resume.module.table.name.info')}</dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-base-content">{t('resume.module.table.apply_for.title')}</dt>
            <dd class="mt-1 text-sm leading-6 text-base-content sm:col-span-2 sm:mt-0">{t('resume.module.table.apply_for.info')}</dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-base-content">{t('resume.module.table.contact.title')}</dt>
            <dd class="mt-1 text-sm leading-6 text-base-content sm:col-span-2 sm:mt-0"><span className='font-bold'>Email:</span> <a href="mailto:nick.sohl@nicksohl.com">nick.sohl@nicksohl.com</a><br /><span className='font-bold'>Mobil:</span> 076 801 09 03</dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-base-content">{t('resume.module.table.about.title')}</dt>
            <dd class="mt-1 text-sm leading-6 text-base-content sm:col-span-2 sm:mt-0">
                {t('resume.module.table.about.info')}
            </dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-base-content">{t('resume.module.table.attachments.title')}</dt>
            <dd class="mt-2 text-sm text-base-content sm:col-span-2 sm:mt-0">
            <ul role="list" class="divide-y divide-base-content rounded-md border border-base-content">
                <li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                <div class="flex w-0 flex-1 items-center">
                    <svg class="h-5 w-5 flex-shrink-0 text-base-content" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
                    </svg>
                    <div class="ml-4 flex min-w-0 flex-1 gap-2">
                    <span class="truncate font-medium">{t('resume.module.table.attachments.info_1')}</span>
                    </div>
                </div>
                <div class="ml-4 flex-shrink-0">
                    <a href={lebenslauf} download="Lebenslauf_Nick_Sohl.pdf" target='_blank' class="font-medium text-primary hover:text-primary-focus">Download</a>
                </div>
                </li>
                <li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                <div class="flex w-0 flex-1 items-center">
                    <svg class="h-5 w-5 flex-shrink-0 text-base-content" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
                    </svg>
                    <div class="ml-4 flex min-w-0 flex-1 gap-2">
                    <span class="truncate font-medium">{t('resume.module.table.attachments.info_2')}</span>
                    </div>
                </div>
                <div class="ml-4 flex-shrink-0">
                    <a href={resume} download="Resume_Nick_Sohl.pdf" target='_blank' class="font-medium text-primary hover:text-primary-focus">Download</a>
                </div>
                </li>
                <li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                <div class="flex w-0 flex-1 items-center">
                    <svg class="h-5 w-5 flex-shrink-0 text-base-content" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
                    </svg>
                    <div class="ml-4 flex min-w-0 flex-1 gap-2">
                    <span class="truncate font-medium">{t('resume.module.table.attachments.info_3')}</span>
                    </div>
                </div>
                <div class="ml-4 flex-shrink-0 tooltip" data-tip="coming soon">
                    <a target="_blank" class="font-medium text-slate-500 hover:text-primary-focus">Download</a>
                </div>
                </li>
            </ul>
            </dd>
        </div>
        </dl>
    </div>
    </div>
  )
}

export default Profile