import Homepage2 from '@/app/Components/Homepage2'
import OurServices from '@/app/Components/OurServices'
import Landingpage from '@/app/Components/Landingpage'
import React from 'react'
import QualitySection from './Components/qualitySection'
import WorkflowSection from './Components/WorkFlowSection'

const Home = () => {
  return (
   
    <div className="bg-gradient-to-b from-[#edf6fe] to-[#b3dfff] ">
      <Landingpage />
      <Homepage2 />
      <OurServices />
      <QualitySection />
      <WorkflowSection />
    </div>
    
  )
}

export default Home