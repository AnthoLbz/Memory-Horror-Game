import React from 'react'

function Card({ id, width, height, back,solved, cardsFront, flipped, handleClick, disabled }) {
    return <div
        className={`flip-container ${flipped ? 'flipped' : ''}`}
        style={{
            width, height
        }}
        onClick={() => disabled ? null : handleClick(id)} // si le board est disabled, on n'autorise pas le clic (42 min 30), sinon handleClick
        >
        <div className="flipper">
            <img
                style={{
                    width, height
                }}
                className={flipped ? 'front' : 'back'}
                src={flipped || solved ? cardsFront : back }
            />
        </div>
    </div>
}

export default Card
