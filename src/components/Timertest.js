import React from 'react'
import './Timer.css'

class Timer extends React.Component {
    state = {
        minutes: 3,
        seconds: 0
    }
    
    componentDidMount() {
        this.myInterval = setInterval(() => {
          const { seconds, minutes } = this.state

          if (seconds > 0) {
            this.setState(({ seconds }) => ({
              seconds: seconds - 1
            }))
          }
          if (seconds === 0) {
            if (minutes === 0) {
              clearInterval(this.myInterval)
            } else {
              this.setState(({ minutes }) => ({
                minutes: minutes - 1,
                seconds: 59
              }))
            }
          }
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
        const { minutes, seconds } = this.state

        return (
        <div>
            <h3>Your remaining time:</h3> 
            <p className= "timer">{ minutes }:{ seconds < 10 ? `0${ seconds }` : seconds }</p>
        </div>
        )
    }
}

export default Timer