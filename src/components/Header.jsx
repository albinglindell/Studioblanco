import React from 'react'
import logos from "../assets/logo/logos"
function Header() {
    console.log(logos)
  return (
    <div>
        <header>
            <img src={logos[0]} alt="" />
        </header>
    </div>
  )
}

export default Header