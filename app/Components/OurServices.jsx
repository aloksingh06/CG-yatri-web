import React from 'react'
import autoimage from '../Images/autoimage.jpg'

import { servicesData } from "../data"
import Image from 'next/image'


const OurServices = () => {
// console.log(serviceData.id)
  return (
    <div className='py-16 px-16 sm:px-6 md:px-26'>
      <div className='flex justify-between items-center px-10 py-5'>
        <h1 className='text-4xl font-semibold'>Our Services</h1>

        <div className='bg-[#e4f3ff] text-[#1296f5] px-4 py-2 rounded-xl text-lg font-semibold border-2'>
          See all
        </div>
      </div>
    {servicesData.map((service) => (
      <div key={service.id} className="bg-white rounded-3xl shadow-md p-10 m-4 flex justify-center">
        <div className='w-1/2 '>
        <Image src={autoimage} alt={service.title} className="w-94 h-58 mb-4 object-cover rounded-xl"  />
        </div>
      <div className='w-1/2 flex flex-col justify-start p-5 '> 
      <h1 className="text-4xl font-semibold mb-2">{service.title}</h1>
        <p className="text-gray-700 ">{service.description}</p>
        <div className='flex gap-10'>
        <button className="bg-[#1296f5] text-white px-4 py-2 rounded-md mt-4">Download</button>
        <button className="bg-[#1296f5] text-white px-4 py-2 rounded-md mt-4">Learn More</button>
        </div>
      </div>
      </div>
    ))}
    </div>
  )
}

export default OurServices;