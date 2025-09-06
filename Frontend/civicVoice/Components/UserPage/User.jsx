import React from 'react'
import DashboardNavbar from '../AdminPage/navbar'
import HeroSection from './heroSection'
import UserComplaints from './UserComplaints'
import Footer from '../LandingPage/Footer'
import UserFeedback from './FeedBack'

const User = () => {
  return (
    <div>
      <DashboardNavbar/>
      <HeroSection/>
      <UserComplaints/>
      <UserFeedback/>
      <Footer/>
    </div>
  )
}

export default User
