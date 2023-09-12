import React from 'react'

import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';

import ThemeToggle from '../ThemeToggle'
import LanguageToggle from '../LanguageToggle';

import logo from '/n-logo-gradient.svg'


const NavbarProjects = ( {theme, handleToggle} ) => {

    const { t } = useTranslation()

  return (
    <div className="navbar bg-base-100/75 backdrop-blur-md fixed border-b-[1px] border-base-content/50 z-50">
    <div className="navbar-start">
        {/* DROPDOWN */}
        <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li className="text-primary"><Link to="/">Start</Link></li>
                <li><HashLink smooth to="/#projects">{t('navbar.projects')}</HashLink></li>
                <li><HashLink smooth to="/#about-me" >{t('navbar.about')}</HashLink></li>
                <li><HashLink smooth to="/#contact-me">{t('navbar.contact')}</HashLink></li>
            </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img src={logo} alt="n-logo" className='w-10 h-10' />
        </Link>
    </div>
    {/* FULL */}
    <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        <li><HashLink smooth to="/#projects">{t('navbar.projects')}</HashLink></li>
        <li><HashLink smooth to="/#about-me" >{t('navbar.about')}</HashLink></li>
        <li><HashLink smooth to="/#contact-me" >{t('navbar.contact')}</HashLink></li>
        </ul>
    </div>
    <div className="navbar-end gap-4">
    <LanguageToggle />
    <ThemeToggle
        handleToggle = {handleToggle}
        theme = {theme}
    />
    {/* <HashLink smooth to="/#contact-me" className='btn btn-primary'>Contact me</HashLink> */}
    </div>
</div>
  )
}

export default NavbarProjects