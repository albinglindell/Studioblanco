import React, {  useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ImagesComponent from '../components/ImagesComponent'
import ProfilePage from '../components/ProfilePage'
import SvgAnimation from '../components/SvgAnimation'
import VideoComponent from '../components/VideoComponent'
import HeaderImageComponent from "../components/HeaderImageComponent"
import AboutUs from '../components/AboutUs'

function Home() {
  const [device, setDevice] = useState()
  useEffect(()=>{
    if(window.innerWidth < 600){
      setDevice(false)
    }else{
      setDevice(true) 
    }
  },[])


    window.addEventListener("resize", ()=>{
      if(window.innerWidth < 600){
        setDevice(false)
      }else{
        setDevice(true) 
      }

    })

  return (
    <div>
        <SvgAnimation />
        <section>
          <Header/>
          {device ? <VideoComponent />: <HeaderImageComponent /> }
        </section>
        <section id='contentSection'>
        <Routes>
            <Route path='/Artists' element={<ImagesComponent />}/>
            <Route  path='/' element={<AboutUs />}/>
            <Route  path='/:name' element={<ProfilePage />}/>
        </Routes>
        </section>
        {/* <div className="footerSection"></div> */}
          <Footer />
    </div>
  )
}

export default Home