import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ImagesComponent from '../components/ImagesComponent'
import ProfilePage from '../components/ProfilePage'
import SvgAnimation from '../components/SvgAnimation'

function Home() {
  return (
    <div>
        <SvgAnimation />
        <Header/>
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