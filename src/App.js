import React, { useState, useEffect } from 'react';
import Board from './components/Board'
import axios from 'axios'
import shuffle from 'shuffle-array'



const App = () => {
  const [cards, setCards] = useState([])
  const [cardsBack, setCardsBack] = useState()
  const [flipped, setFlipped] = useState([])
  const [solved, setSolved] = useState([])
  const [disabled, setDisabled] = useState(false)

  const handleClick = (id) => {
    setDisabled(true)
    // ajouter if... à 43 minutes
    setFlipped([...flipped, id])
  }

  useEffect(() =>{
    getData()
  }, [])
  
  const getData = () => {
    axios.get('https://horrormemo.herokuapp.com/memory')
        // .then(response => console.log(response.data))
        .then(response => {
          setCards(response.data.filter(e => e.id <= 10).reduce((res, current) => [...res,current,current],[]))
          setCardsBack(response.data.filter(e => e.id === 27).map(e => e.image))
        })
}


console.log(cards)
  return (
    <>
    <Board 
      cards={cards} 
      cardsBack={cardsBack} 
      flipped={flipped} 
      handleClick={handleClick} 
      disabled={disabled} />
    </>
  )
  
}


export default App;