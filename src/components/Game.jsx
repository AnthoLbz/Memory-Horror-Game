import React, { useState, useEffect } from 'react';
import Board from './Board'
import axios from 'axios'
import shuffle from 'shuffle-array'
import Timer from './Timer'
import UserTimer from './UserTimer'
import Counter from './Counter'
import ModalFinishGame from './ModalFinishGame'
import 'semantic-ui-css/semantic.min.css'
import "./game.css";
import { Link } from "react-router-dom";
import PlayList from "./PlayList";

const Game = () => {
  const [cards, setCards] = useState([])
  const [cardsBack, setCardsBack] = useState([])
  const [flipped, setFlipped] = useState([])
  const [solved, setSolved] = useState([])
  const [disabled, setDisabled] = useState(false)
  const [count, setCount] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(59)  

  // const newGame = () => {
  //   setSolved([]);
  //   setCount(0);
  //   shuffle(cards)
  //   setSeconds(59)
  // }

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
  function refreshPage() {
    window.location.reload(false);
  }
  if (solved.length === 2) {
    return <ModalFinishGame count={count} resetGame={refreshPage} />
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
  timer(minutes, seconds)
 }, [])
 
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
        if (minutes === 0 || solved.length === 2) {
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
    <div className="background">
      <div>
        <Link to="/" className="title">
          Memory Horror Game
        </Link>
      </div>
      <div className="box">
        <Board
          cards={cards}
          cardsBack={cardsBack}
          flipped={flipped}
          handleClick={handleClick}
          disabled={disabled}
          solved={solved}
        />
      </div>
      <Timer minutes={minutes} seconds={seconds} />
      <Counter count={count} />
      <UserTimer />
      <PlayList/>
      {finishGame()}
    </div>
  );
};


export default Game;
