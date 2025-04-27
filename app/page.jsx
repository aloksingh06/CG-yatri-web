import Homepage2 from '@/app/Components/Homepage2'
import OurServices from '@/app/Components/OurServices'
import Landingpage from '@/app/Components/Landingpage'
import React from 'react'
import QualitySection from './Components/qualitySection'
import WorkflowSection from './Components/WorkFlowSection'
import JoinSection from './Components/JoinSection'
import AboutSection from './Components/AboutSection'
import FooterSection from './Components/FooterSection'


const Home = () => {
  return (
   
    <div className="bg-gray-100  ">
      <Landingpage />
      <Homepage2 />
      {/* <OurServices /> */}
      {/* <QualitySection /> */}
      {/* <WorkflowSection /> */}
      {/* <JoinSection /> */}
      {/* <AboutSection /> */}
      <FooterSection />
    </div>
    
  )
}

export default Home