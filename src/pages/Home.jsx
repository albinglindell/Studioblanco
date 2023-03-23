import React, {  useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ImagesComponent from '../components/ImagesComponent'
import ProfilePage from '../components/ProfilePage'
import SvgAnimation from '../components/SvgAnimation'
import VideoComponent from '../components/VideoComponent'
import HeaderImageComponent from "../components/HeaderImageComponent"

function Home() {
  const [device, setDevice] = useState(true)

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
        <section>
        <Routes>
            <Route path='/' element={<ImagesComponent />}/>
            <Route  path='/:name' element={<ProfilePage />}/>
        </Routes>
        </section>
        <Footer />
    </div>
  )
}

export default Home