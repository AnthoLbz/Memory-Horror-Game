import React, { useState, useEffect } from 'react';
import Board from './components/Card'
import axios from 'axios'
import shuffle from 'shuffle-array'


const App = () => {
  const [cards, setCards] = useState([])

  const [flipped, setFlipped] = useState([])
  const handleClick = (id) => setFlipped([...flipped, id])


useEffect(() =>{
  getData()
}, [])
  
  const getData = () => {
    axios.get('https://horrormemo.herokuapp.com/memory')
        // .then(response => console.log(response.data))
        .then(response => {
          setCards(response.data.filter(e =>e.id <= 10))
          
          
  
        })
}


  return (
    <>
    <Board cards={cards} flipped={flipped} handleClick={handleClick} />
    </>
  )
}


export default App;
