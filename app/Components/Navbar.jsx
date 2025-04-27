"use client"
import React, { useState } from 'react'
import logo from '../images/logo.png'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('') // Active link ko track karenge

  const handleLinkClick = (link) => {
    setActiveLink(link)
    setIsOpen(false)
  }

  return (
    <nav className='bg-[#1400AE] fixed top-0 w-full z-50'>
      <div className='max-w-[1440px] mx-auto px-6 md:px-10 py-3 flex items-center justify-between'>
        {/* Logo */}
        <div className='flex items-center gap-2'>
          <Image className='w-12 h-12' src={logo} alt="Logo" />
        </div>

        {/* Desktop Links */}
        <div className='hidden md:flex gap-8 text-white text-lg font-medium'>
          {[
            { name: 'Home', path: '/' },
            { name: 'About', path: '/About' },
            { name: 'Services', path: '/Services' },
            { name: 'Plan', path: '/Plan' },
            { name: 'Blog', path: '/Blog' },
            { name: 'Community', path: '/Community' },
            { name: 'Contact Us', path: '/Contact' }
          ].map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => handleLinkClick(item.name)}
              className={`px-4 py-2 rounded-full transition-all duration-200 ${
                activeLink === item.name 
                  ? 'bg-gray-100 text-[#1400AE]' 
                  : 'text-white hover:bg-gray-100 hover:text-[#1400AE]'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Hamburger Menu */}
        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className='md:hidden bg-[#011D3D] px-6 pb-4 flex flex-col gap-4 text-white text-base font-medium'>
          {[
            { name: 'Home', path: '/' },
            { name: 'About', path: '/About' },
            { name: 'Services', path: '/Services' },
            { name: 'Plan', path: '/Plan' },
            { name: 'Blog', path: '/Blog' },
            { name: 'Community', path: '/Community' },
            { name: 'Contact Us', path: '/Contact' }
          ].map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => handleLinkClick(item.name)}
              className={`px-4 py-2 rounded-full transition-all duration-200 ${
                activeLink === item.name 
                  ? 'bg-gray-100 text-[#1400AE]' 
                  : 'text-white hover:bg-gray-100 hover:text-[#1400AE]'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
