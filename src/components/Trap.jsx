import React from "react";
import usePortal from "react-cool-portal";
import "./modalScare.css";
import './trap.css'
import bearTrap from '../images/bearTrap.png'


function Trap() {
  const { Portal, show, } = usePortal({
    defaultShow: false,
  }); 
  return (
    <div>
      {show()}
      <Portal id="size">
        <div className='containerTrap'>
          <img className='imageBearTrap' src={bearTrap} alt="bearTrap"/>
          <div className='textTrap'>
          <p>You've fallen right into my trap !</p>
          <p>Everything is shuffled now, Asshole...</p></div>
          <audio src="https://www.cjoint.com/doc/20_05/JEmpb65Hmen_wickedwitchlaugh.mp3" type="audio/mpeg" autoplay= "true"/>
        </div>
      </Portal>
      
    </div>
  );
}

export default Trap;
