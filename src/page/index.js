import React from 'react';
import { useState } from 'react';
import Sidebar from '../components/Sidebar/index'
import Navbar from '../components/Navbar'
import HeroSection from '../components/Hero/index'
import Tech from '../components/Technologies/index'
import Projects from '../components/Projects'
import About from '../components/AboutMe/index'
import WorkTogether from '../components/WorkTogether/index';
import Footer from '../components/Footer'

export default () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return(
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection />
        <Tech />
        <Projects />
        <About />
        <WorkTogether />
        <Footer />
        </>

    )
}