import React from 'react'
import artists from "../assets/artists/artists"
import { Link } from 'react-router-dom'
function ImagesComponent() {
    console.log(artists)
  return (
    <div className='artistPictureContainer'>
          {artists.map(artist => { 
            return(
                <Link to={`/${artist.name}`}>
                  <img src={`${artist.image_sm}`}alt="" />
                </Link>
            )
          })}
    </div>
  )
}

export default ImagesComponent