import './App.css'

import { useState } from 'react'

import Navbar from './components/Navbar'

import Hero from './components/Hero'
import Sticky from './components/Rocket'

import GradientHeadline from './components/GradientHeadline'
import List from './components/List'
import Roadmap from './components/Roadmap'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useEffect } from 'react'

function App( {theme, handleToggle} ) {


  return (
    <main>
      <Navbar 
        handleToggle = {handleToggle}
        theme = {theme}
      />
      <Hero
        theme={theme}
      />
      <Sticky />
      <GradientHeadline
        theme={theme}
      />
      <List
        theme = {theme}
      />
      <div className='bg-base-content/50 h-[1px]'></div>
      <Roadmap
        theme = {theme}
      />
      <Projects
        theme = {theme}
      />
      <AboutMe />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
