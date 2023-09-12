import React from 'react'
import { useTranslation } from 'react-i18next'

import App from './App'

import ProjectHero from '../ProjectHero'
import BrowserMockup from '../BrowserMockup'
import Stack from '../Stack'
import GitHubLink from '../GitHubLink'

import {FaReact } from 'react-icons/fa'
import { BsGeoAlt } from 'react-icons/bs'
import { TiWeatherStormy } from 'react-icons/ti'

const WeatherApp = () => {

    const { t } = useTranslation()

    const software = [
        {
            id: 1,
            icon: <FaReact size={40} />,
            name: "React"
        },
        {
            id: 2,
            icon: <BsGeoAlt size={40} />,
            name: "Google Geocoding API"
        },
        {
            id: 3,
            icon: <TiWeatherStormy size={40} />,
            name: "OpenWeather API"
        },
    ]


  return (
    <div className='max-w-2xl grid items-center px-8 py-24 m-auto'>
        <ProjectHero
            title={t('projects.table.p2')}
        />
        <BrowserMockup
            app={<App />}
        />
        <GitHubLink
            link="https://github.com/nick-sohl"
        />
        <Stack
            stack={software}
        />
    </div>
  )
}

export default WeatherApp