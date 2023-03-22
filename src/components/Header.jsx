import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import BlancoLogoSvg from "../assets/logo/BlancoLogoSvg"
function Header() {
const toggleSwitch = useRef()


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
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', "dark"); 
        
    }
    else {
        document.body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', "light"); 
        
    }  
  }
  return (
    <div>
        <header>
            <Link className='Link' to={"/"}>
              <BlancoLogoSvg />
              <div className="line"></div>
            </Link>
            <input ref={toggleSwitch} type="checkbox" id="Darkmode" onClick={darkmode}/>
            <label className='logoLabel' htmlFor='Darkmode'>Toggle</label>
        </header>
    </div>
  )
}

export default Header