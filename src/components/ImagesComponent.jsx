import React from 'react'
import artists from "../assets/artists/artists"
// import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

function ImagesComponent() {
  return (
    <div className='artistsComponent'>
      <h1 className='artistHeading'>Tattoo artists</h1>
      <div className="artistPictureContainer">
          {artists.map(artist => { 
            return(
                <HashLink className='link' to={`/${artist.name}#contentSection`}>
                  <img className='artistImg' src={`${artist.image_sm}`}alt="" />
                  <h2>{`${artist.name}`}</h2>
                </HashLink>
            )
          })}
      </div>
    </div>
  )
}

export default ImagesComponent