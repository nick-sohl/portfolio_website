import React from 'react'

import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import logo from '/n-logo-gradient.svg'

import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'

const Navbar = ({handleToggle, theme}) => {

    const { t } = useTranslation()

    const scrollToStart = () => {
        const element = document.getElementById('hero')
        if (element) {
          element.scrollIntoView({behavior: "smooth"})
        }
      }
    const scrollToProjects = () => {
        const element = document.getElementById('projects')
        if (element) {
          element.scrollIntoView({behavior: "smooth"})
        }
      }
    const scrollToAboutMe = () => {
        const element = document.getElementById('about-me')
        if (element) {
          element.scrollIntoView({behavior: "smooth"})
        }
      }
    const scrollToContactMe = () => {
        const element = document.getElementById('contact-me')
        if (element) {
          element.scrollIntoView({behavior: "smooth"})
        }
      }

  return (

        <div className="navbar bg-base-100/75 backdrop-blur-md fixed border-b-[1px] border-base-content/50 z-50">

            <div className="navbar-start">
                {/* DROPDOWN */}
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={scrollToStart} className="text-primary"><a>Start</a></li>
                        <li onClick={scrollToProjects}><a>{t('navbar.projects')}</a></li>
                        <li onClick={scrollToAboutMe}><a>{t('navbar.about')}</a></li>
                        <li onClick={scrollToContactMe}><a>{t('navbar.contact')}</a></li>
                    </ul>
                </div>
                <a onClick={scrollToStart} to="/" className="btn btn-ghost normal-case text-xl">
                  <img src={logo} alt="n-logo" className='w-10 h-10' />
                </a>
            </div>

            {/* FULL */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li><Link onClick={scrollToProjects}>{t('navbar.projects')}</Link></li>
                <li><Link onClick={scrollToAboutMe}>{t('navbar.about')}</Link></li>
                <li><Link onClick={scrollToContactMe}>{t('navbar.contact')}</Link></li>
                </ul>
            </div>



            <div className="navbar-end gap-4">
                <LanguageToggle />
                <ThemeToggle
                  handleToggle = {handleToggle}
                  theme = {theme}
                />
                {/* <Link onClick={scrollToContactMe} className="btn btn-primary">Contact me</Link> */}
            </div>
        </div>
  )
}

export default Navbar