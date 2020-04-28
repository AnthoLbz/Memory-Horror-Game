import React from "react";
import './Timer.css'

class Timer extends React.Component {
    render() {
      return (
        <div>
          <h1 className="timer">{this.props.value}:{this.props.seconds}</h1>
        </div>
      );
    }
  }

  export default Timer