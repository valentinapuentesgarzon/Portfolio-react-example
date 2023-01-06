import React from 'react'
import './index'
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import About from './components/about/About';
import Experience from './components/Experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
 

export const App = () => {
  return (
    <>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Services/>
        <Portfolio/>
        <Testimonials/>
        <Contact/>
        <Footer/>
        
    </>
  )
}
