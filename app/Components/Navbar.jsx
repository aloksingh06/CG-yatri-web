"use client"
import React, { useState } from 'react'
import logo from '../Images/logo.png'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react' // Optional: Lucide for icons (install with `npm i lucide-react`)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='bg-[#011D3D]'>
      <div className='max-w-[1440px] mx-auto px-6 md:px-10 py-4 flex items-center justify-between'>
        {/* Logo */}
        <div className='flex items-center gap-2'>
          <Image className='w-12 h-12' src={logo} alt="Logo" />
          <span className='text-white text-2xl font-semibold hidden sm:inline-block'>CG Yatri</span>
        </div>

        {/* Desktop Links */}
        <div className='hidden md:flex gap-10 text-white text-lg font-medium'>
          <Link href="/">Home</Link>
          <Link href="/About">About</Link>
          <Link href="/Services">Services</Link>
          <Link href="/Plan">Plan</Link>
          <Link href="/Blog">Blog</Link>
          <Link href="/Community">Community</Link>
          <Link href="/Contact">Contact Us</Link>
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
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/About" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/Services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/Plan" onClick={() => setIsOpen(false)}>Plan</Link>
          <Link href="/Blog" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link href="/Community" onClick={() => setIsOpen(false)}>Community</Link>
          <Link href="/Contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
