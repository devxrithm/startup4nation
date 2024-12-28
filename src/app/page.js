import React from 'react'
import Hero from './components/hero'
import About from './components/about'
import Ourteam from './components/ourteam'
import Milestone from './components/milestone'
import Pastevents from './components/pastevents'
import Footer from './components/footer'
import Contact from './components/contact'

const page = () => {
  return (
    <>
    <Hero/>
    <About/>
    <Ourteam/>
    <Milestone/>
    <Pastevents/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default page