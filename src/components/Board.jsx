import React from 'react';
import Card from './Card'



function Board ({cards, cardsBack, flipped, handleClick }) {
    return(
        <div className='board'>
            {cards.map(card => (
                <Card
                    id={card.id}
                    width={100}
                    height={150}
                    back={cardsBack}
                    cardsFront={card.image}
                    flipped={flipped.includes(card.id)}
                    handleClick={() => handleClick(card.id)}
                />       
            ))}
        </div>  
    )
}

export default Board