import React from 'react'
import { Link } from 'react-router-dom'
import logos from "../assets/logo/logos"
function Header() {
  return (
    <div>
        <header>
            <Link to={"/"}>
                <img src={logos[0]} alt="" />
            </Link>
        </header>
    </div>
  )
}

export default Header