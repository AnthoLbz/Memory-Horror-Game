import React from "react";
import "./landing.css";
import Button from "./Buttons";
import "./button.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <h2 class="container">
        <p>Welcome to, The game....</p>
        <p>
          So you think you just stumbled upon some classic joyful memory game ?
        </p>
        <p>
          God forbid your kind soul, for here... Well, you'll be met by some of
          the most fearfull encounters of your life !
        </p>
        <p>
          Try your luck with our cards, but don't go easy on this game, because
          They won't...
        </p>
        <p>
          Here, click on the play button to meet your end ! I mean your fate...
        </p>
      </h2>
      <Link to="/game">
        <Button
          class="play"
          onClick={() => {
            console.log("You clicked!");
          }}
          type="button"
          buttonSize="btn--game"
          buttonStyle="btn--play--solid"
        >
          ► Play
        </Button>
      </Link>
        <Link to="/videos" className="videos"> Videos</Link>

    </>
  );
};
export default Landing;
