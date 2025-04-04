import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Grow from './components/Grow'
import Partners from './components/Partners'
import WhatWeDo from './components/WhatWeDo'
import Testimonials from './components/Testimonials'
import LatestBlog from './components/LatestBlog'
import Contact from './components/Contact'
import Footer from './components/Footer';
import './App.css'



const App  = () => {
 
  return (
    <div className="min-h-screen">
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <Grow/>
    <Partners/>
    <WhatWeDo/>
    <Testimonials/>
    <LatestBlog/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App
