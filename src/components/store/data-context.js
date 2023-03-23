import React, { useState, useEffect } from 'react';

const dataContext = React.createContext({
  darkmode:Boolean,
  darkmodeSwitch: ()=>{},
  lightmodeSwitch: ()=>{},
});

export const DataContextProvider = (props) => {
    const [darkmode, setDarkmode] = useState();

  const darkmodeSwitch = ()=>{
    document.body.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', "dark");
    setDarkmode(true) 
  }
  const lightmodeSwitch = ()=>{
    document.body.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', "light"); 
    setDarkmode(false)
  }

  useEffect(() => {
    const fetchDarkmode = async()=>{
        const currentTheme = localStorage.getItem('theme');
            if (currentTheme) {
                document.body.setAttribute('data-theme', currentTheme);
                if (currentTheme === 'dark') {
                    setDarkmode(true);
                }else{
                    setDarkmode(false);
                }
            }
        
    }
    
  fetchDarkmode()
  }, []);



  return (
    <dataContext.Provider
      value={{
        darkmode,
        darkmodeSwitch,
        lightmodeSwitch,
      }}
    >
      {props.children}
    </dataContext.Provider>
  );
};

export default dataContext;