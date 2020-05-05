import React, { useState, useEffect } from 'react';
import Board from './components/Board'
import axios from 'axios'
import shuffle from 'shuffle-array'
import Timer from './components/Timer'
import UserTimer from './components/UserTimer'
import Counter from './components/Counter'
import ModalFinishGame from './components/ModalFinishGame'
import './App.css';
import 'semantic-ui-css/semantic.min.css'

const App = () => {

  const [cards, setCards] = useState([])
  const [cardsBack, setCardsBack] = useState([])
  const [flipped, setFlipped] = useState([])
  const [solved, setSolved] = useState([])
  const [disabled, setDisabled] = useState(false)
  const [count, setCount] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(10)
  
  const countMoves = (count) => {
    setCount(count + 1)
  }

  const handleClick = (id) => {
    setDisabled(true) 
    if (flipped.length === 0) { 
      setFlipped([id]) 
      setDisabled(false) 
    } else {
      if (sameCardClicked(id)) return 
        setFlipped([flipped[0], id])
      if (isMatch(id)){
        countMoves(count)
        setSolved([...solved, flipped[0], id]) 
        resetCards()
      } else {
        countMoves(count)
        setTimeout(resetCards, 1000)
      }
    }   
  }
  
const finishGame = () => {
  if (cards.length === solved.length) {
    return <ModalFinishGame />
  }
}

 const resetCards = () => {
   setFlipped([])
   setDisabled(false)
 } 

 const sameCardClicked = (id) => flipped.includes(id) 

 const isMatch = (id) => {
  const clickedCard = cards.find(card => card.id === id) 
  const flippedCard = cards.find(card => flipped[0] === card.id) 
  return flippedCard.name === clickedCard.name
 }

 useEffect(()=>{
  timer(minutes,seconds)
 },[])
 
  useEffect(() => {
    getData()
  }, [])
  
  const getData = () => {
    axios.get('https://horrormemo.herokuapp.com/memory')
        // .then(response => console.log(response.data))
        .then(response => {
          setCards(shuffle(shuffle(response.data.filter(e => e.id <= 19)).filter((e, index) => index < 10).reduce((res, current) => [...res, current, {id : current.id +20, name : current.name, image :current.image }],[])))
          setCardsBack(response.data.filter(e => e.id === 27).map(e => e.image))
        })
      }
  
  const timer = (minutes,seconds) => {
      const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds -= 1)
      }
      if (seconds === 0) {
        if (minutes === 0) {
         clearInterval(interval)
        } else {
            setMinutes(minutes - 1)
            setSeconds(seconds = 59)
        }
      }
    }, 1000)
  }

console.log(solved)
  return (
    <>
    {finishGame()}
    <Board 
      cards={cards} 
      cardsBack={cardsBack} 
      flipped={flipped} 
      handleClick={handleClick} 
      disabled={disabled}
      solved={solved}
      />
    <Timer minutes={minutes}
      seconds={seconds}  />
    <Counter count={count} />
    <UserTimer />
    </>
  );
}


export default App;