"use client"
import React, { useState } from 'react'

const faqData = [
  {
    question: 'What is your return policy?',
    answer: 'Our return policy lasts 30 days from the date of purchase.'
  },
  {
    question: 'How long does shipping take?',
    answer: 'Shipping usually takes 5-7 business days depending on your location.'
  },
  {
    question: 'Do you offer customer support?',
    answer: 'Yes, we offer 24/7 customer support via email and chat.'
  }
];
const Plan = () => {
  
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div>
      <div className="bg-[#9cd6ff] rounded-3xl p-10 sm:p-10 md:p-28 flex flex-col md:flex-row items-center md:items-start justify-between ">
        
        {/* Left Side Content */}
        <div className="md:w-1/2 w-full space-y-6 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black leading-tight">
          CG Yatri Driver & Rider Plan
          </h1>
          <p className="text-base sm:text-lg text-gray-800">
          To ensure CG Yatri remains a reliable, zero-commission mobility platform, we’ve introduced affordable plans for both drivers and riders. These small, transparent contributions help us maintain smooth operations, improve features, and deliver a better travel experience — all while keeping 100% direct payments between riders and drivers.
          Whether you’re driving or riding, you’re helping build a smarter, independent transport network in Chhattisgarh.
          </p>

          
          

        <div>
          <h1>✅Zero Commission</h1>
          <h1>✅pay only if you take ride</h1>
          
        </div>
          
        </div>

        {/* Right Side Image Box */}
        <div className="md:w-1/2 w-full flex justify-center">
          <div className="bg-white w-[100%] sm:w-[20vw] h-[30vw] sm:h-[20vw] rounded-3xl shadow-md flex items-center justify-center">
            {/* Replace this with actual image if needed */}
            <span className="text-gray-400">Image here</span>
            {/* Example:
            <Image src="/bus-map.png" alt="Map" width={300} height={300} className="rounded-3xl object-cover" />
            */}
          </div>
        </div>
      </div>
      <div>
      <div className="max-w-5xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg p-4 cursor-pointer shadow-sm transition duration-300"
            onClick={() => toggleAccordion(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">{faq.question}</h3>
              <span
                className={`text-2xl transform transition-transform duration-300 ${
                  activeIndex === index ? 'rotate-180' : ''
                }`}
              >
                ▼
              </span>
            </div>
            {activeIndex === index && (
              <p className="text-gray-700 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>

      </div>
    </div>
  )
}

export default Plan