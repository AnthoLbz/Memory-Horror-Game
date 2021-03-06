import React from 'react'

function Card({ id, width, height, back,solved, cardsFront, flipped, handleClick, disabled, bonus}) {
    return (
      <div
        className={`flip-container ${flipped ? "flipped" : ""}`}
        style={{
          width,
          height,
        }}
        onClick={() => (disabled ? null : handleClick(id))}
      >
        <div className="flipper">
            <img 
            alt='cards horror'
                style={{
                    width, height
                }}
                className={flipped ? 'front' : 'back'}
                src={flipped || solved || bonus ? cardsFront : back }
            />
        </div>
      </div>
    );
}

export default Card
