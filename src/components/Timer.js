import React from 'react'
import './Timer.css'

function Timer ({minutes, seconds}) {

  return (
    <>
      <div className= "timerContainer">
          <h3>Your remaining time:</h3> 
          <p className= "timer">{ minutes }:{ seconds < 10 ? `0${ seconds }` : seconds }</p>
      </div>
    </>
  )
}

export default Timer