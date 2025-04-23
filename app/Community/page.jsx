import React from 'react'
import ScrollableSection from '../Components/ScrollableSection'

import {blogData} from "../data"
import JoinSection from '../Components/JoinSection'

const Community = () => {
  return (
    <div>
      <div className="bg-[#9cd6ff] rounded-3xl py-10 sm:py-10 md:py-20 px-10 sm:px-10 md:px-28 flex flex-col md:flex-row items-center md:items-start justify-between ">
        
        {/* Left Side Content */}
        <div className="md:w-1/2 w-full space-y-6 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black leading-tight">
          CG Yatri Driver & Rider Plan
          </h1>
          <p className="text-base sm:text-lg text-gray-800">
          CG Yatri isn’t just a travel app — it’s a community-driven initiative that brings together the people of Chhattisgarh under one platform. Our mission is to empower local drivers by giving them a fair and commission-free system, and to provide commuters with a smarter, safer, and more reliable travel experience. From Raipur’s busy streets to smaller towns, CG Yatri connects you with trusted local transport, making every ride feel personal, direct, and meaningful. We believe real change starts from the ground up — and with your support, we’re building a better way to move.
          </p>

          
          

        <div>
          <h1>✅Zero Commission</h1>
          <h1>✅pay only if you take ride</h1>
          
        </div>
          
        </div>

        {/* Right Side Image Box */}
        <div className="md:w-1/2 w-full flex justify-end items-end">
          <div className="bg-white w-[100%] sm:w-[20vw] h-[30vw] sm:h-[20vw] rounded-3xl shadow-md flex items-center justify-center">
            {/* Replace this with actual image if needed */}
            <span className="text-gray-400">Image here</span>
            {/* Example:
            <Image src="/bus-map.png" alt="Map" width={300} height={300} className="rounded-3xl object-cover" />
            */}
          </div>
        </div>
      </div>
      <div className=" rounded-3xl py-10 sm:py-10 md:py-20 px-10 sm:px-10 md:px-28 flex flex-col md:flex-row items-center md:items-start justify-between ">
        
        {/* Left Side Content */}
        <div className="md:w-1/2 w-full space-y-6 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black leading-tight">
          Meet (driver-name for review), an Auto Driver from Raipur
          </h1>
          <p className="text-base sm:text-lg text-gray-800">
          Earlier, I had to rely on agents and lost a share of my earnings. With CG Yatri, I get paid directly by customers. It’s simple, and I feel more independent
          </p>

          
          

        
          
        </div>

        {/* Right Side Image Box */}
        <div className="md:w-1/2 w-full flex justify-end items-end">
          <div className="bg-white w-[100%] sm:w-[20vw] h-[30vw] sm:h-[20vw] rounded-3xl shadow-md flex items-center justify-center">
            {/* Replace this with actual image if needed */}
            <span className="text-gray-400">Image here</span>
            {/* Example:
            <Image src="/bus-map.png" alt="Map" width={300} height={300} className="rounded-3xl object-cover" />
            */}
          </div>
        </div>
      </div>
    <div className='bg-[#9cd6ff] py-10 sm:py-10 md:py-20 px-10 sm:px-10 md:px-28'>
         <h1 className='text-3xl font-semibold mb-5'>Feedback: What Our Riders Say</h1>

         <ScrollableSection Data={blogData}/>
    </div>
    <div>
      <JoinSection />
    </div>
    </div>
  )
}

export default Community