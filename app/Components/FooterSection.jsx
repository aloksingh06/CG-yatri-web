
"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const router = useRouter();

  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8 px-6">
      {/* Download Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between max-w-7xl mx-auto mb-16 gap-8"
      >
        <div>
          <h2 className="text-2xl font-bold mb-2">Download CG Yatri App</h2>
          <p className="text-gray-300 mb-4">
            The complete transport solution for Raipur - buses, autos, and cabs all in one app with live tracking and fixed fares.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => window.open("https://www.apple.com/app-store/", "_blank")}
              className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:opacity-80 transition"
            >
              <img src="/apple-logo.svg" alt="App Store" className="h-5 w-5" />
              App Store
            </button>
            <button
              onClick={() => window.open("https://play.google.com/store", "_blank")}
              className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:opacity-80 transition"
            >
              <img src="/google-play.svg" alt="Google Play" className="h-5 w-5" />
              Google Play
            </button>
          </div>
        </div>

        {/* Scan to Download Button */}
        <button
          onClick={() => router.push("/scanner")}
          className="bg-green-500 text-white font-semibold px-6 py-4 rounded-lg hover:bg-green-600 transition"
        >
          📷 Scan to Download
          <p className="text-xs">Use your phone camera</p>
        </button>
      </motion.div>

      {/* Footer Links */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto mb-8"
      >
        {/* Column 1 */}
        <div>
          <h3 className="text-lg font-bold mb-4">CG Yatri</h3>
          <p className="text-gray-300 mb-4">
            Raipur's smart transport solution offering buses, autos, and cabs with live tracking and fixed fares.
          </p>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank">
              <Facebook className="h-5 w-5 hover:text-blue-400" />
            </a>
            <a href="https://instagram.com" target="_blank">
              <Instagram className="h-5 w-5 hover:text-pink-400" />
            </a>
            <a href="https://twitter.com" target="_blank">
              <Twitter className="h-5 w-5 hover:text-blue-300" />
            </a>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-bold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:underline cursor-pointer" onClick={() => router.push("/city-buses")}>City Buses</li>
            <li className="hover:underline cursor-pointer" onClick={() => router.push("/auto-rickshaws")}>Auto Rickshaws</li>
            <li className="hover:underline cursor-pointer" onClick={() => router.push("/premium-cabs")}>Premium Cabs</li>
            <li className="hover:underline cursor-pointer" onClick={() => router.push("/monthly-passes")}>Monthly Passes</li>
            <li className="hover:underline cursor-pointer" onClick={() => router.push("/student-discounts")}>Student Discounts</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-bold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:underline cursor-pointer" onClick={() => router.push("/About")}>About Us</li>
            <li className="hover:underline cursor-pointer" onClick={() => router.push("/careers")}>Careers</li>
            <li className="hover:underline cursor-pointer" onClick={() => router.push("/press")}>Press</li>
            <li className="hover:underline cursor-pointer" onClick={() => router.push("/Blog")}>Blog</li>
            <li className="hover:underline cursor-pointer" onClick={() => router.push("/Contact")}>Contact Us</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-lg font-bold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:underline cursor-pointer" onClick={() => router.push("/help-center")}>Help Center</li>
            <li className="hover:underline cursor-pointer" onClick={() => router.push("/safety")}>Safety</li>
            <li className="hover:underline cursor-pointer" onClick={() => router.push("/community-guidelines")}>Community Guidelines</li>
            <li className="hover:underline cursor-pointer" onClick={() => router.push("/terms-of-service")}>Terms of Service</li>
            <li className="hover:underline cursor-pointer" onClick={() => router.push("/privacy-policy")}>Privacy Policy</li>
          </ul>
        </div>
      </motion.div>

      {/* Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center text-gray-400 text-sm"
      >
        © 2025 CG Yatri. All rights reserved. Made with ❤️ for Raipur
      </motion.div>
    </footer>
  );
};

export default Footer;



















// 'use client'
// import Image from 'next/image'
// import React, { useState } from 'react'
// import logo from "../images/logo.png"

// const FooterSection = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     // Handle form submission here
//   }

//   return (
//     <div className="bg-[#001F4D] text-white px-6 md:px-16 py-12">
//       <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
//         {/* Left Text */}
//         <div className="flex-1 text-center lg:text-left">
//           <h2 className="text-4xl font-semibold leading-snug mb-6">
//             Book and <br /> move, <br /> anywhere in the city
//           </h2>
//         </div>

//         {/* Center Image */}
//         <div className="flex-1 flex justify-center">
//           <div className="w-40 h-40 bg-gray-300 rounded-md overflow-hidden">
//             {/* Replace this with actual image */}
//             <Image
//               src={logo}
//               alt="Center"
//               width={160}
//               height={160}
//               className="object-cover w-full h-full"
//             />
//           </div>
//         </div>

//         {/* Right Form */}
//         <div className="flex-1 w-full max-w-md">
//           <h3 className="text-xl font-semibold mb-4">Connect with us</h3>
//           <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="p-2 rounded-md text-black bg-[#a5d8ff]"
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               value={formData.email}
//               onChange={handleChange}
//               className="p-2 rounded-md text-black bg-[#a5d8ff]"
//               required

//             />
//             <textarea
//               name="message"
//               placeholder="Your Message"
//               value={formData.message}
//               onChange={handleChange}
//               rows={4}
//               className="p-2 rounded-md text-black bg-[#a5d8ff]"
//               required
//             ></textarea>
//             <button
//               type="submit"
//               className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
//             >
//               Send
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Footer Bottom */}
//       <div className="border-t border-gray-400 mt-12 pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
//         <div>
//           <h4 className="font-semibold mb-2">Product</h4>
//           <p>Rider app</p>
//           <p>Driver app</p>
//         </div>
//         <div>
//           <h4 className="font-semibold mb-2">About Us</h4>
//           <p>Who we are</p>
//           <p>Privacy Policy</p>
//           <p>Terms of use</p>
//         </div>
//         <div>
//           <h4 className="font-semibold mb-2">Contact</h4>
//           <p>
//             Get started with CG Yatri – <span className="underline cursor-pointer">Download the App</span>
//           </p>
//           <p>Email: <a href="mailto:cgyatri.help@gmail.com" className="underline">cgyatri.help@gmail.com</a></p>
//           <p>Instagram: <a href="#" className="underline">@cg.yatri</a></p>
//           <p>+91 91092 12345 | +91 78801 67890 | +91 97520 54321</p>
//         </div>
//         <div>
//           <h4 className="font-semibold mb-2">Registered Address</h4>
//           <p>Govt. Engineering College, Raipur</p>
//           <p>Chhattisgarh, India</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default FooterSection
