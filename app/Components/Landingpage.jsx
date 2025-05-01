"use client";
import React from "react";
import Image from "next/image";
// import autoImage from '../images/auto-ride.png' // Yeh tumhara Auto waala image import kar lena
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useRouter } from "next/navigation";

const LandingPage = () => {
  const router = useRouter();

  return (
    <section className="md:min-h-screen h-content  mt-22 md:mt-0 flex flex-col md:flex-row items-center bg-blue-100 justify-around px-4 sm:px-6 md:px-16 py-8 md:py-0 overflow-hidden">
      {/* Left Content */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center md:items-start text-center md:text-left gap-5 max-w-xl"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-snug md:leading-tight">
          Travel Smart in <br /> Chhattisgarh
        </h1>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl">
          Book buses, autos, taxis, and cabs easily. Track live locations,
          explore routes, and travel smarter with CG Yatri.
        </p>

        {/* Options Buttons */}
        <div className="flex gap-3 flex-wrap justify-center md:justify-start">
          {["Auto", "Cab", "Bus"].map((item) => (
            <button
              key={item}
              className="bg-gray-100 text-black border rounded-full px-5 py-2 text-sm sm:text-base font-semibold hover:scale-105 transition-transform duration-300"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 flex-wrap justify-center md:justify-start">
          {/* Download App Button */}
          <a
            href="/dummy-app-link.apk"
            download
            className="flex items-center gap-2 bg-[#1400AE] hover:bg-[#100092] text-white font-semibold py-3 px-6 rounded-xl shadow transition text-sm sm:text-base"
          >
            <Download size={18} />
            Download App
          </a>
          <button
            onClick={() => router.push("/Services")}
            className="bg-[#1400AE] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#100092] transition-colors duration-300 text-sm sm:text-base"
          >
            Explore Services
          </button>
        </div>
      </motion.div>

      {/* Right Side Image */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mt-10 md:mt-0"
      >
        <Image
          src="/images/homeimg.svg"
          alt="Auto Ride"
          width={500}
          height={300}
          className="w-full max-w-[300px]  sm:max-w-sm md:max-w-md"
        />
      </motion.div>
    </section>
  );
};

export default LandingPage;
