import React from 'react'
import artists from "../assets/artists/artists"
import { Link } from 'react-router-dom'
import VideoComponent from './VideoComponent'
function ImagesComponent() {
  return (
    <div className='artistPictureContainer'>
      <VideoComponent />
          {artists.map(artist => { 
            return(
                <Link className='link' to={`/${artist.name}`}>
                  <img src={`${artist.image_sm}`}alt="" />
                  <h2>{`${artist.name}`}</h2>
                </Link>
            )
          })}
    </div>
  )
}

export default ImagesComponent