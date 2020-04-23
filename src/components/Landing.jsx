import React from "react";
import "./landing.css";
import Button from "./Buttons";
import "./button.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <h2 class="container">
        <p>
          Welcome to a new kind of game, from which you won't escape
          unscathed...{" "}
        </p>
        <p>blabla</p>
        <p>blabla</p>
        <p></p>
        <p></p>
      </h2>
      <Button class= "play"
        onClick={() => {
          console.log("You clicked!");
        }}
        type="button"
        buttonSize="btn--game"
        buttonStyle="btn--play--solid"
      >
        ► Play
      </Button>
      <div className="videos">
        <Link to="/videos"> Videos</Link>
      </div>
    </>
  );
};
export default Landing;
