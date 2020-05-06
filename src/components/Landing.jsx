import React from "react";
import "./landing.css";
import Button from "./Buttons";
import "./button.css";
import { Link } from "react-router-dom";
import PlayList from "./PlayList";


const Landing = () => {
  return (
    <div className="landing">
      <Link to="/" className="title">
        Memory Horror Game
      </Link>
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
      <Link to="/Game">
        <Button
          class="play"
          type="button"
          buttonSize="btn--game"
          buttonStyle="btn--play--solid"
          onClick
        >
          ► Play
        </Button>
      </Link>
      <Link to="/Videos">
        <p className="videos">Videos</p>
      </Link>
      <PlayList />
    </div>
  );
};
export default Landing;
