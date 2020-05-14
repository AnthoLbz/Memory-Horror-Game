import React from 'react';
import Card from './Card'

function Board ({cards, cardsBack, flipped, handleClick, disabled, solved, bonus }) {
    return(
        <div className='board'>
            {cards.map((card) => (
                <Card
                    key={card.id}
                    bonus={bonus.includes(card.id)}
                    id={card.id}
                    width={120}
                    height={160}
                    back={cardsBack}
                    cardsFront={card.image}
                    flipped={flipped.includes(card.id)}
                    handleClick={handleClick}
                    disabled={disabled || solved.includes(card.id) || bonus.includes(card.id)}
                    solved={solved.includes(card.id)}
                    {...card}
                />       
            ))}
        </div>  
    )
}

export default Board
