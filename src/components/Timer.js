import React from "react";
import './Timer.css'

<<<<<<< HEAD
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
=======
class Timer extends React.Component {
    render() {
      return (
        <div>
          <h1 className="timer">{this.props.value}:{this.props.seconds}</h1>
        </div>
      );
    }
  }
>>>>>>> feature/usertimer

  export default Timer