import React from 'react'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const GradientHeadline = ({theme}) => {

    const { t } = useTranslation()

  return (
    <motion.section
        id="notperfect"
        className='w-full bg-base-100 px-4 sm:px-8 pt-24 pb-0'
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.5}}
    >
        <motion.div
            className='text-center flex flex-col gap-4'
        >
            <motion.h1
                className='text-6xl lg:text-8xl font-bold'
            >
                <div>
                    <span className={`bg-clip-text text-transparent ${theme === 'dark' ? 'bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-900 via-purple-400 to-purple-50' : 'bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-200 via-purple-400 to-purple-900'}`}>{t('notperfect.headline')}</span>
                </div>
            </motion.h1>
            <motion.h3
                className='text-3xl lg:text-5xl text-accent font-light'
            >
                {t('notperfect.subline')}
            </motion.h3>
        </motion.div>
    </motion.section>
  )
}

export default GradientHeadline