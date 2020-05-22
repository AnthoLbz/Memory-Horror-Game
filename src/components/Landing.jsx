import React from "react";
import "./landing.css";
import { Link } from "react-router-dom";
import PlayList from "./PlayList";

const Landing = () => {
  return (
    <div className="landing">
      <div className="landingDiv">
        <Link to="/" className="landingTitle">
          Memory Horror Game
        </Link>
      </div>
      <h2 className="container">
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
        <button className="play">
          ► Play
        </button>
      </Link>
      <div className="footer">
        <Link to="/Videos">
          <p>Videos</p>
        </Link>
        <Link to="/Contact">
          <p>About us</p>
        </Link>
      </div>
      <div className="playlist-landing">
        <PlayList />
      </div>
    </div>
  );
};
export default Landing;
