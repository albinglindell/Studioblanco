import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import logos from "../assets/logo/logos"
function Header() {
const toggleSwitch = useRef()
const [logo, setLogo]= useState(logos[0])

useEffect(()=>{
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme) {
      document.body.setAttribute('data-theme', currentTheme);
      if (currentTheme === 'dark') {
        setLogo(logos[1])
        toggleSwitch.current.checked = true;
      }else{
        setLogo(logos[0])
        toggleSwitch.current.checked = false;
      }
  }
},[])
  const darkmode= (e)=>{
      if (e.target.checked){
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', "dark"); //add this
        setLogo(logos[1])
    }
    else {
        document.body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', "light"); //add this
        setLogo(logos[0])
    }  
  }
  return (
    <div>
        <header>
            <Link to={"/"}>
                <img src={logo} alt="logo" />
            </Link>
            <input ref={toggleSwitch} type="checkbox" id="Darkmode" onClick={darkmode}/>
        </header>
    </div>
  )
}

export default Header