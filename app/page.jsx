"use client"
import Homepage2 from '@/app/Components/Homepage2'
import OurServices from '@/app/Components/OurServices'
import Landingpage from '@/app/Components/Landingpage'
import React, { useContext, useEffect } from 'react'
import QualitySection from './Components/qualitySection'
import WorkflowSection from './Components/WorkFlowSection'
import JoinSection from './Components/JoinSection'
import AboutSection from './Components/AboutSection'
import FooterSection from './Components/FooterSection'
import { AuthContext } from './Context/AuthContext'
import Login from './Login/page'
import axios from 'axios'
import api from '@/utils/api'


const Home = () => {
  const { setIsAuthenticated, setUser, isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    const getUser = async () => {
      await api
        .get("/user/me")
        .then((res) => {
          
          setUser(res.data.user);
          setIsAuthenticated(true);
         
        })
        .catch((err) => {
          setUser(null);
          setIsAuthenticated(false);
          
          console.error(err);
        });
    };
    getUser();
  }, []);
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