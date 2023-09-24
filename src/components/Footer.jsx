import React from 'react'
import BlancoLogoSvg from '../assets/logo/BlancoLogoSvg'

function Footer() {
    let date = new Date()
    let year = date.getFullYear()
  return (
    <footer>
      <div className="footerContainer">
      <div className="footerInfoContainer">
        <p>contact:</p>
        <ul className='footerInfo'>
          <li>
            Telefon: 08-583 553 62
          </li>
          <li>
            Mail: info@studioblancotattoo.com
          </li>
          <li>
            Adress: Ringvägen 85 -118 61 Stockholm
          </li>
          <li>
            T-Bana : Skanstull
          </li>
          <li>
            Pendeltåg : Södrastation
          </li>
        </ul>
        <p>{year} Studioblancotattoo</p>
      </div>
      <iframe
            className='streetmap'
            title='map'
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1018.2310408943746!2d18.06469915675808!3d59.30854066673699!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77f2193d4365%3A0x2e793057e54d8653!2sStudio%20Blanco%20Tattoo!5e0!3m2!1ssv!2sse!4v1695559426022!5m2!1ssv!2sse%22%20width=%22600%22%20height=%22450%22%20style=%22border:0;%22%20allowfullscreen=%22%22%20loading=%22lazy%22%20referrerpolicy=%22no-referrer-when-downgrade"
            allowfullscreen="false"
            loading="lazy"
          ></iframe>
      <div className="footerBlancoLogo">
      <BlancoLogoSvg />
      </div>
      </div>
    </footer>
  )
}

export default Footer