import Homepage2 from '@/Components/Homepage2'
import Landingpage from '@/Components/Landingpage'
import React from 'react'

const Home = () => {
  return (
   
    <div className="bg-gradient-to-b from-[#edf6fe] to-[#b3dfff] py-16 px-16 sm:px-6 md:px-26">
      <Landingpage />
      <Homepage2 />
    </div>
    
  )
}

export default Home