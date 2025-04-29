"use client";

import React, { useState, useContext, useEffect, useRef } from "react";
import logo from "../images/logo.png";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, User } from "lucide-react";
import { AuthContext } from "@/app/Context/AuthContext";
import { usePathname } from "next/navigation";
import OurServices from "./OurServices";
import Login from "./Login";
import Register from "./Register";
import Modal from "./Modal";
import { useRouter } from "next/navigation";


const Navbar = () => {
  const { isAuthenticated, user, loading, popUpPage, setpopUpPage } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const pathname = usePathname(); 
  const [model, setmodel] = useState(false);
  const [pageOpen, setpageOpen] = useState(false)



  useEffect(() => {
    console.log("Navbar me isAuthenticated:", isAuthenticated);
  }, [isAuthenticated]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (loading) {
    return null;
  }

  
  const getLinkClass = (path) => {
    return pathname === path 
      ? "text-yellow-300 underline underline-offset-8" 
      : "hover:text-yellow-200"; 
  };

  const popUpOpen = (type)=>{
    setpopUpPage(type)
    setDropdownOpen(false)
  }
  const router = useRouter();
  return (
    <>
    <nav className="bg-[#1400AE] fixed top-0 w-full z-40">
      <div className='max-w-[1440px] mx-auto px-6 md:px-10 py-3 flex items-center justify-between'>
        
        <div className='flex items-center gap-2'>
          <Image className='w-12 h-12' src={logo} alt="Logo" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 text-white text-lg font-medium items-center">
          <Link href="/" className={getLinkClass("/")}>Home</Link>
          <Link href="/About" className={getLinkClass("/About")}>About</Link>
          <Link href="/Services" className={getLinkClass("/Services")}>Services</Link>
          <Link href="/Plan" className={getLinkClass("/Plan")}>Plan</Link>
          <Link href="/Blog" className={getLinkClass("/Blog")}>Blog</Link>
          <Link href="/Community" className={getLinkClass("/Community")}>Community</Link>
          <Link href="/Contact" className={getLinkClass("/Contact")}>Contact Us</Link>

          {/* Profile Icon */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => {
                if (isAuthenticated) {
                  router.push("/profile")
                } else {
                  setDropdownOpen((prev) => !prev);
                }
              }}
              className="flex items-center gap-2 bg-white text-[#1400AE] p-2 rounded-full hover:bg-gray-200 transition"
            >
              <User size={24} />
            </button>

            {/* Dropdown */}
            {!isAuthenticated && dropdownOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-white rounded-md shadow-lg py-2">
                <div
                  href="/Register"
                  className="block px-4 py-2 text-[#1400AE] hover:bg-gray-100"
                  onClick={() => popUpOpen("register")}
                >
                  Register
                </div>
                <div
                  
                  className="block px-4 py-2 text-[#1400AE] hover:bg-gray-100"
                  onClick={() =>popUpOpen("login") }
                >
                  Login
                </div>
              </div>
            )}
          </div>
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
          <Link href="/" className={getLinkClass("/")} onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/About" className={getLinkClass("/About")} onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/Services" className={getLinkClass("/Services")} onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/Plan" className={getLinkClass("/Plan")} onClick={() => setIsOpen(false)}>Plan</Link>
          <Link href="/Blog" className={getLinkClass("/Blog")} onClick={() => setIsOpen(false)}>Blog</Link>
          <Link href="/Community" className={getLinkClass("/Community")} onClick={() => setIsOpen(false)}>Community</Link>
          <Link href="/Contact" className={getLinkClass("/Contact")} onClick={() => setIsOpen(false)}>Contact Us</Link>

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

    {popUpPage && ( <div className="fixed top-0 w-full z-50 bg-opacity-50">
     
     <Modal />
    </div>
    )  }
    </>
  );
};

export default Navbar;
