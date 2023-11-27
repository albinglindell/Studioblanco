import React from 'react'
import videoLogo from "../assets/videos/flimmer.mp4"

function FlimmerLogo() {
  return (
    <div className='flimmerContainer'>
         <video
          className="videoFlimmer"
          autoPlay={true}
          muted
          src={videoLogo}
          loop
        ></video>
    </div>
  )
}

export default FlimmerLogo