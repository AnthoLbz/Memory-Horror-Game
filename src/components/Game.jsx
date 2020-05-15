import React, { useState, useEffect } from "react";
import Board from "./Board";
import axios from "axios";
import shuffle from "shuffle-array";
import Timer from "./Timer";
import Counter from "./Counter";
import ModalFinishGame from "./ModalFinishGame";
import ModalGameOver from "./ModalGameOver";
import ModalScare from "./ModalScare";
import ModalAlmostCaught from "./ModalAlmostCaught";
import Trap from "./Trap";
import "semantic-ui-css/semantic.min.css";
import "./game.css";
import { Link } from "react-router-dom";
import PlayList from "./PlayList";

const Game = () => {
  const [cards, setCards] = useState([]);
  const [cardsBack, setCardsBack] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);
  const [bonus, setBonus] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = useState(30);
  const [isActive, setIsActive] = useState(false);
  const [minutes, setMinutes] = useState(1);
  const [viewScare, setViewScare] = useState(false);
  const [viewTrap, setViewTrap] = useState(false);
  const [viewModalAlmost, setViewModalAlmost] = useState(false);

  const newGame = () => {
    setSolved([]);
    setCount(0);
    shuffle(cards);
    reset();
    setMinutes(1);
    setSeconds(10);
    setBonus([]);
  };

  function reset() {
    setMinutes(1);
    setSeconds(30);
    setIsActive(true);
  }

  useEffect(() => {
    let interval = null;
    if (seconds > 0) {
      interval = setInterval(() => {
        setSeconds((seconds) => (seconds -= 1));
      }, 1000);
    }
    if (minutes === 1 && seconds === 0) {
      setMinutes((minutes) => minutes - 1);
      setSeconds((seconds) => (seconds = 59));
    } else if (!isActive && seconds === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, minutes]);

  const countMoves = (count) => {
    setCount(count + 1);
  };

  const handleClick = (id) => {
    // setDisabled(true);

    if (flipped.length === 0) {
      setFlipped([id]);
      setDisabled(false);

      if (id > 21 && id < 27) {
        countMoves(count);
        setBonus([...bonus, id]);
        setDisabled(true);
        resetCards();
      }
      if (id === 22) {
        countMoves(count);
        setBonus([...bonus, id]);
        setDisabled(true);
        resetCards();
        setViewScare(true);
        setTimeout(jumpScare, 2000);
      }
      if (id === 24) {
        countMoves(count);
        setDisabled(true);
        resetCards();
        setViewTrap(true);
        shuffleCard();
        setTimeout(viewTrapOff, 3500);
      }
      if (id === 26) {
        setViewModalAlmost(true);
        setCount(count - 2);
        setBonus([...bonus, id]);
        setDisabled(true);
        resetCards();
        setTimeout(() => setViewModalAlmost(false), 2000);
      }
    } else {
      if (sameCardClicked(id)) return;
      setFlipped([flipped[0], id]);

      if (flipped.length === 2) {
        setFlipped([id]);
        setDisabled(false);
        resetCards();
      }

      if (isMatch(id)) {
        countMoves(count);
        setSolved([...solved, flipped[0], id]);
        resetCards();
      }
      if (id > 23 && id < 27) {
        countMoves(count);
        setBonus([...bonus, id]);
        setDisabled(true);
        resetCards();
      }
      if (id === 22) {
        countMoves(count);
        setBonus([...bonus, id]);
        setDisabled(true);
        resetCards();
        setViewScare(true);
        setTimeout(jumpScare, 2000);
      }
      if (id === 24) {
        countMoves(count);
        setDisabled(true);
        resetCards();
        setViewTrap(true);
        shuffleCard();
        setTimeout(viewTrapOff, 3500);
      }
      if (id === 26) {
        setViewModalAlmost(true);
        setCount(count - 2);
        setBonus([...bonus, id]);
        setDisabled(true);
        resetCards();
        setTimeout(() => setViewModalAlmost(false), 2000);
      } else {
        countMoves(count);
        setTimeout(resetCards, 1000);
      }
    }
  };
  const shuffleCard = () => {
    shuffle(cards);
  };

  const viewTrapOff = () => {
    setViewTrap(false);
  };

  const jumpScare = () => {
    setViewScare(false);
  };

  const chooseModal = () => {
    if (solved.length === cards.length - 3) {
      return <ModalFinishGame count={count} resetGame={newGame} />;
    } else if (minutes === 0 && seconds === 0) {
      return <ModalGameOver resetGame={newGame} />;
    }
  };

  const resetCards = () => {
    setFlipped([]);
    setDisabled(false);
  };

  const sameCardClicked = (id) => flipped.includes(id);

  const isMatch = (id) => {
    const clickedCard = cards.find((card) => card.id === id);
    const flippedCard = cards.find((card) => flipped[0] === card.id);
    return flippedCard.name === clickedCard.name;
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get("https://horrormemo.herokuapp.com/memory").then((response) => {
      setCards(
        shuffle(
          shuffle(response.data.filter((e) => e.id <= 19))
            .filter((e, index) => index < 10)
            .reduce(
              (res, current) => [
                ...res,
                current,
                {
                  id: current.id + 30,
                  name: current.name,
                  image: current.image,
                },
              ],
              []
            )
            .concat(
              response.data.filter(
                (e) => e.id === 26 || e.id === 22 || e.id === 24
              )
            )
        ),
        setCardsBack(
          response.data.filter((e) => e.id === 27).map((e) => e.image)
        )
      );
    });
  };
  // console.log(disabled);
  // console.log(cards);
  console.log(cards);

  return (
    <div className="background">
      <div>
        <Link to="/" className="gameTitle">
          Memory Horror Game
        </Link>
      </div>
      <div className="outerBox">
        <div className='timerCounterContainer'>
        <Timer minutes={minutes} seconds={seconds} />
        <Counter count={count} />
        </div>
        <div className="box">
          <Board
            cards={cards}
            cardsBack={cardsBack}
            flipped={flipped}
            handleClick={handleClick}
            disabled={disabled}
            solved={solved}
            bonus={bonus}
          />
        </div>
      </div>
      <div className="playlist">
        <PlayList />
      </div>
       {chooseModal()} 
      {viewScare ? <ModalScare /> : null}
      {viewTrap ? <Trap /> : null}
      {viewModalAlmost ? <ModalAlmostCaught /> : null}
    </div>
  );
};

export default Game;
