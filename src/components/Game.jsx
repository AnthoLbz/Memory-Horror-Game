import React, { useState, useEffect } from 'react';
import Board from './Board'
import axios from 'axios'
import shuffle from 'shuffle-array'
import Timer from './Timer'
import UserTimer from './UserTimer'
import Counter from './Counter'
import ModalFinishGame from './ModalFinishGame'
import ModalGameOver from './ModalGameOver'
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
  const [seconds, setSeconds] = useState(59);
  const [isActive, setIsActive] = useState(false);
  const [minutes, setMinutes] = useState(0) 


  
  const newGame = () => {
    setSolved([]);
    setCount(0);
    shuffle(cards)
    reset()
    setMinutes(0)
  }

   function reset() {
     setSeconds(59);
     setIsActive(true);
   }

   useEffect(() => {
     let interval = null;
     if (seconds > 0) {
       interval = setInterval(() => {
         setSeconds((seconds) => (seconds -= 1));
       }, 1000);
     } else if (!isActive && seconds === 0) {
       clearInterval(interval);
     }
     return () => clearInterval(interval);
   }, [isActive, seconds]);

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
  
// const finishGame = () => {
//   if (solved.length === cards.length) {
//     return <ModalFinishGame count={count} resetGame={newGame} />
//   }
// }
// const gameOver =() =>{
//   if ((minutes ===0) && (seconds === 0)){
//     return <ModalGameOver resetGame={newGame} />
//   }
// }

const chooseModal =() =>{
   if (solved.length === 2) {
     return <ModalFinishGame count={count} resetGame={newGame} />;
   }
   else if ((minutes ===0) && (seconds === 0)){
    return <ModalGameOver resetGame={newGame} />
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
      {/* <PlayList /> */}
      {chooseModal()}
      {}
    </div>
  );
};


export default Game;
