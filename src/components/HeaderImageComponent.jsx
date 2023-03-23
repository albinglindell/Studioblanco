import React, { useContext } from "react";
import dataContext from "./store/data-context";
function HeaderImageComponent() {
  const context = useContext(dataContext);
  console.log(context.darkmode);
  return (
    <div className="HeaderImageComponent">
      {context.darkmode ? (
        <img className="image" src="https://wallpaperaccess.com/full/2596699.jpg" alt="statue" />
      ) : (
        <img className="image" src="https://c1.wallpaperflare.com/preview/568/29/150/winged-victory-of-samothrace-winged-victory-marble.jpg" alt="statues" />
      )}
    </div>
  );
}

export default HeaderImageComponent;
