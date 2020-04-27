import React from 'react';

class UserTimer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        seconds: '00',
        value: '',
        isClicked : false
      }
     
      this.handleChange = this.handleChange.bind(this);
      this.startCountDown = this.startCountDown.bind(this);
      this.tick = this.tick.bind(this);
    }
  
    handleChange(event) {
      this.setState({
        value: event.target.value
      })
    }
  
    tick() {
      var min = Math.floor(this.secondsRemaining / 60);
      var sec = this.secondsRemaining - (min * 60);
  
      this.setState({
        value: min,
        seconds: sec,
      })
  
      if (sec < 10) {
        this.setState({
          seconds: "0" + this.state.seconds,
        })
  
      }
  
      if (min < 10) {
        this.setState({
          value: "0" + min,
        })
  
      }
  
      if (min === 0 & sec === 0) {
        clearInterval(this.intervalHandle);
      }
  
  
      this.secondsRemaining--
    }
  
    startCountDown() {
      this.intervalHandle = setInterval(this.tick, 1000);
      let time = this.state.value;
      this.secondsRemaining = time * 60;
      this.setState({
        isClicked : true
      })
    }
  
    render() {
      const clicked = this.state.isClicked;
      
        return (
        
              <div>
        <h3>Input your desired time</h3>
        <input type="number" value={this.state.value} onChange={this.state.handleChange} required />
        <h1>{this.state.value}:{this.state.seconds}</h1>
        <button disabled={!this.state.value} onClick={this.state.startCountDown}>Start</button>
      </div>
                
        );
      }
    }
  
  
  export default UserTimer