import React from 'react'

function Footer() {
    let date = new Date()
    let year = date.getFullYear()
  return (
    <footer>
        <p>contact:</p>
        <ul>
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
    </footer>
  )
}

export default Footer