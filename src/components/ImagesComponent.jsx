import React from 'react'
import artists from "../assets/artists/artists"
import { Link } from 'react-router-dom'
function ImagesComponent() {
  return (
    <div className='artistPictureContainer'>
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