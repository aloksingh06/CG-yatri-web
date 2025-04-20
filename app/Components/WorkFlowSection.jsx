'use client'
import React from 'react'
import { workflowData } from '../data'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'

const WorkflowSection = () => {
  return (
   <div className='py-16 px-16 sm:px-6 md:px-26'>
     <div className=" min-h-screen px-16 py-16 text-black">
      <h1 className="text-4xl font-bold mb-8">Work Flow</h1>

      {/* Buttons */}
      <div className="flex gap-4 mb-14">
        <button className="border border-black rounded-full px-6 py-2 hover:bg-black hover:text-white transition">
          Riders
        </button>
        <button className="border border-black rounded-full px-6 py-2 hover:bg-black hover:text-white transition">
          Drivers
        </button>
      </div>

      {/* Workflow Cards */}
      <div className="flex flex-wrap md:flex-nowrap justify-center items-start gap-12">
        {workflowData.map((item, index) => (
          <div key={item.id} className="relative flex flex-col pt-10 ml-20  w-[280px]">

            {/* Blue Circle */}
            

            {/* Card */}
            <div className="bg-[#f1f1f1] pb-6 p-4 rounded-2xl shadow-md h-[250px] w-52 flex flex-col justify-start">
            <div className='absolute top-[-10px] left-[-1/2] transform -translate-x-1/2'>
            <Image src={item.image} alt="circle" width={100} height={100} className="rounded-full w-40 h-40" />
            </div>
              <h2 className="text-3xl font-bold mb-3 text-end mr-5  ">{item.title}</h2>
              <p className="text-gray-800 mt-14 text-lg">{item.description}</p>
            </div>

            {/* Arrow */}
            {index !== workflowData.length - 1 && (
              <div className="hidden md:block absolute top-3/4 -right-[40px] transform -translate-y-1/2">
                <FaArrowRight className="text-black text-4xl" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
   </div>
  )
}

export default WorkflowSection
