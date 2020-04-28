import React, { useState, useEffect } from "react";
import Board from "./Board";
import axios from "axios";
import "./game.css";
import { Link } from "react-router-dom";
// import shuffle from "shuffle-array";

const Game = () => {
  const [cards, setCards] = useState([]);
  const [cardsBack, setCardsBack] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const handleClick = (id) => {
    setDisabled(true);
    if (flipped.length === 0) {
      setFlipped([id]);
      setDisabled(false);
    } else {
      if (sameCardClicked(id)) return;
      setFlipped([flipped[0], id]);
      if (isMatch(id)) {
        setSolved([...solved, flipped[0], id]);
        resetCards();
      } else {
        setTimeout(resetCards, 1000);
      }
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
    axios
      .get("https://horrormemo.herokuapp.com/memory")
      // .then(response => console.log(response.data))
      .then((response) => {
        setCards(
          response.data
            .filter((e) => e.id <= 10)
            .reduce(
              (res, current) => [
                ...res,
                current,
                {
                  id: current.id + 10,
                  name: current.name,
                  image: current.image,
                },
              ],
              []
            )
        );
        setCardsBack(
          response.data.filter((e) => e.id === 27).map((e) => e.image)
        );
      });
  };

  console.log(cards);

  return (
    <div className="background">
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
    </div>
  );
};


export default Game;
