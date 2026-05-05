import React from 'react'
import Hero from '../components/Hero'
import AboutMe from '../components/About'
import TechStack from '../components/TechStack'
import FutureSkills from '../components/FutureSkills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
        <Hero/>
        <AboutMe/>
        <TechStack/>
        <FutureSkills/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  )
}
