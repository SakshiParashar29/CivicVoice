import React from 'react'
import DashboardNavbar from './navbar'
import AdminProfile from './profile'
import AdminComplaints from './complaints'
import Footer from '../LandingPage/Footer'

const Admin = () => {
  return (
    <div>
      <DashboardNavbar/>
      <AdminProfile/>
      <AdminComplaints/>
      <Footer/>
    </div>
  )
}

export default Admin
