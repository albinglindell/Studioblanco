import React, { useState, useEffect } from 'react'
import loop from "../assets/videos/loop.mp4"
import lightMode from "../assets/videos/whitemode.mp4"
function VideoComponent() {
  const [darkmode, setDarkmode] = useState()
  useEffect(()=>{
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.body.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
          setDarkmode(true)
        }else{
          setDarkmode(false)
        }
    }
  },[])
  return (
    <div className='videoComponent'>
      {
        darkmode ?  <video className='video' autoPlay muted src={loop} loop></video>
        :
            <video className='video' autoPlay muted src={lightMode} loop></video>
      }
           
    </div>
  )
}

export default VideoComponent