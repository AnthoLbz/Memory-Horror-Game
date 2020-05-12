import React from "react";
import usePortal from "react-cool-portal";
import "./modalScare.css";

function ModalScare() {
  const { Portal, show, } = usePortal({
    defaultShow: false,
  }); 
  return (
    <div>
      {show()}
      <Portal>
        <div className="scare">
          <img src="https://zupimages.net/up/20/15/fs41.jpg" alt="zombie" />
          <audio src="https://www.cjoint.com/doc/20_05/JEmks4ddS2n_nmh-scream1.mp3" type="audio/mpeg" autoplay= "true"/>
        </div>
      </Portal>
      
    </div>
  );
}

export default ModalScare;
