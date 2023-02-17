import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '../components/Header'
import ImagesComponent from '../components/ImagesComponent'
import ProfilePage from '../components/ProfilePage'

function Home() {
  return (
    <div>
        <Header/>
        <Routes>
            <Route path='/' element={<ImagesComponent />}/>
            <Route  path='/:name' element={<ProfilePage />}/>
        </Routes>
    </div>
  )
}

export default Home