import React from 'react';
import Card from './Card'



function Board ({cards, cardsBack, flipped, handleClick, disabled, solved }) {
    return(
        <div className='board'>
            {cards.map((card) => (
                <Card
                    id={card.id}
                    width={120}
                    height={170}
                    back={cardsBack}
                    cardsFront={card.image}
                    flipped={flipped.includes(card.id)}
                    handleClick={handleClick}
                    disabled={disabled || solved.includes(card.id)}
                    solved={solved.includes(card.id)}
                    {...card}
                />       
            ))}
        </div>  
    )
}

export default Board
