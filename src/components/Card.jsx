import React from 'react'

function Card ({id, width, height, back, front, flipped, handleClick}) {
    return <div
    className={`flip-container' ${flipped ? 'flipped' : ''}`}
    style={{
        width, height
    }}
    onClick={() => handleClick(id)} >
        <div className="flipper">
            <img
                style={{
                    width, height
                }}
                className={flipped ? 'front' : 'back'}
                src={flipped ? front : back} 
            />
        </div>
    </div>
}

export default Card
