import React, { useContext } from "react";
import loop from "../assets/videos/loop.mp4";
import lightMode from "../assets/videos/whitemode.mp4";
import dataContext from "./store/data-context";
function VideoComponent() {
  const context = useContext(dataContext);
  return (
    <div className="videoComponent">
      <div className="filterOverlay"></div>
      {context.darkmode ? (
        <video className="video" autoPlay={true} muted src={loop} loop></video>
      ) : (
        <video
          className="video"
          autoPlay={true}
          muted
          src={lightMode}
          loop
        ></video>
      )}
    </div>
  );
}

export default VideoComponent;
