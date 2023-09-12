import React from 'react'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import scrollDownPositiv from '/src/assets/scroll-down-positiv.svg'
import scrollDownNegativ from '/src/assets/scroll-down-negativ.svg'


const Hero = ({theme}) => {

    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"]
    })
    const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
    const position = useTransform(scrollYProgress, (pos) => {
        return pos === 1 ? "relative" : "fixed"
    })

    const { t } = useTranslation()

    const startTheRocket = () => {
        const element = document.getElementById('notperfect')
        if (element) {
          element.scrollIntoView({behavior: "smooth"})
        }
      }

  return (
    <section id='hero' className='h-screen w-full'>

        {/* Background Animation */}
        <motion.div
            className='bg-primary h-screen w-full absolute z-50'
            initial={{
                height: "100%"
            }}
            animate={{
                height: "0%"
            }}
            transition={{duration: 0.3, ease: 'easeInOut', delay: 0.4}}
        >
        </motion.div>

        {/* Container */}
        <motion.section
            className={`h-screen w-full px-8 md:px-16 fixed flex justify-center items-center top-0 left-0 z-40 ${theme === 'light' ? 'bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-900 via-purple-400 to-purple-50' : 'bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-200 via-purple-400 to-purple-900'}`}
            ref={targetRef}
            style={{opacity: opacity, position: position}}
        >
            <div>
                <div className='-translate-y-[100px] flex flex-col items-center text-center gap-4 text-base-100'>
                    {/* Text Animation */}
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1, y: 50}}
                        transition={{delay: 1}}
                    >
                        <h1 className='font-bold text-3xl sm:text-5xl md:text-6xl lg:text-6xl'>{t('hero.headline')}</h1>
                    </motion.div>
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1, y: 50}}
                        transition={{delay: 0.7}}
                    >
                        <h3 className='text-xl md:text-3xl lg:text-4xl'>{t('hero.subline')}</h3>
                    </motion.div>
                </div>
                <Link onClick={startTheRocket}>
                    <motion.div
                        className='h-[75px] w-full flex justify-center overflow-hidden relative'
                        initial={{y: 0}}
                        animate={{y: 12}}
                        transition={{duration: 1, delay: 1, type: "spring", repeat: Infinity, repeatType: "reverse"}}    
                    >
                        <img
                            src={theme === 'dark' ? scrollDownPositiv : scrollDownNegativ}
                            alt="scroll down"
                            className='object-contain h-full'
                            />
                        <motion.div
                            className='bg-base-100 absolute top-[10px] w-[6px] h-[12px] rounded-full'
                            initial={{y: 1}}
                            animate={{y: 30, opacity: 0}}
                            transition={{duration: 2, delay: 1, type: "spring", repeat: Infinity}}
                        >
                        </motion.div>
                    </motion.div>
                </Link>
            </div>
        </motion.section>
        
    </section>
  )
}

export default Hero