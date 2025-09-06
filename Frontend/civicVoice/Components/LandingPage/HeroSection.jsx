import React from 'react'
import '../../src/App.css'

const HeroSection = () => {
  return (
    <div className='flex justify-center items-center h-[70vh] bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] px-6'>
      <div className='text-center flex flex-col gap-6 max-w-2xl text-white'>
        <h1 className='font-bold text-3xl md:text-4xl italic'>
          Your Voice. Your Power. Your City.
        </h1>
        <p className='italic text-lg md:text-xl text-gray-200 leading-relaxed'>
          Join CivicVoice to raise concerns, share ideas, and collaborate with local 
          bodies. Together, we build accountable governance and inclusive cities.
        </p>
        <div>
          <button className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300 cursor-pointer" onClick={() => document.getElementById('login-section').scrollIntoView({behavior: 'smooth'})}>
            Take Action Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
