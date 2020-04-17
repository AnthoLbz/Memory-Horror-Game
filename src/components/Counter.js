import React from 'react'
import './Counter.css'

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    increment = () => {
    // ajouter algo lié aux cartes : 1 essai = 2 cartes retournées
        this.setState ({
            count: this.state.count +1
        })
    }

    // en cas de bonus ?
    decrement = () => {
        this.setState ({
            count: this.state.count -1
        })
    }

    render() {
        return(
            <>
                <div className= "counterContainer">
                    <h3>Your moves are watched</h3>
                    <p className= "counter">{this.state.count}</p>
                </div>
            </>
        )
    }
}



export default Counter