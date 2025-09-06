import React from 'react'
import { User, Shield } from 'lucide-react'

const LoginBtn = () => {
  return (
    <div id="login-section" className='flex justify-center items-center flex-col m-8'>
      <h2 className='text-2xl md:text-3xl font-bold text-[#1E3A8A] text-center'>
        Access CivicVoice — Your Gateway to Civic Participation
      </h2>
    
    {/* user Button */}
      <div className='flex gap-16 mt-10'>
        <button className='flex cursor-pointer items-center gap-2 px-6 py-3 rounded-lg shadow-md bg-[#2563EB] hover:bg-[#1E40AF] text-white font-semibold transition duration-300'>
          <User size={20} />
          User
        </button>

        {/* admin Button */}
        <button className='cursor-pointer flex items-center gap-2 px-6 py-3 rounded-lg shadow-md bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold transition duration-300'>
          <Shield size={20} />
          Admin
        </button>
      </div>
    </div>
  )
}

export default LoginBtn
