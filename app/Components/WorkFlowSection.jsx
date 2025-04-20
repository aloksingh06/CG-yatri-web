'use client'
import React from 'react'
import { workflowData } from '../data'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'

const WorkflowSection = () => {
  return (
    <div className="py-16 px-6 sm:px-10 md:px-16 lg:px-48 text-black">
      <h1 className="text-5xl font-bold mb-8 text-center md:text-left">Work Flow</h1>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-14">
        <button className="border border-black rounded-full px-6 py-2 hover:bg-black hover:text-white transition">
          Riders
        </button>
        <button className="border border-black rounded-full px-6 py-2 hover:bg-black hover:text-white transition">
          Drivers
        </button>
      </div>

      {/* Workflow Cards */}
      <div className="flex flex-col md:flex-row md:flex-nowrap justify-center items-center md:items-start gap-16">
        {workflowData.map((item, index) => (
          <div key={item.id} className="relative flex flex-col items-center md:items-start w-full md:w-[280px]">

            {/* Circle Image */}
            <div className="relative z-10 -mb-20">
              <Image src={item.image} alt="circle" width={100} height={100} className="rounded-full w-36 h-36 md:w-40 md:h-40 object-cover" />
            </div>

            {/* Card */}
            <div className="bg-[#f1f1f1] pt-24 pb-6 px-4 rounded-2xl shadow-md h-auto w-full max-w-[260px] text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">{item.title}</h2>
              <p className="text-gray-800 text-base md:text-lg">{item.description}</p>
            </div>

            {/* Arrow (only in desktop view) */}
            {index !== workflowData.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-[40px] transform -translate-y-1/2">
                <FaArrowRight className="text-black text-3xl md:text-4xl" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default WorkflowSection
