import React from 'react'
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaCopyright } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 mr-0">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white">CivicVoice</h2>
          <p className="mt-2 text-sm text-gray-400">
            Empowering citizens to raise their voice and shape better governance.
          </p>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex gap-4 text-2xl">
            <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-600"><FaFacebook /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-700"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500 flex items-center justify-center gap-2">
        <FaCopyright className="inline-block" />
        <span>{new Date().getFullYear()} CivicVoice. All Rights Reserved.</span>
      </div>
    </footer>
  )
}

export default Footer
