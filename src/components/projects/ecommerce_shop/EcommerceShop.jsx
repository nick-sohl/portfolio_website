import React from 'react'


import ProjectHero from '../ProjectHero'
import BrowserMockup from '../BrowserMockup'
import Stack from '../Stack'
import GitHubLink from '../GitHubLink'

import { FaReact } from 'react-icons/fa'
import { SiNextdotjs } from 'react-icons/si'
import { SiPrisma } from 'react-icons/si'
import { BsShieldShaded } from 'react-icons/bs'
import { GiMatterStates } from 'react-icons/gi'
import { SiRailway } from 'react-icons/si'

const EcommerceShop = () => {

    const software = [
        {
            id: 1,
            icon: <FaReact size={40} />,
            name: "React"
        },
        {
            id: 2,
            icon: <SiNextdotjs size={40} />,
            name: "Next.js"
        },
        {
            id: 3,
            icon: <BsShieldShaded size={40} />,
            name: "Next Auth"
        },
        {
            id: 4,
            icon: <SiPrisma size={40} />,
            name: "Prisma"
        },
        {
            id: 5,
            icon: <GiMatterStates size={40} />,
            name: "Zustand"
        },
        {
            id: 6,
            icon: <SiRailway size={40} />,
            name: "Railway"
        },
    ]


  return (
    <div className='max-w-2xl grid items-center px-8 py-24 m-auto'>
        <ProjectHero
            title="E-Commerce Shop"
        />
        <BrowserMockup
            app={''}
        />
        <GitHubLink
            link="https://github.com/nick-sohl/ecommerce-shop"
        />
        <Stack
            stack={software}
        />
    </div>
  )
}

export default EcommerceShop