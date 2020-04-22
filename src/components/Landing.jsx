import React from "react";
import "./landing.css";
import Button from "./Buttons";
import "./button.css";

const Landing = () => {
  return (
    <>
      <h1 className="title">Memory Horror Game</h1>
      <h2 class="container">
        <p>Welcome to a new kind of game, from which you won't escape unscathed... </p>
        <p>blabla</p>
        <p>blabla</p>
        <p></p>
        <p></p>
      </h2>

      <>
        <Button
          onClick={() => {
            console.log("You clicked!");
          }}
          type="button"
          buttonSize="btn--large"
          buttonStyle="btn--easy--solid"
        >
          easy
        </Button>
        <Button
          onClick={() => {
            console.log("You clicked!");
          }}
          type="button"
          buttonSize="btn--large"
          buttonStyle="btn--medium--solid"
        >
          medium
        </Button>
        <Button
          onClick={() => {
            console.log("You clicked!");
          }}
          type="button"
          buttonSize="btn--large"
          buttonStyle="btn--hard--solid"
        >
          hard
        </Button>
        <Button
          onClick={() => {
            console.log("You clicked!");
          }}
          type="button"
          buttonSize="btn--game"
          buttonStyle="btn--play--solid"
        >
          ► Play
        </Button>
      </>
    </>
  );
};
export default Landing;
