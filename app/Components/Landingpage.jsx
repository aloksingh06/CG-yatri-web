import React from 'react'

const Landingpage = () => {
  return (
  <div className='py-16 px-16 sm:px-6 md:px-26'>
      <div className="bg-[#9cd6ff] rounded-3xl p-10 sm:p-10 md:p-20 flex flex-col md:flex-row items-center md:items-start justify-between ">
        
        {/* Left Side Content */}
        <div className="md:w-1/2 w-full space-y-6 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black leading-tight">
            Travel Smart in <br className="hidden sm:block" /> Chhattisgarh
          </h1>
          <p className="text-base sm:text-lg text-gray-800">
            Book buses, Auto, Taxi, cab, track live locations & <br />explore routes easily
          </p>

          {/* Light Rounded Buttons */}
          <div className="flex justify-center md:justify-start flex-wrap gap-4">
            <div className="bg-[#add9ff] w-16 h-10 rounded-full"></div>
            <div className="bg-[#add9ff] w-16 h-10 rounded-full"></div>
            <div className="bg-[#add9ff] w-16 h-10 rounded-full"></div>
          </div>

          {/* CTA Buttons */}
          <div className="flex justify-center md:justify-start flex-wrap gap-4 pt-2">
            <button className="bg-[#1296f5] text-white px-6 py-3 rounded-md shadow-md text-sm sm:text-base">
              Get Started
            </button>
            <button className="bg-[#1296f5] text-white px-6 py-3 rounded-md shadow-md text-sm sm:text-base">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side Image Box */}
        <div className="md:w-1/2 w-full flex justify-center">
          <div className="bg-white w-[100%] sm:w-[30vw] h-[30vw] sm:h-[30vw] rounded-3xl shadow-md flex items-center justify-center">
            {/* Replace this with actual image if needed */}
            <span className="text-gray-400">Image here</span>
            {/* Example:
            <Image src="/bus-map.png" alt="Map" width={300} height={300} className="rounded-3xl object-cover" />
            */}
          </div>
        </div>
      </div>
  </div>
  )
}

export default Landingpage