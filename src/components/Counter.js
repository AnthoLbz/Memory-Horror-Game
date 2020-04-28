import React from 'react'
import './Counter.css'

function Counter({count}){
        return(
            <>
                <div className= "counterContainer">
                    <h3>Your moves are watched</h3>
                    <p className= "counter">{count}</p>
                </div>
            </>
        )
    }




export default Counter