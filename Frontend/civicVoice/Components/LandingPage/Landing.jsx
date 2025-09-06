import React from 'react'
import Navbar from '../LandingPage/Navbar.jsx'
import HeroSection from '../LandingPage/HeroSection.jsx'
import LoginBtn from '../LandingPage/LoginBtn.jsx'
import Footer from '../LandingPage/Footer.jsx'
const Landing = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <LoginBtn/>
      <Footer/>
    </div>
  )
}

export default Landing
