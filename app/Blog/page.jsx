import React from 'react'
import { blogData} from '../data'
import Image from 'next/image'
import ScrollableSection from '../Components/ScrollableSection'

import autoimage from '../images/autoimage.jpg'
import FooterSection from '../Components/FooterSection'
const Blog = () => {

  
  return (
    <div  >
        <div className='py-16 px-6 md:px-40'>
        <div className='flex flex-col gap-5'>
          <h1 className='text-5xl font-semibold'>Latest Updates & Travel Tips</h1>
          <p className='text-gray-700 text-lg'>

          Get the latest news, travel tips, and updates about smart commuting in Chhattisgarh.
          </p>
          <p className='text-xl font-semibold'>At CG Yatri, we believe in making travel simple and stress-free. Whether you're a daily commuter or an occasional rider, our blog brings you helpful tips, system updates, and insights to make your journey smoother across Raipur and beyond.</p>
        </div>
        <div>
       <ScrollableSection Data={blogData} />
        </div>
        </div>
        <div className='flex flex-col lg:flex-row gap-10 justify-between items-center my-16 bg-[#7ec0fb] p-10  shadow-md py-16 px-6 md:px-40'>
          <div className='w-full lg:w-1/2 flex flex-col gap-5'>
          <h1 className='text-5xl font-semibold'>How CG Yatri is Making Daily Travel Easier in Raipur</h1>
          <p className='text-gray-700 text-lg'>

          From direct driver payments to live bus tracking, know how CG Yatri is changing the way Raipur commutes.
          </p>
          <h1>
          CG Yatri is transforming public transport in Raipur by putting power directly in the hands of commuters and drivers. With features like live bus tracking, real-time vehicle availability, and easy ticket booking, daily travel has never been this smooth.
What sets us apart is direct driver payments — no third-party commissions, no hidden charges. It builds trust, transparency, and supports the local driver community.
Whether you're commuting by bus, auto, or cab, CG Yatri ensures a safe, reliable, and hassle-free experience, all in one simple app.
          </h1>
          </div>
          <div className='w-full lg:w-1/2 flex justify-center'>
              <Image
                           src={autoimage}
                           alt='blog-image'
                           width={400}
                           height={150}
                           className="rounded-xl object-cover shadow-md"
                         />
          </div>
        </div>

        {/* real story */}
         <div className='py-16 px-6 md:px-40    '>
        <div className='flex flex-col gap-5'>
        <h1 className='text-5xl font-semibold'>Real Stories, Real Journeys</h1>
        <h1>Discover how people across Raipur are commuting smarter with CG Yatri.</h1>
        </div>
        <div>
          <ScrollableSection Data={blogData} />
         </div>
         </div>
        

        {/* Footer */}
        <div>
          <FooterSection />
        </div>
    </div>
  )
}

export default Blog