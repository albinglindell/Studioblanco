import React, { useContext, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import BlancoLogoSvg from "../assets/logo/BlancoLogoSvg"
import dataContext from './store/data-context'
function Header() {
const toggleSwitch = useRef()
const context = useContext(dataContext) 

useEffect(()=>{
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme) {
      document.body.setAttribute('data-theme', currentTheme);
      if (currentTheme === 'dark') {
        toggleSwitch.current.checked = true;
      }else{
        
        toggleSwitch.current.checked = false;
      }
  }
},[])
  const darkmode= (e)=>{
      if (e.target.checked){
        context.darkmodeSwitch()
    }
    else {
        context.lightmodeSwitch()
    }  
  }
  return (
    <div>
        <header>
            <Link className='navLink' to={"/"}>
              <BlancoLogoSvg />
              <div className="line"></div>
              <nav className='navigation'>
                <HashLink className='Link' to={"/Artists#contentSection"}>Artists</HashLink>
                <HashLink className='Link' to={"/#contentSection"}>About us</HashLink>
              </nav>
                </Link>
            <input ref={toggleSwitch} type="checkbox" id="Darkmode" onClick={darkmode}/>
            <label className='logoLabel' htmlFor='Darkmode'>Toggle</label>
        </header>
    </div>
  )
}

export default Header