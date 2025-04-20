'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import logo from "../images/logo.png"

const FooterSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission here
  }

  return (
    <div className="bg-[#001F4D] text-white px-6 md:px-16 py-12">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
        {/* Left Text */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-4xl font-semibold leading-snug mb-6">
            Book and <br /> move, <br /> anywhere in the city
          </h2>
        </div>

        {/* Center Image */}
        <div className="flex-1 flex justify-center">
          <div className="w-40 h-40 bg-gray-300 rounded-md overflow-hidden">
            {/* Replace this with actual image */}
            <Image
              src={logo}
              alt="Center"
              width={160}
              height={160}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Right Form */}
        <div className="flex-1 w-full max-w-md">
          <h3 className="text-xl font-semibold mb-4">Connect with us</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="p-2 rounded-md text-black bg-[#a5d8ff]"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="p-2 rounded-md text-black bg-[#a5d8ff]"
              required

            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="p-2 rounded-md text-black bg-[#a5d8ff]"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-400 mt-12 pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
        <div>
          <h4 className="font-semibold mb-2">Product</h4>
          <p>Rider app</p>
          <p>Driver app</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">About Us</h4>
          <p>Who we are</p>
          <p>Privacy Policy</p>
          <p>Terms of use</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p>
            Get started with CG Yatri – <span className="underline cursor-pointer">Download the App</span>
          </p>
          <p>Email: <a href="mailto:cgyatri.help@gmail.com" className="underline">cgyatri.help@gmail.com</a></p>
          <p>Instagram: <a href="#" className="underline">@cg.yatri</a></p>
          <p>+91 91092 12345 | +91 78801 67890 | +91 97520 54321</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Registered Address</h4>
          <p>Govt. Engineering College, Raipur</p>
          <p>Chhattisgarh, India</p>
        </div>
      </div>
    </div>
  )
}

export default FooterSection
