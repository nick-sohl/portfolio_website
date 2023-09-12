import React from 'react'

import App from './App'

import ProjectHero from '../ProjectHero'
import BrowserMockup from '../BrowserMockup'
import Stack from '../Stack'
import GitHubLink from '../GitHubLink'

import {FaReact } from 'react-icons/fa'
import {GiMineExplosion} from 'react-icons/gi'
import {MdOutlineRealEstateAgent} from 'react-icons/md'

const ToDo = () => {

    const software = [
        {
            id: 1,
            icon: <FaReact size={40} />,
            name: "React"
        },
        {
            id: 2,
            icon: <GiMineExplosion size={40} />,
            name: "useEffect"
        },
        {
            id: 3,
            icon: <MdOutlineRealEstateAgent size={40} />,
            name: "useState"
        },
        {
            id: 4,
            icon: <MdOutlineRealEstateAgent size={40} />,
            name: "fetch request"
        },
    ]


  return (
    <div className='max-w-2xl grid items-center px-8 py-24 m-auto'>
        <ProjectHero
            title="AJAX"
        />
        <BrowserMockup
            app={<App />}
        />
        <GitHubLink
            link="https://github.com/nick-sohl/ajax_load-users"
        />
        <Stack
            stack={software}
        />
    </div>
  )
}

export default ToDo