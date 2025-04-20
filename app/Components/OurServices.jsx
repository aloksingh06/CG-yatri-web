import React from 'react'
import autoimage from '../Images/autoimage.jpg'
import { servicesData } from "../data"
import Image from 'next/image'

const OurServices = () => {
  return (
    <div className='py-16 px-6 md:px-16'>
      {/* Header */}
      <div className='flex flex-col sm:flex-row justify-between items-center px-4 sm:px-10 py-5 gap-4 sm:gap-0'>
        <h1 className='text-3xl sm:text-4xl font-semibold text-center sm:text-left'>
          Our Services
        </h1>

        <div className='bg-[#e4f3ff] text-[#1296f5] px-4 py-2 rounded-xl text-lg font-semibold border-2 cursor-pointer'>
          See all
        </div>
      </div>

      {/* Cards */}
      {servicesData.map((service) => (
        <div
          key={service.id}
          className="bg-white rounded-3xl shadow-md p-6 sm:p-10 my-6 flex flex-col lg:flex-row justify-center items-center gap-6"
        >
          {/* Image */}
          <div className='w-full lg:w-1/2 flex justify-center'>
            <Image
              src={autoimage}
              alt={service.title}
              className="rounded-xl object-cover
                w-[350px] h-[230px] 
                sm:w-[400px] sm:h-[270px]
                lg:w-[375px] lg:h-[245px]
              "
            />
          </div>

          {/* Text Content */}
          <div className='w-full lg:w-1/2 flex flex-col justify-start gap-4 text-center lg:text-left'>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
              {service.title}
            </h1>
            <p className="text-gray-700 text-sm sm:text-base">
              {service.description}
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
              <button className="bg-[#1296f5] text-white px-4 py-2 rounded-md">
                Download
              </button>
              <button className="bg-[#1296f5] text-white px-4 py-2 rounded-md">
                Learn More
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default OurServices
