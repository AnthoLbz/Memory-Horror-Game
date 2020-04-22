import React, { useState, useEffect } from 'react';
import Board from './components/Card'
import axios from 'axios'


const App = () => {
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])

  const handleClick = (id) => setFlipped([...flipped, id])

  useEffect(() =>{
    getData()
  }, [])

  useEffect(() => {
    setCards(initializeDeck())
  }, [])

  const getData = () => {
    axios.get('https://horrormemo.herokuapp.com/memory')
        // .then(response => console.log(response.data))
        .then(response => setCards(response.data))
  }

  // déplacer getData dans un fichier genre initializeDeck (voir vers 23 minutes)

  return (
    <>
    <Board cards={cards} flipped={flipped} handleClick={handleClick} />
    </>
  )
}


export default App;
