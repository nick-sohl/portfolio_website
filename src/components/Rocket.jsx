import React from 'react'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

import rocket from "/src/assets/rocket.png"

const Rocket = () => {

    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    })

    const scale = useTransform(scrollYProgress, [0.1, 0.4, 1], [0.5, 0.7, 1])
    const x = useTransform(scrollYProgress, [0.1, 0.25, 0.7, 1], ["0%", "-55%", "-60%", "-80%"])
    const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0])

  return (
    <section className='mt-[-30vh]'>
        <div ref={targetRef} className='h-[150vh] w-full'>
            <div className='sticky top-[10vh]'>
                <div className='flex flex-col justify-center items-center'>
                    <motion.div
                        className='origin-top'
                        style={{scale, opacity}}
                    >
                        <img
                            src={rocket} alt="rocket"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Rocket