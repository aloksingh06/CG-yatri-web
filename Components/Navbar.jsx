"use client"
import React from 'react'
import logo from '../Images/logo.png'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='h-18 bg-[#011D3D] flex  items-center justify-between px-26'>
          <div>
            <Image className='w-14' src={logo} alt="" />
            </div>
            <div className='text-white text-xl font-semibold gap-14 flex'> 
              <Link href="/">Home</Link> 
              <Link href="/About Us">About</Link> 
              <Link href="/Services">Services</Link> 
              <Link href="/Plan">Plan</Link> 
              <Link href="/Community">Community</Link> 
              <Link href="/Contact">Contact Us</Link> 

            
            
          </div>

    </div>
  )
}

export default Navbar