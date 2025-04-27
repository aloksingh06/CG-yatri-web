"use client";

import React, { useState, useContext, useEffect } from "react";
import logo from "../images/logo.png";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { AuthContext } from "@/app/Context/AuthContext";

const Navbar = () => {
  const { isAuthenticated, user, loading } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log("Navbar me isAuthenticated:", isAuthenticated);
  }, [isAuthenticated]);

  if (loading) {
    return null; // <-- Jab tak localStorage se data nahi aata, kuch mat dikhao
  }

  return (
    <nav className="bg-[#1400AE] fixed top-0 w-full z-50">
      <div className='max-w-[1440px] mx-auto px-6 md:px-10 py-3 flex items-center justify-between'>
        {/* Logo */}
        <div className='flex items-center gap-2'>
          <Image className='w-12 h-12' src={logo} alt="Logo" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 text-white text-lg font-medium">
          <Link href="/">Home</Link>
          <Link href="/About">About</Link>
          <Link href="/Services">Services</Link>
          <Link href="/Plan">Plan</Link>
          <Link href="/Blog">Blog</Link>
          <Link href="/Community">Community</Link>
          <Link href="/Contact">Contact Us</Link>

          {!isAuthenticated ? (
            <>
              <Link href="/Register">Register</Link>
              <Link href="/Login">Login</Link>
            </>
          ) : (
            <Link href="/profile">Profile</Link>
          )}
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden bg-[#011D3D] px-6 pb-4 flex flex-col gap-4 text-white text-base font-medium">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/About" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/Services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/Plan" onClick={() => setIsOpen(false)}>Plan</Link>
          <Link href="/Blog" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link href="/Community" onClick={() => setIsOpen(false)}>Community</Link>
          <Link href="/Contact" onClick={() => setIsOpen(false)}>Contact Us</Link>

          {!isAuthenticated ? (
            <>
              <Link href="/Register" onClick={() => setIsOpen(false)}>Register</Link>
              <Link href="/Login" onClick={() => setIsOpen(false)}>Login</Link>
            </>
          ) : (
            <Link href="/profile" onClick={() => setIsOpen(false)}>Profile</Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
