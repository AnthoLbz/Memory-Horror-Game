import React, { useState, useEffect } from 'react';
import Board from './components/Board'
import axios from 'axios'
import shuffle from 'shuffle-array'
import './App.css';

const App = () => {
  const [cards, setCards] = useState([])
  const [cardsBack, setCardsBack] = useState([])
  const [flipped, setFlipped] = useState([])
  const [solved, setSolved] = useState([])
  const [disabled, setDisabled] = useState(false)
  

  const handleClick = (id) => {
    setDisabled(true) // quand on clique sur une carte, on ne peut pas cliquer sur une autre (41 min 20)
    if (flipped.length === 0) { // aucune carte n'est retournée (43'50)
      setFlipped([id]) // au clic, on met l'ID dans le tableau flipped
      setDisabled(false) // une autre carte pourra être retournée car le board est disabled
    } else {
      if (sameCardClicked(id)) return // carte déjà retournée et carte qu'on retourne maintenant
        setFlipped([flipped[0], id])
      if (isMatch(id)){
        setSolved([...solved, flipped[0], id]) // nouveau tableau : on spread les cartes trouvées, on les met dans le tableau; carte retournée / carte qu'on vient de cliquer
        resetCards()
      } else {
        setTimeout(resetCards, 1000)
      }
    }   
  }
  
 const resetCards = () => {
   setFlipped([])
   setDisabled(false)
 } 
const sameCardClicked = (id) => flipped.includes(id) // on veut savoir si les valeurs du tableau flipped contiennent cette carte

 const isMatch = (id) => {
  const clickedCard = cards.find(card => card.id === id) 
  const flippedCard = cards.find(card => flipped[0] === card.id) 
  return flippedCard.name === clickedCard.name
 }

  useEffect(() => {
    getData()
  }, [])
  
  const getData = () => {
    axios.get('https://horrormemo.herokuapp.com/memory')
        // .then(response => console.log(response.data))
        .then(response => {
          setCards(response.data.filter(e => e.id <= 10).reduce((res, current) => [...res, current, {id : current.id +10, name : current.name, image :current.image }],[]))
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
      disabled={disabled}
      solved={solved} />
    </>
  )
  
}


export default App;